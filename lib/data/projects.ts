export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  metrics: ProjectMetric[];
  demoUrl?: string;
  codePublic: boolean;
  codeUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "generative-ai-portfolio-management",
    title: "Generative AI in Stock Portfolio Management",
    tagline:
      "LLM-driven portfolio construction with WRDS data pipelines and prompt-engineered strategies.",
    tags: ["Python", "LLMs", "Perplexity API", "WRDS", "SQL"],
    metrics: [
      { label: "Data Source", value: "WRDS" },
      { label: "APIs", value: "Gemini + Perplexity" },
      { label: "Output", value: "URECA Paper" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: true,
    date: "Oct 2025",
  },
  {
    slug: "automated-crypto-hedge-fund",
    title: "Automated Crypto Hedge Fund (CHF+ X)",
    tagline:
      "End-to-end forecasting pipeline with walk-forward validation and HRP allocation.",
    tags: ["XGBoost", "LSTM", "vectorbt", "Docker", "APScheduler"],
    metrics: [
      { label: "Universe", value: "Top-100" },
      { label: "Tuning", value: "Optuna" },
      { label: "Allocation", value: "HRP" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: true,
    date: "Aug 2025",
  },
  {
    slug: "fraudulent-job-posting-detection",
    title: "Fraudulent Job Posting Detection",
    tagline:
      "NLP pipeline achieving 96.5% accuracy with hybrid TF-IDF and VADER features.",
    tags: ["Python", "NLP", "Scikit-Learn", "Dash"],
    metrics: [
      { label: "Accuracy", value: "96.5%" },
      { label: "Features", value: "TF-IDF + VADER" },
      { label: "Dashboard", value: "Real-time" },
    ],
    demoUrl: "#",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh",
    featured: true,
    date: "Oct 2024",
  },
  {
    slug: "cryptocurrency-price-prediction",
    title: "Cryptocurrency Price Prediction & Analysis",
    tagline:
      "Multi-model forecasting with LSTM, ARIMA, and K-Means clustering visualization.",
    tags: ["Scikit-Learn", "TensorFlow", "Tableau", "APIs"],
    metrics: [
      { label: "Models", value: "LSTM + ARIMA" },
      { label: "Viz", value: "Tableau" },
      { label: "Clustering", value: "K-Means" },
    ],
    demoUrl: "#",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh",
    featured: false,
    date: "May 2024",
  },
  {
    slug: "claimguard-ai",
    title: "ClaimGuard-AI",
    tagline:
      "Full-stack claims processing platform with DuckDB analytics backend.",
    tags: ["Next.js", "React", "Python", "DuckDB"],
    metrics: [
      { label: "Stack", value: "Full-stack" },
      { label: "Database", value: "DuckDB" },
      { label: "Domain", value: "Claims" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: true,
    date: "2025",
  },
  {
    slug: "quant-link",
    title: "Quant-Link",
    tagline:
      "Real-time multiplayer financial MMORPG with Unreal Engine 5 and SpacetimeDB.",
    tags: ["Unreal Engine 5", "Rust", "SpacetimeDB", "React"],
    metrics: [
      { label: "Engine", value: "UE5" },
      { label: "Backend", value: "SpacetimeDB" },
      { label: "Mode", value: "Multiplayer" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: true,
    date: "2025",
  },
  {
    slug: "signalrelay-alphanet",
    title: "SignalRelay / Alphanet Core",
    tagline:
      "Distributed network of Python AI agents for quantitative research and signal generation.",
    tags: ["Python", "AI Agents", "Quant Research"],
    metrics: [
      { label: "Architecture", value: "Distributed" },
      { label: "Agents", value: "Multi-node" },
      { label: "Domain", value: "Alpha Signals" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
  {
    slug: "equiply-enrichment",
    title: "Equiply Enrichment",
    tagline:
      "React dashboard normalizing equipment data with OpenAI enrichment fallback.",
    tags: ["React", "OpenAI API", "Data Normalization"],
    metrics: [
      { label: "UI", value: "React" },
      { label: "Enrichment", value: "OpenAI" },
      { label: "Pipeline", value: "ETL" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
  {
    slug: "polymarket-sentiment-agent",
    title: "Polymarket Sentiment Agent",
    tagline:
      "Autonomous agent executing trades based on news sentiment and market analytics.",
    tags: ["AI Agents", "Polymarket", "Sentiment Analysis"],
    metrics: [
      { label: "Execution", value: "Autonomous" },
      { label: "Signals", value: "News + CMC" },
      { label: "Market", value: "Polymarket" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
  {
    slug: "athlix-ai",
    title: "Athlix AI",
    tagline:
      "Interactive web app simulating long-term wealth trajectories for professional athletes.",
    tags: ["Next.js", "Financial Modeling", "Simulation"],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Domain", value: "Wealth Planning" },
      { label: "UX", value: "Interactive" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
  {
    slug: "fusionscope",
    title: "FusionScope",
    tagline:
      "Macro stability monitoring platform with interactive globe map and risk alerts.",
    tags: ["Full-stack", "Geospatial", "Risk Monitoring"],
    metrics: [
      { label: "Viz", value: "Globe Map" },
      { label: "Alerts", value: "Automated" },
      { label: "Scope", value: "Macro" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
  {
    slug: "youtube-growth-ai-genzzz",
    title: "YouTube Growth AI Chatbot (Genzzz)",
    tagline:
      "RAG chatbot trained on YouTube transcripts using LangChain, FAISS, and Gemini 2.5 Flash.",
    tags: ["LangChain", "FAISS", "Gemini", "RAG"],
    metrics: [
      { label: "Retrieval", value: "FAISS" },
      { label: "LLM", value: "Gemini 2.5" },
      { label: "Data", value: "Transcripts" },
    ],
    demoUrl: "#",
    codePublic: false,
    featured: false,
    date: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
