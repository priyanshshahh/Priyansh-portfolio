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

/** Seeded PRNG (mulberry32) — deterministic per seed. */
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
  const h1 = (hue % 200) + 190; // 190–390 → wraps into blues/violets/teals
  const from = `hsl(${h1 % 360} 70% 22%)`;
  const to = `hsl(${(h1 + 50) % 360} 75% 42%)`;
  return { from, to, hue: h1 % 360 };
}
