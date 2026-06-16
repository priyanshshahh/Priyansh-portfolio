import type { Project } from "@/lib/data/projects";
import {
  getMotif,
  coverGradient,
  hashString,
  seededRandom,
  type Motif,
} from "@/lib/projectVisual";

const W = 400;
const H = 200;

function ChartMotif({ rand }: { rand: () => number }) {
  const candles = Array.from({ length: 11 }, (_, i) => {
    const cx = 40 + i * 30;
    const mid = 60 + rand() * 80;
    const half = 8 + rand() * 22;
    const up = rand() > 0.45;
    return { cx, top: mid - half, bot: mid + half, up };
  });
  const line = candles.map((c) => `${c.cx},${(c.top + c.bot) / 2}`).join(" ");
  return (
    <g>
      {candles.map((c, i) => (
        <g key={i} opacity={0.9}>
          <line x1={c.cx} y1={c.top - 8} x2={c.cx} y2={c.bot + 8} stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
          <rect
            x={c.cx - 6}
            y={c.top}
            width="12"
            height={c.bot - c.top}
            rx="2"
            fill={c.up ? "white" : "white"}
            fillOpacity={c.up ? 0.95 : 0.45}
          />
        </g>
      ))}
      <polyline points={line} fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function NeuralMotif({ rand }: { rand: () => number }) {
  const layers = [3, 5, 4, 2];
  const nodes: { x: number; y: number }[][] = layers.map((count, li) => {
    const x = 60 + li * 95;
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: H / 2 + (ni - (count - 1) / 2) * 38,
    }));
  });
  return (
    <g>
      {nodes.slice(0, -1).map((layer, li) =>
        layer.flatMap((a) =>
          nodes[li + 1].map((b, j) => (
            <line key={`${li}-${a.y}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeOpacity={0.12 + rand() * 0.18} strokeWidth="1" />
          )),
        ),
      )}
      {nodes.flat().map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="7" fill="white" fillOpacity={0.85} />
      ))}
    </g>
  );
}

function TokensMotif({ rand }: { rand: () => number }) {
  const rows = 5;
  return (
    <g>
      {Array.from({ length: rows }, (_, r) => {
        let x = 40;
        const y = 40 + r * 30;
        const widths = Array.from({ length: 6 }, () => 20 + rand() * 50);
        return (
          <g key={r}>
            {widths.map((w, i) => {
              const hot = rand() > 0.78;
              const el = (
                <rect key={i} x={x} y={y} width={w} height="12" rx="6" fill="white" fillOpacity={hot ? 0.95 : 0.4} />
              );
              x += w + 10;
              if (x > W - 40) return null;
              return el;
            })}
          </g>
        );
      })}
    </g>
  );
}

function AgentsMotif({ rand }: { rand: () => number }) {
  const cx = W / 2;
  const cy = H / 2;
  const sats = Array.from({ length: 6 }, (_, i) => {
    const ang = (i / 6) * Math.PI * 2 + rand() * 0.4;
    const r = 60 + rand() * 18;
    return { x: cx + Math.cos(ang) * r * 1.5, y: cy + Math.sin(ang) * r };
  });
  return (
    <g>
      {sats.map((s, i) => (
        <line key={i} x1={cx} y1={cy} x2={s.x} y2={s.y} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {sats.map((s, i) => (
        <circle key={`n${i}`} cx={s.x} cy={s.y} r="9" fill="white" fillOpacity="0.7" />
      ))}
      <circle cx={cx} cy={cy} r="16" fill="white" fillOpacity="0.95" />
    </g>
  );
}

function RagMotif() {
  return (
    <g>
      {/* document */}
      <rect x="46" y="52" width="80" height="96" rx="6" fill="white" fillOpacity="0.92" />
      {[68, 84, 100, 116, 132].map((y, i) => (
        <rect key={i} x="58" y={y} width={i % 2 ? 44 : 56} height="6" rx="3" fill="#0f172a" fillOpacity="0.25" />
      ))}
      {/* arrow */}
      <line x1="138" y1="100" x2="196" y2="100" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
      <polygon points="196,94 210,100 196,106" fill="white" fillOpacity="0.9" />
      {/* chat bubbles */}
      <rect x="226" y="58" width="120" height="34" rx="12" fill="white" fillOpacity="0.85" />
      <rect x="250" y="104" width="100" height="30" rx="12" fill="white" fillOpacity="0.45" />
      <rect x="226" y="142" width="80" height="26" rx="12" fill="white" fillOpacity="0.85" />
    </g>
  );
}

function IsoMotif({ rand }: { rand: () => number }) {
  const cubes: { x: number; y: number; h: number }[] = [];
  for (let gx = 0; gx < 4; gx++) {
    for (let gy = 0; gy < 4; gy++) {
      cubes.push({
        x: W / 2 + (gx - gy) * 34,
        y: 70 + (gx + gy) * 17,
        h: 14 + rand() * 34,
      });
    }
  }
  return (
    <g>
      {cubes.map((c, i) => {
        const s = 17;
        return (
          <g key={i}>
            <polygon points={`${c.x},${c.y - c.h} ${c.x + s * 2},${c.y - c.h + s} ${c.x},${c.y - c.h + s * 2} ${c.x - s * 2},${c.y - c.h + s}`} fill="white" fillOpacity="0.9" />
            <polygon points={`${c.x - s * 2},${c.y - c.h + s} ${c.x},${c.y - c.h + s * 2} ${c.x},${c.y + s} ${c.x - s * 2},${c.y}`} fill="white" fillOpacity="0.4" />
            <polygon points={`${c.x + s * 2},${c.y - c.h + s} ${c.x},${c.y - c.h + s * 2} ${c.x},${c.y + s} ${c.x + s * 2},${c.y}`} fill="white" fillOpacity="0.6" />
          </g>
        );
      })}
    </g>
  );
}

function GlobeMotif({ rand }: { rand: () => number }) {
  const cx = W / 2;
  const cy = H / 2;
  const r = 72;
  return (
    <g stroke="white" fill="none">
      <circle cx={cx} cy={cy} r={r} strokeOpacity="0.6" strokeWidth="1.5" />
      {[-40, 0, 40].map((o) => (
        <ellipse key={`lat${o}`} cx={cx} cy={cy + o * 0.9} rx={Math.sqrt(Math.max(r * r - o * o, 1))} ry="8" strokeOpacity="0.3" />
      ))}
      {[0.4, 0.75].map((k, i) => (
        <ellipse key={`lon${i}`} cx={cx} cy={cy} rx={r * k} ry={r} strokeOpacity="0.3" />
      ))}
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} strokeOpacity="0.3" />
      {Array.from({ length: 5 }, (_, i) => {
        const a = rand() * Math.PI * 2;
        const rr = rand() * r * 0.85;
        return <circle key={i} cx={cx + Math.cos(a) * rr} cy={cy + Math.sin(a) * rr * 0.85} r="3" fill="white" stroke="none" fillOpacity="0.95" />;
      })}
    </g>
  );
}

function DashboardMotif({ rand }: { rand: () => number }) {
  return (
    <g>
      <rect x="44" y="40" width="312" height="120" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" />
      <line x1="44" y1="64" x2="356" y2="64" stroke="white" strokeOpacity="0.4" />
      {[54, 70, 86].map((x, i) => (
        <circle key={i} cx={x} cy="52" r="3" fill="white" fillOpacity="0.7" />
      ))}
      {/* bars */}
      {Array.from({ length: 6 }, (_, i) => {
        const h = 14 + rand() * 60;
        return <rect key={i} x={70 + i * 24} y={150 - h} width="14" height={h} rx="2" fill="white" fillOpacity={0.5 + (i % 2) * 0.4} />;
      })}
      {/* line */}
      <polyline points="232,130 260,100 288,114 316,80 344,96" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" strokeLinecap="round" />
    </g>
  );
}

function renderMotif(motif: Motif, rand: () => number) {
  switch (motif) {
    case "chart":
      return <ChartMotif rand={rand} />;
    case "neural":
      return <NeuralMotif rand={rand} />;
    case "tokens":
      return <TokensMotif rand={rand} />;
    case "agents":
      return <AgentsMotif rand={rand} />;
    case "rag":
      return <RagMotif />;
    case "iso":
      return <IsoMotif rand={rand} />;
    case "globe":
      return <GlobeMotif rand={rand} />;
    default:
      return <DashboardMotif rand={rand} />;
  }
}

const MOTIF_LABEL: Record<Motif, string> = {
  chart: "QUANT",
  neural: "DEEP LEARNING",
  tokens: "NLP",
  agents: "AGENTS",
  rag: "RAG",
  iso: "SIMULATION",
  globe: "GEOSPATIAL",
  dashboard: "FULL-STACK",
};

/**
 * Deterministic generated "cover image" for a project, derived from its title,
 * tagline, and tags. Same project always renders the same art.
 */
export function ProjectCover({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const motif = getMotif(project);
  const { from, to } = coverGradient(project.slug);
  const rand = seededRandom(hashString(project.slug));
  const gid = `grad-${project.slug}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${project.title} cover art`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <pattern id={`dots-${project.slug}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#${gid})`} />
      <rect width={W} height={H} fill={`url(#dots-${project.slug})`} />
      {renderMotif(motif, rand)}
      <text x="20" y="184" fontFamily="monospace" fontSize="11" letterSpacing="2" fill="white" fillOpacity="0.7">
        {MOTIF_LABEL[motif]}
      </text>
    </svg>
  );
}
