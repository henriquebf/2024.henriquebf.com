import { NextRequest } from "next/server";
import Goal from "@/models/Goal";
import postOAuthToken from "services/strava/postOAuthToken";
import getAthlete from "@/services/strava/getAthlete";
import getAthleteStats from "@/services/strava/getAthleteStats";
import postPushSubscriptions from "@/services/strava/postPushSubscriptions";
import getPushSubscriptions from "@/services/strava/getPushSubscriptions";
import { getSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const session: any = await getSession();

  try {
    const oauthError = searchParams.get("error");
    if (oauthError) {
      throw new Error(`oauth: strava returned "${oauthError}"`);
    }
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
    if (process.env.STRAVA_ADMIN_ID?.trim() !== String(data.athlete.id)) {
      throw new Error(
        `auth: athlete ${data.athlete.id} does not match STRAVA_ADMIN_ID`
      );
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

    // Subscribe to push notifications (failure must not break login)
    try {
      const subscriptions = await getPushSubscriptions();
      if (!subscriptions?.length) {
        const response = await postPushSubscriptions();
        if (!response) {
          console.error("push: could not subscribe!");
        }
      }
    } catch (err) {
      console.error(err);
    }

    return Response.redirect(new URL("/admin/edit", req.url));
  } catch (err) {
    console.error(err);
    session.destroy();
    const url = new URL("/admin", req.url);
    url.searchParams.set(
      "error",
      err instanceof Error ? err.message : "login failed"
    );
    return Response.redirect(url);
  }
}
