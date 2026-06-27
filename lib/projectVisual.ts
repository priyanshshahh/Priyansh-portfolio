import type { Project } from "@/lib/data/projects";

export type Motif =
  | "chart" // quant / finance / trading
  | "neural" // ML / deep learning
  | "tokens" // NLP / text
  | "agents" // multi-agent / autonomous
  | "rag" // retrieval / chatbot
  | "iso" // game / engine / simulation
  | "globe" // geospatial / macro
  | "dashboard"; // full-stack / web app

const RULES: { motif: Motif; match: RegExp }[] = [
  { motif: "rag", match: /rag|faiss|langchain|chatbot|retrieval|youtube/i },
  { motif: "agents", match: /agent|autonomous|polymarket|signalrelay|alphanet/i },
  { motif: "iso", match: /unreal|spacetimedb|mmorpg|game|simulation|athlix/i },
  { motif: "globe", match: /geospatial|globe|macro|fusionscope|stability/i },
  { motif: "tokens", match: /nlp|tf-idf|vader|fraud|sentiment|text/i },
  {
    motif: "chart",
    match: /quant|hedge|portfolio|crypto|trading|backtest|wrds|price|vectorbt|hrp|forecast/i,
  },
  {
    motif: "neural",
    match: /lstm|tensorflow|keras|xgboost|random forest|deep|ml|scikit|prediction/i,
  },
  { motif: "dashboard", match: /next\.js|react|duckdb|full-stack|dashboard|claim|equiply|enrichment/i },
];

export function getMotif(project: Project): Motif {
  const haystack = `${project.title} ${project.tagline} ${project.tags.join(" ")}`;
  for (const rule of RULES) {
    if (rule.match.test(haystack)) return rule.motif;
  }
  return "dashboard";
}

export type FilterCategory = "Quant" | "ML" | "GenAI" | "Full-Stack";

const MOTIF_TO_CATEGORY: Record<Motif, FilterCategory> = {
  chart: "Quant",
  neural: "ML",
  tokens: "ML",
  agents: "GenAI",
  rag: "GenAI",
  iso: "Full-Stack",
  globe: "Full-Stack",
  dashboard: "Full-Stack",
};

export function getCategory(project: Project): FilterCategory {
  return MOTIF_TO_CATEGORY[getMotif(project)];
}

/** Deterministic 32-bit hash of a string. */
export function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Seeded PRNG (mulberry32) - deterministic per seed. */
export function seededRandom(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A two-stop, on-brand-but-varied gradient derived from the slug. */
export function coverGradient(slug: string): { from: string; to: string; hue: number } {
  const hue = hashString(slug) % 360;
  // Bias toward the cool fintech range (cyan/blue/violet) but allow variety.
  const h1 = (hue % 200) + 190; // 190-390 → wraps into blues/violets/teals
  const from = `hsl(${h1 % 360} 70% 22%)`;
  const to = `hsl(${(h1 + 50) % 360} 75% 42%)`;
  return { from, to, hue: h1 % 360 };
}

const W = 400;
const H = 200;

/** Round to 2 decimals so SSR and client SVG attributes match exactly. */
function fix(n: number): number {
  return Math.round(n * 100) / 100;
}

export type ChartCandle = {
  cx: number;
  top: number;
  bot: number;
  up: boolean;
};

export type ChartMotifData = { candles: ChartCandle[]; line: string };

export type NeuralMotifData = {
  edges: { x1: number; y1: number; x2: number; y2: number; opacity: number }[];
  nodes: { x: number; y: number }[];
};

export type TokenRow = { y: number; rects: { x: number; width: number; hot: boolean }[] };

export type TokensMotifData = { rows: TokenRow[] };

export type AgentsMotifData = {
  cx: number;
  cy: number;
  satellites: { x: number; y: number }[];
};

export type IsoCube = { x: number; y: number; h: number };

export type IsoMotifData = { cubes: IsoCube[] };

export type GlobeMotifData = {
  cx: number;
  cy: number;
  r: number;
  dots: { x: number; y: number }[];
};

export type DashboardMotifData = {
  bars: { x: number; y: number; height: number; opacity: number }[];
};

export type CoverMotifData =
  | { kind: "chart"; data: ChartMotifData }
  | { kind: "neural"; data: NeuralMotifData }
  | { kind: "tokens"; data: TokensMotifData }
  | { kind: "agents"; data: AgentsMotifData }
  | { kind: "rag" }
  | { kind: "iso"; data: IsoMotifData }
  | { kind: "globe"; data: GlobeMotifData }
  | { kind: "dashboard"; data: DashboardMotifData };

function buildChart(rand: () => number): ChartMotifData {
  const candles = Array.from({ length: 11 }, (_, i) => {
    const cx = fix(40 + i * 30);
    const mid = fix(60 + rand() * 80);
    const half = fix(8 + rand() * 22);
    const up = rand() > 0.45;
    return { cx, top: fix(mid - half), bot: fix(mid + half), up };
  });
  const line = candles.map((c) => `${c.cx},${fix((c.top + c.bot) / 2)}`).join(" ");
  return { candles, line };
}

function buildNeural(rand: () => number): NeuralMotifData {
  const layers = [3, 5, 4, 2];
  const nodes: { x: number; y: number }[][] = layers.map((count, li) => {
    const x = fix(60 + li * 95);
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: fix(H / 2 + (ni - (count - 1) / 2) * 38),
    }));
  });
  const edges: NeuralMotifData["edges"] = [];
  nodes.slice(0, -1).forEach((layer, li) => {
    layer.forEach((a) => {
      nodes[li + 1].forEach((b) => {
        edges.push({
          x1: a.x,
          y1: a.y,
          x2: b.x,
          y2: b.y,
          opacity: fix(0.12 + rand() * 0.18),
        });
      });
    });
  });
  return { edges, nodes: nodes.flat() };
}

function buildTokens(rand: () => number): TokensMotifData {
  const rows: TokenRow[] = Array.from({ length: 5 }, (_, r) => {
    let x = 40;
    const y = fix(40 + r * 30);
    const rects: TokenRow["rects"] = [];
    Array.from({ length: 6 }, () => 20 + rand() * 50).forEach((wRaw) => {
      const w = fix(wRaw);
      if (x > W - 40) return;
      rects.push({ x: fix(x), width: w, hot: rand() > 0.78 });
      x += w + 10;
    });
    return { y, rects };
  });
  return { rows };
}

function buildAgents(rand: () => number): AgentsMotifData {
  const cx = fix(W / 2);
  const cy = fix(H / 2);
  const satellites = Array.from({ length: 6 }, (_, i) => {
    const ang = (i / 6) * Math.PI * 2 + rand() * 0.4;
    const r = 60 + rand() * 18;
    return { x: fix(cx + Math.cos(ang) * r * 1.5), y: fix(cy + Math.sin(ang) * r) };
  });
  return { cx, cy, satellites };
}

function buildIso(rand: () => number): IsoMotifData {
  const cubes: IsoCube[] = [];
  for (let gx = 0; gx < 4; gx++) {
    for (let gy = 0; gy < 4; gy++) {
      cubes.push({
        x: fix(W / 2 + (gx - gy) * 34),
        y: fix(70 + (gx + gy) * 17),
        h: fix(14 + rand() * 34),
      });
    }
  }
  return { cubes };
}

function buildGlobe(rand: () => number): GlobeMotifData {
  const cx = fix(W / 2);
  const cy = fix(H / 2);
  const r = 72;
  const dots = Array.from({ length: 5 }, () => {
    const a = rand() * Math.PI * 2;
    const rr = rand() * r * 0.85;
    return { x: fix(cx + Math.cos(a) * rr), y: fix(cy + Math.sin(a) * rr * 0.85) };
  });
  return { cx, cy, r, dots };
}

function buildDashboard(rand: () => number): DashboardMotifData {
  const bars = Array.from({ length: 6 }, (_, i) => {
    const h = fix(14 + rand() * 60);
    return { x: fix(70 + i * 24), y: fix(150 - h), height: h, opacity: fix(0.5 + (i % 2) * 0.4) };
  });
  return { bars };
}

function buildCoverMotifData(motif: Motif, slug: string): CoverMotifData {
  const rand = seededRandom(hashString(slug));
  switch (motif) {
    case "chart":
      return { kind: "chart", data: buildChart(rand) };
    case "neural":
      return { kind: "neural", data: buildNeural(rand) };
    case "tokens":
      return { kind: "tokens", data: buildTokens(rand) };
    case "agents":
      return { kind: "agents", data: buildAgents(rand) };
    case "rag":
      return { kind: "rag" };
    case "iso":
      return { kind: "iso", data: buildIso(rand) };
    case "globe":
      return { kind: "globe", data: buildGlobe(rand) };
    default:
      return { kind: "dashboard", data: buildDashboard(rand) };
  }
}

const coverMotifCache = new Map<string, CoverMotifData>();

export function getCoverMotifData(slug: string, motif: Motif): CoverMotifData {
  const key = `${slug}:${motif}`;
  let cached = coverMotifCache.get(key);
  if (!cached) {
    cached = buildCoverMotifData(motif, slug);
    coverMotifCache.set(key, cached);
  }
  return cached;
}
