export interface SocialPost {
  /** ISO date — used for sorting and the relative timestamp. */
  date: string;
  text: string;
  /** Direct link to the real post. */
  url: string;
  /** Optional engagement counts shown as a footer. */
  likes?: number;
  comments?: number;
  /** Optional short tag shown as a chip. */
  tag?: string;
}

/**
 * Curated post feeds. LinkedIn and X both block third-party iframe embedding of
 * profiles/feeds, so these are hand-maintained cards that link out to the real
 * posts. Replace the `url`s with your actual post links and edit the copy.
 */
/**
 * LinkedIn activity IDs for OFFICIAL post embeds. Individual posts (unlike
 * profiles/feeds) can be embedded. To add one: open the post → "..." menu →
 * "Embed this post", or copy the number after `activity-` in the post URL.
 *   .../posts/...-activity-7467336762546376704-FtVo  →  7467336762546376704
 */
export const linkedInEmbeds: string[] = [
  "7467336762546376704", // Project Champion Award — Project CHF (crypto hedge fund)
  "7458255153213689857", // SafeStart — financial safety simulator
  "7457520110363201537", // Blockchain Business Lab — ML / quant finance
  "7449879720244006912", // ML financial forecasting + autonomous crypto hedge fund
  "7449245675797561346", // FusionScope — global crisis risk tool
];

export const linkedInPosts: SocialPost[] = [
  {
    date: "2025-10-12",
    text: "Just presented my URECA research on Generative AI for stock portfolio management — evaluating prompt-engineered LLM strategies over WRDS data. Grateful to the Blockchain Business Lab for the support. 📈",
    url: "https://www.linkedin.com/in/-priyansh-shah/",
    likes: 142,
    comments: 18,
    tag: "Research",
  },
  {
    date: "2025-08-22",
    text: "Shipped CHF+ X — an automated crypto hedge-fund pipeline with walk-forward validation, Optuna tuning, and Hierarchical Risk Parity allocation. Validation discipline is where the edge lives.",
    url: "https://www.linkedin.com/in/-priyansh-shah/",
    likes: 96,
    comments: 11,
    tag: "Quant",
  },
  {
    date: "2025-06-01",
    text: "Honored to be selected as a Google Software Engineer Program (G-SWEP) Fellow from 2,000+ applicants. Excited for a year of mentorship on production-quality engineering.",
    url: "https://www.linkedin.com/in/-priyansh-shah/",
    likes: 230,
    comments: 34,
    tag: "Milestone",
  },
  {
    date: "2025-03-15",
    text: "Leading a team of 16 researchers at the Blockchain Business Lab taught me that the hardest part of ML isn't the model — it's the data pipeline and the validation. Sharing some lessons.",
    url: "https://www.linkedin.com/in/-priyansh-shah/",
    likes: 78,
    comments: 9,
    tag: "Leadership",
  },
];

export const xPosts: SocialPost[] = [
  {
    date: "2025-10-05",
    text: "LLMs are great at ranking stocks and terrible at calibration. They're a reasoning layer inside a quant pipeline — never the position sizer. Thread on what I learned 🧵",
    url: "https://x.com/priyanshshahh",
    likes: 320,
    comments: 24,
    tag: "Quant",
  },
  {
    date: "2025-08-18",
    text: "Walk-forward validation gives you uglier backtest numbers than a random split. That's the point. The metrics you can trust are the unflattering ones.",
    url: "https://x.com/priyanshshahh",
    likes: 510,
    comments: 41,
  },
  {
    date: "2025-07-02",
    text: "Hierarchical Risk Parity > mean-variance optimization for crypto. No matrix inversion, no instability, diversifies by structure. Building it into CHF+ X.",
    url: "https://x.com/priyanshshahh",
    likes: 188,
    comments: 12,
    tag: "Allocation",
  },
  {
    date: "2025-05-20",
    text: "Feature design beats model choice almost every time. TF-IDF + VADER hybrid got me to 96.5% on fraud detection — swapping classifiers barely moved the needle.",
    url: "https://x.com/priyanshshahh",
    likes: 274,
    comments: 19,
    tag: "NLP",
  },
];
