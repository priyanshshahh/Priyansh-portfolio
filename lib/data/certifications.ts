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
 * certificates as you earn them — the carousel scales to any length.
 */
export const certifications: Certification[] = [
  {
    title: "Google Software Engineer Program (G-SWEP) Fellow",
    issuer: "Google",
    date: "Sept 2024 – Jan 2026",
    blurb:
      "Selected from 2,000+ applicants for 1:1 Google mentorship on production-quality Python engineering and algorithmic problem solving.",
    skills: ["Python", "DSA", "Dynamic Programming", "System Design"],
    badge: "G",
    url: "#",
  },
  {
    title: "URECA Research Paper — Generative AI in Portfolio Management",
    issuer: "Stony Brook University (URECA)",
    date: "2025",
    blurb:
      "Authored an Undergraduate Research & Creative Activities paper evaluating prompt-engineered LLM strategies over WRDS market data.",
    skills: ["LLMs", "WRDS", "Prompt Engineering", "Research"],
    badge: "UR",
    url: "#",
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
    title: "Global Excellence Scholarship",
    issuer: "Stony Brook University",
    date: "2022 – 2026",
    blurb:
      "Merit scholarship awarded for sustained academic excellence in Applied Mathematics and Statistics.",
    skills: ["Applied Math", "Statistics"],
    badge: "GE",
  },
  {
    title: "Dean's List",
    issuer: "Stony Brook University",
    date: "2023 – 2025",
    blurb:
      "Maintained top academic standing across consecutive years in a quantitative, proof-heavy curriculum.",
    skills: ["Academics"],
    badge: "DL",
  },
  {
    title: "Project Champion",
    issuer: "Stony Brook University",
    date: "2024",
    blurb:
      "Awarded for leading a standout applied data-science project from problem framing through deployment.",
    skills: ["Data Science", "Project Leadership"],
    badge: "PC",
  },
];
