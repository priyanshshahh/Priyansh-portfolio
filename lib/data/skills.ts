export interface SkillCategory {
  title: string;
  skills: string[];
  span?: "normal" | "wide" | "tall";
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "R", "MATLAB", "Rust", "TypeScript"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "XGBoost",
      "LightGBM",
      "Statsmodels",
      "Random Forest",
      "TensorFlow",
      "SHAP",
      "Pandas",
    ],
    span: "wide",
  },
  {
    title: "Generative AI",
    skills: [
      "LangChain",
      "Hugging Face",
      "Gemini API",
      "FAISS",
      "Gradio",
      "Prompt Engineering",
      "RAG",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "PostgreSQL",
      "DuckDB",
      "Polars",
      "BeautifulSoup",
      "Selenium",
      "FastAPI",
      "REST APIs",
      "JSON/Parquet",
    ],
  },
  {
    title: "Quant Finance",
    skills: [
      "Algorithmic Trading",
      "Backtesting",
      "Walk-Forward Validation",
      "HRP",
      "Risk Modeling",
      "Portfolio Management",
    ],
    span: "tall",
  },
  {
    title: "Tools & Infra",
    skills: [
      "Docker",
      "Git",
      "HPC Cluster",
      "Tableau",
      "SpacetimeDB",
      "Three.js",
      "x402/Privy",
      "Jupyter",
    ],
  },
];
