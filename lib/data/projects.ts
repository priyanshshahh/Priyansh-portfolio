export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  url: string;
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
  links?: ProjectLink[];
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "shf-ml-forecast-disagreement",
    title: "SHF-ML: Machine Forecast Disagreement",
    tagline:
      "HPC-scale empirical asset pricing study measuring disagreement between accounting-only and market-only ML forecasts on the JKP dataset.",
    tags: ["Python", "Random Forest", "JKP Dataset", "HPC", "Seawulf"],
    metrics: [
      { label: "Dataset", value: "JKP Monthly" },
      { label: "Models", value: "Accounting vs Market" },
      { label: "Award", value: "Project Champion" },
    ],
    codePublic: false,
    links: [
      { label: "JKP Factors Database", url: "https://jkpfactors.com/" },
      {
        label: "Replication Crisis Repository",
        url: "https://github.com/bkelly-lab/ReplicationCrisis",
      },
      {
        label: "JKP Documentation (PDF)",
        url: "https://jkpfactors.s3.amazonaws.com/documents/Documentation.pdf",
      },
    ],
    featured: true,
    date: "Jan 2026",
  },
  {
    slug: "financial-insights-pipeline",
    title: "FIP - Financial Insights Pipeline",
    tagline:
      "Automated pipeline ingesting ARK ETF holdings and SEC 13F filings with deterministic change-detection and Parquet warehousing.",
    tags: ["Python", "PostgreSQL", "Parquet", "FastAPI", "EDGAR"],
    metrics: [
      { label: "Sources", value: "ARK + 13F" },
      { label: "Changes", value: "NEW/EXIT/INC/DEC" },
      { label: "Target", value: ">=95% parse" },
    ],
    codePublic: false,
    links: [
      {
        label: "ARK Holdings (Cathie's Ark)",
        url: "https://cathiesark.com/ark-funds-combined/complete-holdings",
      },
      { label: "Dataroma 13F Tracker", url: "https://www.dataroma.com/m/home.php" },
      { label: "SEC EDGAR", url: "https://www.sec.gov/edgar/search/" },
    ],
    featured: true,
    date: "2025",
  },
  {
    slug: "generative-ai-portfolio-management",
    title: "Generative AI in Stock Portfolio Management",
    tagline:
      "URECA paper evaluating Perplexity prompt-engineered S&P 500 portfolios across risk profiles using WRDS data.",
    tags: ["Python", "Perplexity API", "WRDS", "SQL", "URECA"],
    metrics: [
      { label: "High-Risk Sharpe", value: "7.545" },
      { label: "Total Return", value: "31.53%" },
      { label: "Output", value: "URECA Paper" },
    ],
    codePublic: false,
    links: [
      { label: "Stony Brook URECA", url: "https://www.stonybrook.edu/ureca/" },
      { label: "WRDS", url: "https://wrds-www.wharton.upenn.edu/" },
    ],
    featured: true,
    date: "Dec 2025",
  },
  {
    slug: "automated-crypto-hedge-fund",
    title: "Project CHF (Crypto Hedge Fund v2)",
    tagline:
      "Leakage-safe 9-agent crypto quant pipeline that honestly reports alpha_verified=false after walk-forward validation and costs.",
    tags: ["Python", "LightGBM", "XGBoost", "MLflow", "FastAPI"],
    metrics: [
      { label: "Rank IC", value: "0.0275" },
      { label: "Agents", value: "9-stage" },
      { label: "Alpha", value: "Not verified" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/chf-v2",
    links: [
      {
        label: "v1.0 Research Release",
        url: "https://github.com/priyanshshahh/chf-v2/releases",
      },
      {
        label: "Local setup (README)",
        url: "https://github.com/priyanshshahh/chf-v2#running-locally",
      },
    ],
    featured: true,
    date: "2025",
  },
  {
    slug: "signalrelay-alphanet",
    title: "SignalRelay / Alphanet Core",
    tagline:
      "Autonomous Polymarket sentiment oracle with x402 USDC micropayments on Base via Privy agent authorization.",
    tags: ["Python", "x402", "Privy", "FastAPI", "Bayesian"],
    metrics: [
      { label: "Payment", value: "$0.01 USDC" },
      { label: "Chain", value: "Base Sepolia" },
      { label: "Auth", value: "Privy TEE" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/signalrelay",
    links: [
      {
        label: "Demo script",
        url: "https://github.com/priyanshshahh/signalrelay/blob/main/DEMO_SCRIPT.md",
      },
      {
        label: "Submission write-up",
        url: "https://github.com/priyanshshahh/signalrelay/blob/main/SUBMISSION.md",
      },
      {
        label: "Consumer agent",
        url: "https://github.com/priyanshshahh/signalrelay/blob/main/consumer/consumer-agent.ts",
      },
    ],
    featured: false,
    date: "2025",
  },
  {
    slug: "polymarket-sentiment-agent",
    title: "Polymarket Sentiment Agent",
    tagline:
      "Bayesian news-sentiment agent for prediction markets - LLM parses headlines, Python computes posterior edge vs market price.",
    tags: ["Python", "Polymarket", "Bayesian", "FastAPI", "React"],
    metrics: [
      { label: "Mode", value: "Paper trading" },
      { label: "Demo", value: "fly.dev" },
      { label: "Math", value: "Bayesian" },
    ],
    demoUrl: "https://poly-agent.fly.dev/",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/polymarket-sentiment-agent",
    links: [
      { label: "API status", url: "https://poly-agent.fly.dev/api/status" },
      { label: "Polymarket", url: "https://polymarket.com/" },
    ],
    featured: true,
    date: "2025",
  },
  {
    slug: "fusionscope",
    title: "FusionScope",
    tagline:
      "Global crisis fusion dashboard with interactive globe map, multi-source risk indicators, and automated alerts.",
    tags: ["React", "TypeScript", "FastAPI", "Geospatial"],
    metrics: [
      { label: "Viz", value: "Globe Map" },
      { label: "Deploy", value: "Vercel" },
      { label: "Scope", value: "Global macro" },
    ],
    demoUrl: "https://fusionscope.vercel.app/",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/fusionscope",
    links: [
      { label: "Production API", url: "https://api.fusionscope.app" },
      {
        label: "Health check",
        url: "https://api.fusionscope.app/health",
      },
    ],
    featured: true,
    date: "2025",
  },
  {
    slug: "equiply-enrichment",
    title: "Equiply Enrichment",
    tagline:
      "Hospital capital equipment enrichment dashboard with deterministic serial decoders and OpenAI gap-fill fallback.",
    tags: ["React", "TypeScript", "OpenAI API", "CSV ETL"],
    metrics: [
      { label: "Rows", value: "801" },
      { label: "Local Decode", value: "73.3%" },
      { label: "Categories", value: "21" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/equiply-enrichment",
    links: [
      {
        label: "Full documentation",
        url: "https://github.com/priyanshshahh/equiply-enrichment/blob/main/DOCUMENTATION.md",
      },
      {
        label: "Demo script",
        url: "https://github.com/priyanshshahh/equiply-enrichment/blob/main/DOCUMENTATION.md#21-5-minute-demo-script-word-for-word",
      },
    ],
    featured: false,
    date: "June 2026",
  },
  {
    slug: "athlix-ai",
    title: "Athlix AI",
    tagline:
      "Financial intelligence OS for athlete capital - career collapse, contract instability, and retirement liquidity forecasting.",
    tags: ["Next.js", "Recharts", "Framer Motion", "OpenRouter"],
    metrics: [
      { label: "Hackathon", value: "Cursor Boston" },
      { label: "Stack", value: "Next.js 16" },
      { label: "Domain", value: "Sports finance" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/athlix-ai",
    links: [
      {
        label: "Local setup (README)",
        url: "https://github.com/priyanshshahh/athlix-ai#local-setup",
      },
    ],
    featured: false,
    date: "2025",
  },
  {
    slug: "claimguard-ai",
    title: "ClaimGuard-AI",
    tagline:
      "Agentic pre-submission claims risk engine: Nebius Gemma extraction, XGBoost denial scoring, DuckDB knapsack queue.",
    tags: ["Next.js", "FastAPI", "XGBoost", "DuckDB", "Nebius"],
    metrics: [
      { label: "Layers", value: "3-stack" },
      { label: "Scoring", value: "XGBoost" },
      { label: "Queue", value: "Knapsack" },
    ],
    codePublic: false,
    links: [
      { label: "Nebius Token Factory", url: "https://tokenfactory.nebius.com/" },
    ],
    featured: true,
    date: "May 2026",
  },
  {
    slug: "quant-link",
    title: "Quant-Link",
    tagline:
      "SpacetimeDB Launchpad hackathon - real-time multiplayer financial simulation with Rust backend and React Three Fiber.",
    tags: ["SpacetimeDB", "Rust", "React Three Fiber", "Gemini"],
    metrics: [
      { label: "Ticks", value: "2s GBM" },
      { label: "Backend", value: "SpacetimeDB" },
      { label: "Client", value: "R3F" },
    ],
    demoUrl: "https://quantlink.vercel.app/",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/quant-link",
    links: [
      { label: "SpacetimeDB", url: "https://spacetimedb.com/" },
      {
        label: "3D starter template",
        url: "https://github.com/majidmanzarpour/vibe-coding-starter-pack-3d-multiplayer",
      },
    ],
    featured: false,
    date: "2025",
  },
  {
    slug: "youtube-growth-ai-genzzz",
    title: "YouTube Growth AI Chatbot (Genzzz)",
    tagline:
      "RAG chatbot on YouTube transcripts - FAISS retrieval, Gemini 2.5 Flash generation, deployed on Hugging Face Spaces.",
    tags: ["LangChain", "FAISS", "Gemini", "Gradio", "HuggingFace"],
    metrics: [
      { label: "Retrieval", value: "FAISS" },
      { label: "LLM", value: "Gemini 2.5" },
      { label: "Deploy", value: "HF Spaces" },
    ],
    demoUrl: "https://huggingface.co/spaces/notyodaduhh/Ytube_Growth",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/Genzzz",
    links: [
      {
        label: "HF Space logs",
        url: "https://huggingface.co/spaces/notyodaduhh/Ytube_Growth?logs=container",
      },
    ],
    featured: false,
    date: "2025",
  },
  {
    slug: "cryptocurrency-price-prediction",
    title: "Cryptocurrency Price Prediction & Analysis",
    tagline:
      "Multi-model crypto forecasting with LSTM, ARIMA, regularized regression, and interactive Tableau dashboard.",
    tags: ["Scikit-Learn", "TensorFlow", "Tableau", "APIs"],
    metrics: [
      { label: "Models", value: "LSTM + ARIMA" },
      { label: "Viz", value: "Tableau" },
      { label: "Clustering", value: "K-Means" },
    ],
    demoUrl:
      "https://us-east-1.online.tableau.com/t/priyanshshah-7ae2fd725b/views/Dasboard/Dashboard1",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/Crypto-Price-Prediction",
    links: [
      {
        label: "Web dashboard (repo)",
        url: "https://github.com/priyanshshahh/Crypto-Price-Prediction/tree/main/crypto-prediction-web",
      },
    ],
    featured: false,
    date: "May 2024",
  },
  {
    slug: "fraudulent-job-posting-detection",
    title: "Fraudulent Job Posting Detection",
    tagline:
      "NLP pipeline achieving 96.5% accuracy with hybrid TF-IDF and VADER features and real-time Dash dashboard.",
    tags: ["Python", "NLP", "Scikit-Learn", "Dash"],
    metrics: [
      { label: "Accuracy", value: "96.5%" },
      { label: "Features", value: "TF-IDF + VADER" },
      { label: "Classifier", value: "Naive Bayes" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/fraud-job-detection-pipeline",
    featured: true,
    date: "Oct 2024",
  },
  {
    slug: "hr-database",
    title: "HR Database Management (BBL)",
    tagline:
      "Lab tooling pipeline converting HR .docx documents into structured CSV with web-scraped contact enrichment.",
    tags: ["Python", "Jupyter", "BeautifulSoup", "Pandas"],
    metrics: [
      { label: "Notebooks", value: "3-stage" },
      { label: "Output", value: "Structured CSV" },
      { label: "Org", value: "SBU-BBL" },
    ],
    codePublic: true,
    codeUrl: "https://github.com/SBU-BBL/HR-Database",
    links: [
      {
        label: "Docx editor notebook",
        url: "https://github.com/SBU-BBL/HR-Database/blob/main/Docx_editor.ipynb",
      },
      {
        label: "HR scraping notebook",
        url: "https://github.com/SBU-BBL/HR-Database/blob/main/HR%20scraping.ipynb",
      },
      {
        label: "HR database notebook",
        url: "https://github.com/SBU-BBL/HR-Database/blob/main/HR_database.ipynb",
      },
    ],
    featured: false,
    date: "2024",
  },
  {
    slug: "pearpay",
    title: "PearPay (ETH Global)",
    tagline:
      "Agent payments and escrow platform fork - Flow, FaceID, pay links, and Arc/Hedera smart contract integration.",
    tags: ["Next.js", "Solidity", "iOS", "Web3"],
    metrics: [
      { label: "Event", value: "ETH Global" },
      { label: "Contracts", value: "Escrow" },
      { label: "Stack", value: "Full-stack" },
    ],
    demoUrl: "https://pearpay.vercel.app/",
    codePublic: true,
    codeUrl: "https://github.com/priyanshshahh/pearpay",
    links: [
      { label: "Upstream fork", url: "https://github.com/mollybeach/pearpay" },
      {
        label: "Integration PR",
        url: "https://github.com/priyanshshahh/pearpay/pull/1",
      },
    ],
    featured: false,
    date: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectLinks(project: Project): ProjectLink[] {
  const seen = new Set<string>();
  const out: ProjectLink[] = [];

  const add = (label: string, url?: string) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    out.push({ label, url });
  };

  add("Live demo", project.demoUrl);
  add("Source code", project.codePublic ? project.codeUrl : undefined);
  for (const link of project.links ?? []) add(link.label, link.url);

  return out;
}
