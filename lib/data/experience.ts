export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Undergraduate Researcher (VIP)",
    company: "Stony Brook University",
    location: "Stony Brook, NY",
    period: "Jan 2026 – Present",
    highlights: [
      "Extracted historic market and on-chain transaction data to identify Web3 adoption trends using Python and SQL.",
      "Led a 4-member team to forecast cross-sectional stock returns, utilizing Seawulf and NVwulf HPC cloud infrastructure.",
    ],
  },
  {
    role: "Research Lead & Data Scientist",
    company: "Blockchain Business Lab",
    location: "Stony Brook, NY",
    period: "Aug 2024 – Present",
    highlights: [
      "Directed 4+ research initiatives and managed 16 students via Agile workflows in Notion.",
      "Built ensemble and deep learning forecasting models (Random Forest, XGBoost, LSTM) on large-scale financial datasets.",
      "Architected a fully automated agentic environment to extract actionable signals from financial text using LLMs.",
    ],
  },
  {
    role: "Google Software Engineer Program (G-SWEP) Fellow",
    company: "Google",
    location: "Remote",
    period: "Sept 2024 – Jan 2026",
    highlights: [
      "Selected from 2,000+ applicants for 1:1 Google mentorship on production-quality Python engineering.",
      "Engineered solutions for medium-hard algorithmic challenges using Graphs, Trees, and Dynamic Programming.",
    ],
  },
];

export const journeyNarrative = `My path began with Applied Mathematics and Statistics at Stony Brook University — grounding every system I build in rigorous quantitative reasoning. From probability theory to financial forecasting, I learned to treat data as signal, not noise.

That foundation led me to the Blockchain Business Lab, where I now lead research initiatives at the intersection of machine learning and decentralized finance. Managing a team of 16, I've shipped ensemble models, LSTM pipelines, and agentic LLM architectures that extract alpha from unstructured financial text.

Parallel to research, the Google SWE Program sharpened my engineering discipline — translating algorithmic intuition into clean, production-quality Python. Today, as a VIP Undergraduate Researcher, I scale computations across HPC clusters to forecast cross-sectional returns and map Web3 adoption trends.`;
