export interface SkillCategory {
  title: string;
  skills: string[];
  span?: "normal" | "wide" | "tall";
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "R", "MATLAB"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "XGBoost",
      "LightGBM",
      "Pandas",
      "Random Forest",
      "TensorFlow",
      "Keras",
    ],
    span: "wide",
  },
  {
    title: "Generative AI",
    skills: [
      "LangChain",
      "Hugging Face",
      "Gemini API",
      "Prompt Engineering",
      "RAG",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "PostgreSQL",
      "BeautifulSoup",
      "REST APIs",
      "JSON/Parquet",
      "DuckDB",
    ],
  },
  {
    title: "Quant Finance",
    skills: [
      "Algorithmic Trading",
      "Backtesting",
      "Risk Modeling",
      "Portfolio Management",
    ],
    span: "tall",
  },
  {
    title: "Tools",
    skills: [
      "Tableau",
      "VS Code",
      "HPC Cluster",
      "Jupyter",
      "Git",
      "Seaborn",
    ],
  },
];
