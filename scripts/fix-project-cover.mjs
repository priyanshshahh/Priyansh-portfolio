import fs from "fs";

const out = `import type { Project } from "@/lib/data/projects";
import {
  getMotif,
  coverGradient,
  getCoverMotifData,
  type CoverMotifData,
  type Motif,
} from "@/lib/projectVisual";

const W = 400;
const H = 200;

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

function RagMotif() {
  return (
    <g>
      <rect x="46" y="52" width="80" height="96" rx="6" fill="white" fillOpacity="0.92" />
      {[68, 84, 100, 116, 132].map((y, i) => (
        <rect key={i} x="58" y={y} width={i % 2 ? 44 : 56} height="6" rx="3" fill="#0f172a" fillOpacity="0.25" />
      ))}
      <line x1="138" y1="100" x2="196" y2="100" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
      <polygon points="196,94 210,100 196,106" fill="white" fillOpacity="0.9" />
      <rect x="226" y="58" width="120" height="34" rx="12" fill="white" fillOpacity="0.85" />
      <rect x="250" y="104" width="100" height="30" rx="12" fill="white" fillOpacity="0.45" />
      <rect x="226" y="142" width="80" height="26" rx="12" fill="white" fillOpacity="0.85" />
    </g>
  );
}

function renderMotif(motif: CoverMotifData) {
  switch (motif.kind) {
    case "chart":
      return (
        <g>
          {motif.data.candles.map((c, i) => (
            <g key={i} opacity={0.9}>
              <line x1={c.cx} y1={c.top - 8} x2={c.cx} y2={c.bot + 8} stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
              <rect x={c.cx - 6} y={c.top} width="12" height={c.bot - c.top} rx="2" fill="white" fillOpacity={c.up ? 0.95 : 0.45} />
            </g>
          ))}
          <polyline points={motif.data.line} fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "neural":
      return (
        <g>
          {motif.data.edges.map((e, i) => (
            <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="white" strokeOpacity={e.opacity} strokeWidth="1" />
          ))}
          {motif.data.nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="7" fill="white" fillOpacity="0.85" />
          ))}
        </g>
      );
    case "tokens":
      return (
        <g>
          {motif.data.rows.map((row, r) => (
            <g key={r}>
              {row.rects.map((rect, i) => (
                <rect key={i} x={rect.x} y={row.y} width={rect.width} height="12" rx="6" fill="white" fillOpacity={rect.hot ? 0.95 : 0.4} />
              ))}
            </g>
          ))}
        </g>
      );
    case "agents":
      return (
        <g>
          {motif.data.satellites.map((s, i) => (
            <line key={i} x1={motif.data.cx} y1={motif.data.cy} x2={s.x} y2={s.y} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
          ))}
          {motif.data.satellites.map((s, i) => (
            <circle key={\`n\${i}\`} cx={s.x} cy={s.y} r="9" fill="white" fillOpacity="0.7" />
          ))}
          <circle cx={motif.data.cx} cy={motif.data.cy} r="16" fill="white" fillOpacity="0.95" />
        </g>
      );
    case "rag":
      return <RagMotif />;
    case "iso":
      return (
        <g>
          {motif.data.cubes.map((c, i) => {
            const s = 17;
            return (
              <g key={i}>
                <polygon points={\`\${c.x},\${c.y - c.h} \${c.x + s * 2},\${c.y - c.h + s} \${c.x},\${c.y - c.h + s * 2} \${c.x - s * 2},\${c.y - c.h + s}\`} fill="white" fillOpacity="0.9" />
                <polygon points={\`\${c.x - s * 2},\${c.y - c.h + s} \${c.x},\${c.y - c.h + s * 2} \${c.x},\${c.y + s} \${c.x - s * 2},\${c.y}\`} fill="white" fillOpacity="0.4" />
                <polygon points={\`\${c.x + s * 2},\${c.y - c.h + s} \${c.x},\${c.y - c.h + s * 2} \${c.x},\${c.y + s} \${c.x + s * 2},\${c.y}\`} fill="white" fillOpacity="0.6" />
              </g>
            );
          })}
        </g>
      );
    case "globe":
      return (
        <g stroke="white" fill="none">
          <circle cx={motif.data.cx} cy={motif.data.cy} r={motif.data.r} strokeOpacity="0.6" strokeWidth="1.5" />
          {[-40, 0, 40].map((o) => (
            <ellipse key={\`lat\${o}\`} cx={motif.data.cx} cy={motif.data.cy + o * 0.9} rx={Math.sqrt(Math.max(motif.data.r * motif.data.r - o * o, 1))} ry="8" strokeOpacity="0.3" />
          ))}
          {[0.4, 0.75].map((k, i) => (
            <ellipse key={\`lon\${i}\`} cx={motif.data.cx} cy={motif.data.cy} rx={motif.data.r * k} ry={motif.data.r} strokeOpacity="0.3" />
          ))}
          <line x1={motif.data.cx} y1={motif.data.cy - motif.data.r} x2={motif.data.cx} y2={motif.data.cy + motif.data.r} strokeOpacity="0.3" />
          {motif.data.dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="3" fill="white" stroke="none" fillOpacity="0.95" />
          ))}
        </g>
      );
    default:
      return (
        <g>
          <rect x="44" y="40" width="312" height="120" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" />
          <line x1="44" y1="64" x2="356" y2="64" stroke="white" strokeOpacity="0.4" />
          {[54, 70, 86].map((x, i) => (
            <circle key={i} cx={x} cy="52" r="3" fill="white" fillOpacity="0.7" />
          ))}
          {motif.data.bars.map((bar, i) => (
            <rect key={i} x={bar.x} y={bar.y} width="14" height={bar.height} rx="2" fill="white" fillOpacity={bar.opacity} />
          ))}
          <polyline points="232,130 260,100 288,114 316,80 344,96" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" strokeLinecap="round" />
        </g>
      );
  }
}

export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  const motifKind = getMotif(project);
  const { from, to } = coverGradient(project.slug);
  const motif = getCoverMotifData(project.slug, motifKind);
  const gid = \`grad-\${project.slug}\`;

  return (
    <svg viewBox={\`0 0 \${W} \${H}\`} className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label={\`\${project.title} cover art\`}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <pattern id={\`dots-\${project.slug}\`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={\`url(#\${gid})\`} />
      <rect width={W} height={H} fill={\`url(#dots-\${project.slug})\`} />
      {renderMotif(motif)}
      <text x="20" y="184" fontFamily="monospace" fontSize="11" letterSpacing="2" fill="white" fillOpacity="0.7">
        {MOTIF_LABEL[motifKind]}
      </text>
    </svg>
  );
}
`;

fs.writeFileSync("components/projects/ProjectCover.tsx", out);
console.log("written", out.length);
