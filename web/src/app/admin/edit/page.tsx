import Container from "@/components/layout/Container";
import { getSession } from "@/lib/session";
import Availability from "@/models/Availability";
import Goal from "@/models/Goal";
import Link from "next/link";

export default async function Edit() {
  const session: any = await getSession();
  const athleteId = session.athleteId;

  if (athleteId !== process.env.STRAVA_ADMIN_ID) {
    return Response.redirect("https://henriquebf.com/admin", 302);
  }

  const currentYear = new Date().getFullYear();
  const goal = await Goal.findOne({ athleteId: Number(athleteId) });
  const availabilities = await Availability.find({});

  return (
    <Container>
      <h1>Settings</h1>
      <h2>Goal in {currentYear}</h2>
      {goal && (
        <table>
          <tr>
            <td>
              <b>Total:</b>
            </td>
            <td>{goal.total} m</td>
          </tr>
          <tr>
            <td>
              <b>Distance:</b>
            </td>
            <td>{goal.distance} m</td>
          </tr>
        </table>
      )}
      <h2>Availability</h2>
      <table>
        {availabilities.map((a, index) => (
          <tr key={index}>
            <td>
              <b>
                {a.year}.{a.month}
              </b>
            </td>
            <td>{a.unavailableDays}</td>
          </tr>
        ))}
      </table>
      <h3>Actions</h3>
      <footer>
        <Link href={`/api/logout`}>logout</Link>
      </footer>
    </Container>
  );
}
