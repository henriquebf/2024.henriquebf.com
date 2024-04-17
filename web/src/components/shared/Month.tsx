import { classNames } from "@/helpers/utilsHelper";
import styles from "./Month.module.css";

export default function Month({
  name,
  year,
  availableHours,
}: {
  name: string;
  year: number;
  availableHours: number;
}) {
  return (
    <div className={styles.month}>
      <div className={styles.calendar}>
        {name} {year}
      </div>

      {availableHours > 0 && (
        <div
          className={classNames([
            styles.info,
            styles.hours,
            availableHours < 64 ? styles.warning : undefined,
          ])}
        >
          {`${availableHours}h`}
        </div>
      )}

      {availableHours === 0 && (
        <div className={classNames([styles.info, styles.unavailable])}>
          unavailable
        </div>
      )}
    </div>
  );
}
