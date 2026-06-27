export interface Certification {
  title: string;
  issuer: string;
  date: string;
  blurb: string;
  skills: string[];
  /** Optional credential / proof link. "#" hides the button. */
  url?: string;
  /** Short initials shown in the card's badge. */
  badge: string;
}

/**
 * Real recognitions and credentials. Swap in actual credential URLs / add new
 * certificates as you earn them - the carousel scales to any length.
 */
export const certifications: Certification[] = [
  {
    title: "Google Software Engineer Program (G-SWEP) Fellow",
    issuer: "Google",
    date: "Sept 2025 - Jan 2026",
    blurb:
      "Selected from 2,000+ applicants for 1:1 Google mentorship on production-quality Python engineering and algorithmic problem solving.",
    skills: ["Python", "DSA", "Dynamic Programming", "System Design"],
    badge: "G",
    url: "#",
  },
  {
    title: "URECA Research Paper - Generative AI in Portfolio Management",
    issuer: "Stony Brook University (URECA)",
    date: "Dec 2025",
    blurb:
      "Co-authored URECA paper with Jain, Lee, and Ha evaluating prompt-engineered Perplexity portfolios on S&P 500 equities via WRDS.",
    skills: ["LLMs", "WRDS", "Prompt Engineering", "Research"],
    badge: "UR",
    url: "#",
  },
  {
    title: "Project Champion",
    issuer: "Stony Brook University (VIP)",
    date: "2026",
    blurb:
      "Awarded for SHF-ML - machine forecast disagreement research on the JKP dataset using HPC-scale Random Forest pipelines.",
    skills: ["Empirical Asset Pricing", "HPC", "ML Research"],
    badge: "PC",
  },
  {
    title: "Best Researcher Award",
    issuer: "Blockchain Business Lab",
    date: "2025",
    blurb:
      "Recognized for leading lab research initiatives including CHF v2, FIP, and agentic financial signal extraction.",
    skills: ["Leadership", "Quant Research", "ML"],
    badge: "BR",
  },
  {
    title: "Excellent Research Award",
    issuer: "Blockchain Business Lab",
    date: "2025",
    blurb:
      "Recognized for directing 4+ research initiatives in ML-driven decentralized finance and agentic signal extraction.",
    skills: ["ML Research", "Quant Finance", "Leadership"],
    badge: "ER",
  },
  {
    title: "Global Excellence Award",
    issuer: "Stony Brook University",
    date: "2022 - 2026",
    blurb:
      "Merit award for sustained academic excellence in Applied Mathematics and Statistics.",
    skills: ["Applied Math", "Statistics"],
    badge: "GE",
  },
  {
    title: "Dean's List",
    issuer: "Stony Brook University",
    date: "2023 - 2025",
    blurb:
      "Maintained top academic standing across consecutive years in a quantitative, proof-heavy curriculum.",
    skills: ["Academics"],
    badge: "DL",
  },
  {
    title: "Equiply Hiring Tournament",
    issuer: "NY Tech Week Hackathon",
    date: "June 2026",
    blurb:
      "Built capital equipment enrichment dashboard processing 801 hospital asset rows with deterministic serial decoders.",
    skills: ["React", "OpenAI API", "Data Engineering"],
    badge: "EQ",
    url: "https://github.com/priyanshshahh/equiply-enrichment",
  },
  {
    title: "Cursor Boston × AIC Sports Hackathon",
    issuer: "Athlix AI",
    date: "2025",
    blurb:
      "Built ATHLIX AI - financial intelligence operating system for athlete capital risk forecasting.",
    skills: ["Next.js", "Recharts", "Financial Modeling"],
    badge: "AT",
    url: "https://github.com/priyanshshahh/athlix-ai",
  },
  {
    title: "SpacetimeDB Launchpad Hackathon",
    issuer: "Quant-Link",
    date: "2025",
    blurb:
      "Real-time multiplayer financial simulation game with Rust backend and React Three Fiber client.",
    skills: ["SpacetimeDB", "Rust", "Three.js"],
    badge: "QL",
    url: "https://quantlink.vercel.app/",
  },
  {
    title: "AIxBio Hackathon",
    issuer: "ClaimGuard-AI",
    date: "May 2026",
    blurb:
      "Agentic pre-submission claims risk engine with Nebius Gemma extraction, XGBoost scoring, and DuckDB knapsack prioritization.",
    skills: ["FastAPI", "XGBoost", "Healthcare AI"],
    badge: "CG",
  },
];
