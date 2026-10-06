const fs = require('fs');

function roundedPolygon(points, radius = 18) {
  const n = points.length;
  let d = '';
  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const curr = points[i];
    const next = points[(i + 1) % n];

    const vPrev = { x: prev.x - curr.x, y: prev.y - curr.y };
    const lenPrev = Math.hypot(vPrev.x, vPrev.y);
    const uPrev = { x: vPrev.x / lenPrev, y: vPrev.y / lenPrev };

    const vNext = { x: next.x - curr.x, y: next.y - curr.y };
    const lenNext = Math.hypot(vNext.x, vNext.y);
    const uNext = { x: vNext.x / lenNext, y: vNext.y / lenNext };

    const r = Math.min(radius, lenPrev / 2.1, lenNext / 2.1);

    const pStart = { x: curr.x + uPrev.x * r, y: curr.y + uPrev.y * r };
    const pEnd = { x: curr.x + uNext.x * r, y: curr.y + uNext.y * r };

    if (i === 0) {
      d += `M ${pStart.x.toFixed(1)},${pStart.y.toFixed(1)} `;
    } else {
      d += `L ${pStart.x.toFixed(1)},${pStart.y.toFixed(1)} `;
    }
    d += `Q ${curr.x.toFixed(1)},${curr.y.toFixed(1)} ${pEnd.x.toFixed(1)},${pEnd.y.toFixed(1)} `;
  }
  return d + 'Z';
}

const Cx = 460;
const Cy = 325;

// 1. Center Diamond
const dR = 108;
const diamondPts = [
  { x: Cx, y: Cy - dR }, // (460, 217)
  { x: Cx + dR, y: Cy }, // (568, 325)
  { x: Cx, y: Cy + dR }, // (460, 433)
  { x: Cx - dR, y: Cy }  // (352, 325)
];

// 2. Top-Left Wide Tile (Grand Wedding Reception)
// Reaches Y = 4 at top, X = 15 at left, X = 636 at top-right
const runnerPts = [
  { x: 20, y: 4 },
  { x: 636, y: 4 },
  { x: 342, y: 298 }
];

// 3. Bottom-Left Wide Tile (Cultural Heritage & Stage)
const treePts = [
  { x: 342, y: 352 },
  { x: 636, y: 646 },
  { x: 20, y: 646 }
];

// 4. Top-Right Tile (Artisan Tablescape & Arch)
const sittingPts = [
  { x: 654, y: 4 },
  { x: 882, y: 4 },
  { x: 578, y: 308 },
  { x: 468, y: 198 }
];

// 5. Bottom-Right Tile (Milestone Celebration & Canopy)
const womanPts = [
  { x: 468, y: 452 },
  { x: 578, y: 342 },
  { x: 882, y: 646 },
  { x: 654, y: 646 }
];

// 6. Far-Right Grand Installation Tile (FULL to the right and tall)
// Left nose points at (594, 325)
// Top diagonal goes to (900, 18)
// Top edge goes to (996, 18)
// Right edge goes to (996, 632)
// Bottom edge goes to (900, 632)
const ramPts = [
  { x: 594, y: 325 },
  { x: 900, y: 19 },
  { x: 996, y: 19 },
  { x: 996, y: 631 },
  { x: 900, y: 631 }
];

const paths = {
  diamond: roundedPolygon(diamondPts, 18),
  runner: roundedPolygon(runnerPts, 18),
  tree: roundedPolygon(treePts, 18),
  sitting: roundedPolygon(sittingPts, 18),
  woman: roundedPolygon(womanPts, 18),
  ram: roundedPolygon(ramPts, 22)
};

console.log(JSON.stringify(paths, null, 2));
fs.writeFileSync('paths_full.json', JSON.stringify(paths, null, 2));
