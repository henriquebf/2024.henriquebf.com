import { type NextRequest } from "next/server";
import Goal from "@/models/Goal";
import { verifyToken } from "@/services/strava/postPushSubscriptions";
import postOAuthToken from "services/strava/postOAuthToken";
import getAthlete from "@/services/strava/getAthlete";
import getAthleteStats from "@/services/strava/getAthleteStats";

export async function GET(req: NextRequest) {
  const body = await req.json();
  const { searchParams } = req.nextUrl;

  // Respond to Strava, if confirming subscription
  if (
    searchParams.get("hub.verify_token") === verifyToken &&
    searchParams.get("hub.mode") === "subscribe" &&
    searchParams.get("hub.challenge")
  ) {
    console.log(
      `api/push: responding hub (${searchParams.get("hub.challenge")})`
    );
    return Response.json({
      "hub.challenge": searchParams.get("hub.challenge"),
    });
  }

  // Execute user push
  console.log(`api/push: receiving push for ${body.owner_id}...`);

  // Find refresh token
  const goal = await Goal.findOne({ athleteId: body.owner_id });
  if (!goal?.refreshToken) {
    throw new Error("api/push: could not find a valid refreshToken!");
  }

  // Update access token
  const data = await postOAuthToken(goal.refreshToken, "refresh_token");
  if (!data?.access_token) {
    throw new Error("api/push: invalid token response!");
  }

  // Update Goal data
  const athlete = await getAthlete(data.access_token);
  const athleteStats = await getAthleteStats(data.access_token, athlete.id);
  const distance = athleteStats?.ytd_ride_totals?.distance;
  if (distance >= 0) {
    await Goal.save(
      goal ? { ...goal, distance } : { athleteId: athlete.id, distance }
    );
    console.log(`api/push: updated for ${body.owner_id}. (${distance}m)`);
  } else {
    console.error(`api/push: invalid distance for ${body.owner_id}!`);
  }

  return Response.json({}, { status: 200 });
}
