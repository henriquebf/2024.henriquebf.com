import { NextRequest } from "next/server";
import Goal from "@/models/Goal";
import postOAuthToken from "services/strava/postOAuthToken";
import getAthlete from "@/services/strava/getAthlete";
import getAthleteStats from "@/services/strava/getAthleteStats";
import postPushSubscriptions from "@/services/strava/postPushSubscriptions";
import getPushSubscriptions from "@/services/strava/getPushSubscriptions";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const session: any = await getSession();

  try {
    const code = searchParams.get("code");
    if (typeof code !== "string") {
      throw new Error("oauth: code not provided!");
    }

    // Request tokens from Strava
    const data = await postOAuthToken(code, "authorization_code");
    if (!data?.athlete?.id || !data?.refresh_token) {
      throw new Error("oauth: invalid token response!");
    }
    const refreshToken = data.refresh_token;

    // Check if strava user has admin credentials
    if (process.env.STRAVA_ADMIN_ID !== String(data.athlete.id)) {
      redirect("/admin");
    }

    // Update Goal data
    const athlete = await getAthlete(data.access_token);
    const goal = await Goal.findOne({ athleteId: athlete.id });
    const athleteStats = await getAthleteStats(data.access_token, athlete.id);
    const distance = athleteStats?.ytd_ride_totals?.distance;
    if (distance >= 0) {
      await Goal.save(
        goal
          ? { ...goal, refreshToken, distance }
          : { athleteId: athlete.id, refreshToken, distance }
      );
    }

    // Save session
    session.athleteId = String(data.athlete.id);
    await session.save();

    // Subscribe to push notifications (async)
    const subscriptions = await getPushSubscriptions();
    if (!subscriptions?.length) {
      const response = await postPushSubscriptions();
      if (!response) {
        console.error("push: could not subscribe!");
      }
    }

    redirect("/admin/edit");
  } catch (err) {
    console.error(err);
    session.destroy();
    redirect("/admin");
  }
}
