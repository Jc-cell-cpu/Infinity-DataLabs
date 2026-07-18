import { MapPin } from "lucide-react";

// Continents defined as soft elliptical blobs in normalised world space
// (x: 0→1 = west→east, y: 0→1 = north→south). A grid dot is "land" if it
// falls inside any blob — giving a recognisable dotted world map.
const blobs: [number, number, number, number][] = [
  [0.15, 0.30, 0.10, 0.13], [0.06, 0.20, 0.05, 0.05], [0.205, 0.29, 0.05, 0.08], [0.19, 0.44, 0.03, 0.05], [0.225, 0.49, 0.02, 0.03], // North America
  [0.31, 0.14, 0.035, 0.06], // Greenland
  [0.28, 0.55, 0.055, 0.05], [0.305, 0.64, 0.06, 0.085], [0.30, 0.76, 0.03, 0.06], [0.30, 0.84, 0.014, 0.04], // South America
  [0.47, 0.25, 0.05, 0.055], [0.44, 0.215, 0.018, 0.025], // Europe
  [0.51, 0.40, 0.075, 0.075], [0.53, 0.52, 0.062, 0.07], [0.55, 0.63, 0.045, 0.07], // Africa
  [0.585, 0.37, 0.042, 0.045], // Middle East
  [0.70, 0.26, 0.16, 0.11], [0.60, 0.30, 0.05, 0.05], [0.71, 0.45, 0.035, 0.055], [0.79, 0.31, 0.03, 0.04], [0.80, 0.47, 0.03, 0.035], // Asia
  [0.87, 0.30, 0.015, 0.035], [0.81, 0.545, 0.045, 0.02], [0.845, 0.555, 0.02, 0.015], // Japan / Indonesia
  [0.85, 0.71, 0.055, 0.05], [0.83, 0.66, 0.03, 0.03], [0.93, 0.80, 0.012, 0.03], // Australia / NZ
];

const MX0 = 52, MX1 = 748, MY0 = 26, MY1 = 340;
const px = (nx: number) => MX0 + nx * (MX1 - MX0);
const py = (ny: number) => MY0 + ny * (MY1 - MY0);
const isLand = (nx: number, ny: number) => blobs.some(([cx, cy, rx, ry]) => ((nx - cx) / rx) ** 2 + ((ny - cy) / ry) ** 2 <= 1);

// Delivery hubs (real cities) that glow and light up the dots around them.
const hubs = ([[0.135, 0.33], [0.255, 0.31], [0.47, 0.235], [0.62, 0.40], [0.79, 0.53], [0.86, 0.72]] as const)
  .map(([nx, ny]) => ({ x: px(nx), y: py(ny) }));

const COLS = 66, ROWS = 28, GLOW = 150;
type Dot = { x: number; y: number; g: number };
const dots: Dot[] = [];
for (let j = 0; j < ROWS; j += 1) {
  for (let i = 0; i < COLS; i += 1) {
    const nx = i / (COLS - 1);
    const ny = j / (ROWS - 1);
    if (!isLand(nx, ny)) continue;
    const x = px(nx), y = py(ny);
    let d = Infinity;
    for (const h of hubs) d = Math.min(d, Math.hypot(x - h.x, y - h.y));
    dots.push({ x, y, g: Math.max(0, 1 - d / GLOW) });
  }
}

function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const k = Math.min(Math.hypot(b.x - a.x, b.y - a.y) * 0.24, 88);
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${mx.toFixed(1)} ${(Math.min(a.y, b.y) - k).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}
const chain: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];

export function GlobalReach() {
  return <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080c14]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgba(88,230,255,.1),rgba(91,140,255,.04)_40%,transparent_70%)]" aria-hidden="true" />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="reach-arc" x1="80" y1="60" x2="720" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#58E6FF" /><stop offset=".5" stopColor="#5B8CFF" /><stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="reach-hub"><stop stopColor="#EAFBFF" /><stop offset="1" stopColor="#58E6FF" /></radialGradient>
      </defs>

      {dots.map((d, i) => {
        const r = 1.4 + d.g * 1.4;
        const red = Math.round(120 + (150 - 120) * d.g);
        const green = Math.round(150 + (236 - 150) * d.g);
        const blue = Math.round(200 + (255 - 200) * d.g);
        return <circle key={i} cx={d.x} cy={d.y} r={r} fill={`rgb(${red},${green},${blue})`} opacity={0.18 + d.g * 0.62} />;
      })}

      <g fill="none">
        {chain.map(([a, b], i) => <path key={`a${i}`} d={arc(hubs[a], hubs[b])} stroke="url(#reach-arc)" strokeOpacity=".38" strokeWidth="1" />)}
        {chain.map(([a, b], i) => <path key={`f${i}`} className="globe-flow" d={arc(hubs[a], hubs[b])} stroke="#B7F2FF" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 26" style={{ animationDelay: `${i * -0.7}s` }} />)}
      </g>

      {hubs.map((h, i) => <g key={`h${i}`} className="network-node" style={{ animationDelay: `${i * -0.45}s` }}>
        <circle cx={h.x} cy={h.y} r="11" fill="#58E6FF" opacity=".14" />
        <circle cx={h.x} cy={h.y} r="3.6" fill="url(#reach-hub)" stroke="#EAFBFF" strokeOpacity=".8" strokeWidth=".8" />
      </g>)}
    </svg>

    <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-slate-300 backdrop-blur-md"><MapPin className="size-4 text-cyan-200" aria-hidden="true" />Remote · Hybrid · Onsite</div>
  </div>;
}
