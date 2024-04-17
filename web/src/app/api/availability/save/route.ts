import { getSession } from "@/lib/session";
import Availability, { AvailabilityRecord } from "@/models/Availability";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const body = await req.json();
  const session: any = await getSession();

  if (
    typeof body.gearId !== "string" ||
    typeof body.property !== "string" ||
    typeof body.value !== "number"
  ) {
    // Invalid request
    return Response.json({}, { status: 400 });
  }

  const athleteId = session.athleteId;
  if (athleteId !== process.env.STRAVA_ADMIN_ID) {
    // Unauthorized
    return Response.json({}, { status: 401 });
  }

  const availability = await Availability.findOne({});

  // Save data submitted by user
  await Availability.save({
    ...availability,
    [body.property as keyof AvailabilityRecord]: body.value,
  });

  Response.json({}, { status: 200 });
}
