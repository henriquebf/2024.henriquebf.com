import Container from "@/components/layout/Container";
import Month from "@/components/shared/Month";
import { AvailabilityMonth } from "@/models/Availability";

export default async function Availability() {
  const availabilityMonths: AvailabilityMonth[] = []; // FIXME!

  return (
    <section id="availability">
      <Container>
        <div className="content">
          <h2>Availability</h2>
          <div className="calendars">
            {availabilityMonths.map(({ name, year, availableHours }) => (
              <Month
                key={name}
                availableHours={availableHours}
                name={name}
                year={year}
              />
            ))}
          </div>
          <div className="note">
            <p>
              This information is estimated and can be flexible. Please get in
              touch for specific dates and hourly rates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
