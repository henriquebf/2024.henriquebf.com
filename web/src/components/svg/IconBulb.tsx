// Hanging light bulb (cap up, glass down) in the same thin line style as the
// other icons. Inherits the text color; `glassClassName` lets the caller fill
// the glass to "switch it on".
export default function IconBulb({
  size = 22,
  className,
  glassClassName,
}: {
  size?: number;
  className?: string;
  glassClassName?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* screw cap */}
      <path d="M10 2h4M9.5 4.5h5" />
      {/* glass */}
      <path
        className={glassClassName}
        d="M9 7v.3c0 .8-.4 1.5-1 2A7 7 0 1 0 16 9.3c-.6-.5-1-1.2-1-2V7Z"
      />
      {/* filament */}
      <path d="M10.5 12.5l1.5 2.5 1.5-2.5" />
    </svg>
  );
}
