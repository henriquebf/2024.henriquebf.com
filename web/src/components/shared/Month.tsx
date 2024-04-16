import { classNames } from "../../helpers/utilsHelper";

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
    <div className="month">
      <div className="calendar">
        {name} {year}
      </div>

      {availableHours > 0 && (
        <div
          className={classNames([
            "info",
            "hours",
            availableHours < 64 ? "warning" : undefined,
          ])}
        >
          {`${availableHours}h`}
        </div>
      )}

      {availableHours === 0 && (
        <div className={classNames(["info", "unavailable"])}>unavailable</div>
      )}
    </div>
  );
}
