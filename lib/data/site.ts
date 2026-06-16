export const siteConfig = {
  name: "Priyansh Shah",
  title: "Quantitative Systems Architect & Data Scientist",
  description:
    "Applied Mathematics student building production ML systems, quantitative finance pipelines, and agentic AI architectures.",
  email: "priyansh.shah@stonybrook.edu",
  linkedin: "https://www.linkedin.com/in/-priyansh-shah/",
  github: "https://github.com/priyanshshahh",
  githubUsername: "priyanshshahh",
  // Update to your real X/Twitter handle.
  x: "https://x.com/priyanshshahh",
  xUsername: "priyanshshahh",
  location: "Stony Brook, NY",
  education: {
    school: "Stony Brook University",
    degree: "B.S. in Applied Mathematics and Statistics",
    period: "Aug 2022 – May 2026",
    awards: [
      "Dean's List (2023–2025)",
      "Global Excellence Scholarship",
      "Excellent Research Award",
      "Project Champion",
    ],
  },
  hero: {
    greeting: "Hi, I'm Priyansh Shah",
    typewriter: [
      "Quantitative Systems Architect",
      "Data Scientist",
      "ML Research Lead",
      "Agentic AI Engineer",
    ],
    subcopy:
      "I architect end-to-end quantitative systems — from WRDS data pipelines and ensemble forecasting models to agentic LLM environments that extract actionable financial signals at scale.",
  },
  metrics: [
    { label: "Research Initiatives Led", value: "4+" },
    { label: "Students Managed", value: "16" },
    { label: "Fraud Detection Accuracy", value: "96.5%" },
    { label: "G-SWEP Selection Pool", value: "2,000+" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
    { href: "/socials", label: "Socials" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
