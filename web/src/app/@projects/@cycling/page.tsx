import { getSchedule } from "@/helpers/cyclingHelper";
import { GoalRecord } from "@/models/Goal";

export default function Cycling({ goal }: { goal: GoalRecord | null }) {
  if (!goal) return null; // FIXME!

  const { total, distance } = goal;
  const progress = (Math.ceil(distance * 100) / total).toFixed(1);
  const schedule = getSchedule(total, distance);
  const currentYear = new Date().getFullYear();

  return (
    <div className="project-item">
      <h4>Cycling Goal for {currentYear}</h4>
      <p>
        I have completed <b>{Math.ceil(distance / 1000)} km</b> of my{" "}
        <b>{Math.ceil(total / 1000)} km</b> yearly goal. This is a total
        progress of <b>{progress}%</b> and it is{" "}
        <b>{Math.abs(Math.ceil(schedule / 1000))} km</b>{" "}
        {schedule > 0 ? "ahead of" : "behind"} schedule.
      </p>
      <div className="progress-bar"></div>
    </div>
  );
}
