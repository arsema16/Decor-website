"use client";

import { motion } from "framer-motion";

// Diamond tile size and gap
const S = 148; // half-diagonal of each diamond (controls size)
const G = 6;   // gap between diamonds

export default function MoodBoardMosaic() {
  // Grid: 3 columns × 3 rows of diamonds arranged in offset grid
  // Center points for a 3-col × 3-row diamond grid
  // Diamond grid: col offset every other row
  // We'll place diamonds at specific (cx, cy) centers

  const d = S; // half-size of diamond bounding box
  const step = S + G; // center-to-center distance

  // 3 columns, 3 rows — row 1 offset by half step
  // col centers (x): 0, step, 2*step
  // row centers (y): 0, step, 2*step
  // row 1 (top): offset x by step/2
  const cols = [d, d + step, d + step * 2];
  const row0y = d;
  const row1y = d + step;
  const row2y = d + step * 2;

  // 3×3 grid positions
  const centers = [
    // Row 0: 3 diamonds, offset right by step/2 so they sit between row1
    { cx: cols[0] + step / 2, cy: row0y, img: "/images/table-arrangement.png", id: "t0" },
    { cx: cols[1] + step / 2, cy: row0y, img: "/images/wedding-decor.png", id: "t1" },
    { cx: cols[2] + step / 2, cy: row0y, img: "/images/birthday-balloons.png", id: "t2" },
    // Row 1: 3 diamonds
    { cx: cols[0], cy: row1y, img: "/images/red-heart-arch.jpg", id: "t3" },
    { cx: cols[1], cy: row1y, img: "/images/shimglna-decor.png", id: "t4" },
    { cx: cols[2], cy: row1y, img: "/images/engagement-decor.png", id: "t5" },
    // Row 2: offset like row 0
    { cx: cols[0] + step / 2, cy: row2y, img: "/images/corporate-gala.jpg", id: "t6" },
    { cx: cols[1] + step / 2, cy: row2y, img: "/images/graduation-decor.png", id: "t7" },
    { cx: cols[2] + step / 2, cy: row2y, img: "/images/welcome-baby-decor.png", id: "t8" },
  ];

  // Viewbox dims — wide enough so rightmost diamonds bleed off edge
  const VW = 580;
  const VH = (d + step * 2) + d + 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="relative w-full h-full"
      style={{ overflow: "visible" }}
    >
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMaxYMid meet"
        className="block w-full h-auto"
        style={{ overflow: "visible" }}
        aria-label="Maswab Decor event styling mosaic"
      >
        <defs>
          {centers.map(({ cx, cy, id }) => {
            // Diamond clip path: top, right, bottom, left
            const pts = `${cx},${cy - d + G} ${cx + d - G},${cy} ${cx},${cy + d - G} ${cx - d + G},${cy}`;
            return (
              <clipPath key={id} id={`cp-${id}`}>
                <polygon points={pts} />
              </clipPath>
            );
          })}

          {/* Clip accent diamond to SVG viewbox so it can't bleed left */}
          <clipPath id="cp-accent">
            <rect x="0" y="0" width={VW} height={VH} />
          </clipPath>

          {/* Vignette */}
          <radialGradient id="vig-r" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.28" />
          </radialGradient>
        </defs>

        {/* Image tiles */}
        {centers.map(({ cx, cy, img, id }) => (
          <g key={id} clipPath={`url(#cp-${id})`}>
            <image
              href={img}
              x={cx - d}
              y={cy - d}
              width={d * 2}
              height={d * 2}
              preserveAspectRatio="xMidYMid slice"
            />
            {/* vignette overlay */}
            <polygon
              points={`${cx},${cy - d + G} ${cx + d - G},${cy} ${cx},${cy + d - G} ${cx - d + G},${cy}`}
              fill="url(#vig-r)"
            />
          </g>
        ))}

        {/* White seam lines between diamonds */}
        {centers.map(({ cx, cy, id }) => (
          <polygon
            key={`seam-${id}`}
            points={`${cx},${cy - d + G} ${cx + d - G},${cy} ${cx},${cy + d - G} ${cx - d + G},${cy}`}
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        ))}




      </svg>
    </motion.div>
  );
}
