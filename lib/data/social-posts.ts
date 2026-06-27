export interface SocialPost {
  /** ISO date - used for sorting and the relative timestamp. */
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
 * LinkedIn activity IDs for OFFICIAL post embeds. Individual posts (unlike
 * profiles/feeds) can be embedded. To add one: open the post → "..." menu →
 * "Embed this post", or copy the number after `activity-` in the post URL.
 * .../posts/...-activity-7467336762546376704-FtVo →  7467336762546376704
 */
export const linkedInEmbeds: string[] = [
  "7467336762546376704", // Project Champion Award - Project CHF (crypto hedge fund)
  "7458255153213689857", // SafeStart - financial safety simulator
  "7457520110363201537", // Blockchain Business Lab - ML / quant finance
  "7449879720244006912", // ML financial forecasting + autonomous crypto hedge fund
  "7449245675797561346", // FusionScope - global crisis risk tool
];

/**
 * X / Twitter posts shown in the Socials feed. These are placeholder examples - 
 * replace the text and `url`s with your real posts (or clear the array).
 */
export const xPosts: SocialPost[] = [
  {
    date: "2025-10-05",
    text: "LLMs are great at ranking stocks and terrible at calibration. They're a reasoning layer inside a quant pipeline - never the position sizer. Thread on what I learned 🧵",
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
    text: "Feature design beats model choice almost every time. TF-IDF + VADER hybrid got me to 96.5% on fraud detection - swapping classifiers barely moved the needle.",
    url: "https://x.com/priyanshshahh",
    likes: 274,
    comments: 19,
    tag: "NLP",
  },
];
