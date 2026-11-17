// Thin line arrow, drawn in SVG so it never renders as an emoji (iOS does that
// with the ↗ character). Inherits the text color.
export default function IconArrow({
  direction = "up-right",
  size = 10,
  className,
}: {
  direction?: "up-right" | "down";
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {direction === "up-right" ? (
        <path d="M2.5 7.5 7.5 2.5M3.5 2.5h4v4" />
      ) : (
        <path d="M2 3.75 5 6.75l3-3" />
      )}
    </svg>
  );
}
