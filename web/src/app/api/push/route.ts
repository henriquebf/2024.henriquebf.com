import { after, type NextRequest } from "next/server";
import Goal from "@/models/Goal";
import { verifyToken } from "@/services/strava/postPushSubscriptions";
import postOAuthToken from "@/services/strava/postOAuthToken";
import getAthlete from "@/services/strava/getAthlete";
import getAthleteStats from "@/services/strava/getAthleteStats";

// Strava subscription validation (GET with hub.* query params)
// Ref: https://developers.strava.com/docs/webhooks/
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const challenge = searchParams.get("hub.challenge");

  if (
    searchParams.get("hub.verify_token") !== verifyToken ||
    searchParams.get("hub.mode") !== "subscribe" ||
    !challenge
  ) {
    return Response.json({ error: "invalid verification" }, { status: 403 });
  }

  console.log(`api/push: responding hub (${challenge})`);
  return Response.json({ "hub.challenge": challenge });
}

// Strava webhook events (POST with JSON body).
// Strava requires a 200 within 2 seconds, so the work runs after responding.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const ownerId = Number(body?.owner_id);

  if (!ownerId) {
    console.error("api/push: invalid event body!", body);
    return Response.json({}, { status: 200 });
  }

  console.log(
    `api/push: receiving ${body.object_type}:${body.aspect_type} for ${ownerId}...`
  );

  after(async () => {
    try {
      await updateGoal(ownerId);
    } catch (err) {
      console.error(err);
    }
  });

  return Response.json({}, { status: 200 });
}

const updateGoal = async (ownerId: number) => {
  // Find refresh token
  const goal = await Goal.findOne({ athleteId: ownerId });
  if (!goal?.refreshToken) {
    throw new Error(`api/push: no refreshToken for ${ownerId}!`);
  }

  // Update access token
  const data = await postOAuthToken(goal.refreshToken, "refresh_token");
  if (!data?.access_token) {
    throw new Error("api/push: invalid token response!");
  }

  // Update Goal data (Strava may rotate the refresh token)
  const athlete = await getAthlete(data.access_token);
  const athleteStats = await getAthleteStats(data.access_token, athlete.id);
  const distance = athleteStats?.ytd_ride_totals?.distance;
  if (distance >= 0) {
    await Goal.save({
      ...goal,
      refreshToken: data.refresh_token || goal.refreshToken,
      distance,
    });
    console.log(`api/push: updated for ${ownerId}. (${distance}m)`);
  } else {
    console.error(`api/push: invalid distance for ${ownerId}!`);
  }
};
