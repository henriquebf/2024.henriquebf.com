import Container from "@/components/layout/Container";
import Month from "@/components/shared/Month";
import { AvailabilityMonth } from "@/models/Availability";
import styles from "./page.module.css";

export default async function Availability() {
  const availabilityMonths: AvailabilityMonth[] = []; // FIXME!

  return (
    <section id="availability" className={styles.availability}>
      <Container>
        <div className={styles.content}>
          <h2>Availability</h2>
          <div className={styles.calendars}>
            {availabilityMonths.map(({ name, year, availableHours }) => (
              <Month
                key={name}
                availableHours={availableHours}
                name={name}
                year={year}
              />
            ))}
          </div>
          <div className={styles.note}>
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
