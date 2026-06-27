export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Undergraduate Student Researcher (VIP)",
    company: "Stony Brook University College of Engineering and Applied Sciences",
    location: "Stony Brook, NY",
    period: "Jan 2026 - Present",
    highlights: [
      "Won Project Champion award for SHF-ML - measuring forecast disagreement between accounting-only and market-only ML forecasts on the JKP dataset.",
      "Build ML workflows to forecast cross-sectional asset returns using financial and accounting features on Seawulf and NVwulf HPC clusters.",
      "Support feature engineering, model validation, and reproducible research design for financial datasets.",
    ],
  },
  {
    role: "Research Lead & Data Scientist",
    company: "Blockchain Business Lab",
    location: "Stony Brook, NY",
    period: "Aug 2025 - Present",
    highlights: [
      "Design end-to-end ML systems for financial data, connecting collection, feature engineering, model training, and backtesting.",
      "Lead Project CHF v2, FIP institutional holdings pipeline, Generative AI URECA paper, and HR-Database lab tooling.",
      "Received Excellent Research Award and Best Researcher Award; manage 16 students across Agile workflows.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Blockchain Business Lab",
    location: "Stony Brook, NY",
    period: "Aug 2024 - Aug 2025",
    highlights: [
      "Built ML models (Random Forest, XGBoost, LSTM) for crypto price forecasting and financial data analysis.",
      "Engineered features and prepared market and on-chain datasets for predictive modeling.",
      "Developed data pipelines and evaluation workflows for financial research and backtesting.",
    ],
  },
  {
    role: "G-SWEP Fellow",
    company: "Google",
    location: "New York City Metropolitan Area",
    period: "Sept 2025 - Jan 2026",
    highlights: [
      "Selected from 2,000+ applicants for Google x BASTA 10-week fellowship with weekly 1:1 SWE mentorship.",
      "Focused on technical interviews, production-quality Python engineering, and algorithmic problem solving.",
    ],
  },
];

export const journeyNarrative = `My foundation is a proof-heavy curriculum in Applied Mathematics and Statistics at Stony Brook - spanning Financial Mathematics, Quantitative Finance, Data Mining, and Operations Research. That coursework taught me to treat every model as a hypothesis that must survive honest validation.

At the Blockchain Business Lab, I lead research at the intersection of machine learning and decentralized finance. I have shipped Project CHF v2 - a leakage-safe 9-agent pipeline that found no verified alpha under realistic costs (and reported that negative honestly), authored a URECA paper on prompt-engineered LLM portfolios, and built the Financial Insights Pipeline for institutional holdings data.

As a VIP Undergraduate Researcher, I lead SHF-ML on Seawulf HPC - simulating heterogeneous investor beliefs through accounting vs. market forecasting disagreement on the JKP dataset. Parallel to research, Google's SWE Program sharpened my engineering discipline for production-quality Python.`;
