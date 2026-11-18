// An 8-bit cat with two running frames and a sitting pose, drawn on an
// 18 x 12 pixel grid. The caller switches between the poses through the
// class names (see the timeline styles). Outline and details use the text
// color, the body is a light tint of it and the eyes use the highlight color.
//
// Sprite legend: # outline, o body, e eye, - whisker, . empty.

const RUN_BODY = [
  "...........#....#.",
  "..........#o####o#",
  "..........#oooooo#",
  "..........#oeooeo#",
  "#..#######ooo##oo#",
  ".##oooooooooooooo#",
  "..#ooooooooooooo#.",
  "..###############.",
];
const RUN_LEGS_A = ["..#..#......#...#.", ".#....#....#.....#"];
const RUN_LEGS_B = ["...##.........##..", "...##.........##.."];

const SIT = [
  ".........#....#..",
  "........#o####o#.",
  "........#oooooo#.",
  "........#oeooeo#.",
  ".......-#oo##oo#-",
  ".#......#oooooo#.",
  "#..######oooooo#.",
  "#.#oooooooooooo#.",
  "#.#oooooooooooo#.",
  ".##ooo#oooooooo#.",
  "..#oooo#oo#o#oo#.",
  "..##############.",
];

const FILLS: Record<string, { fill: string; opacity?: number }> = {
  "#": { fill: "currentColor" },
  o: { fill: "currentColor", opacity: 0.18 },
  e: { fill: "var(--border_highlight_color)" },
  "-": { fill: "currentColor", opacity: 0.5 },
};

function Sprite({
  rows,
  x = 0,
  y = 0,
}: {
  rows: string[];
  x?: number;
  y?: number;
}) {
  return rows.flatMap((row, r) =>
    [...row].map((cell, c) => {
      const paint = FILLS[cell];
      if (!paint) return null;
      return (
        <rect
          key={`${r}-${c}`}
          x={x + c}
          y={y + r}
          width="1"
          height="1"
          style={{ fill: paint.fill }}
          fillOpacity={paint.opacity}
        />
      );
    }),
  );
}

export default function IllustrationPixelCat({
  className,
  runClassName,
  frameAClassName,
  frameBClassName,
  sitClassName,
}: {
  className?: string;
  runClassName?: string;
  frameAClassName?: string;
  frameBClassName?: string;
  sitClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 18 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {/* running: shared body, legs alternating between two frames */}
      <g className={runClassName}>
        <Sprite rows={RUN_BODY} y={2} />
        <g className={frameAClassName}>
          <Sprite rows={RUN_LEGS_A} y={10} />
        </g>
        <g className={frameBClassName}>
          <Sprite rows={RUN_LEGS_B} y={10} />
        </g>
      </g>
      {/* sitting, once it has arrived */}
      <g className={sitClassName}>
        <Sprite rows={SIT} x={1} />
      </g>
    </svg>
  );
}
