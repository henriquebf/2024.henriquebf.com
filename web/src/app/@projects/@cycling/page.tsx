import { getSchedule } from "@/helpers/cyclingHelper";
import { GoalRecord } from "@/models/Goal";
import styles from "./page.module.css";

export default function Cycling({ goal }: { goal: GoalRecord | null }) {
  if (!goal) return null; // FIXME!

  const { total, distance } = goal;
  const progress = (Math.ceil(distance * 100) / total).toFixed(1);
  const schedule = getSchedule(total, distance);
  const currentYear = new Date().getFullYear();

  return (
    <div className="project-item">
      <h4>Cycling Goal for {currentYear}</h4>
      <p className={styles.text}>
        I have completed <b>{Math.ceil(distance / 1000)} km</b> of my{" "}
        <b className={styles.strong}>{Math.ceil(total / 1000)} km</b> yearly
        goal. This is a total progress of{" "}
        <b className={styles.strong}>{progress}%</b> and it is{" "}
        <b className={styles.strong}>
          {Math.abs(Math.ceil(schedule / 1000))} km
        </b>{" "}
        {schedule > 0 ? "ahead of" : "behind"} schedule.
      </p>
      <div
        className={styles.progress_bar}
        style={{
          backgroundImage: `linear-gradient(to right, var(--progress_complete), var(--progress_complete) ${progress}%, var(--progress_remaining) ${
            progress + 1
          }%, var(--progress_remaining))`,
        }}
      ></div>
    </div>
  );
}
