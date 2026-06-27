# Priyansh Shah - Portfolio

A premium, fintech-aesthetic developer portfolio for a Quantitative Systems Architect & Data Scientist. Built with the Next.js App Router, it features an interactive day/night "study desk" theme toggle, a finance-themed animated background, MDX case studies & blog, generated project cover art, live GitHub + LinkedIn feeds, and a moderated guestbook.

## ✨ Features

- **Interactive study-desk hero** - a 2.5D illustration whose desk lamp toggles day/night mode (persisted, no flash).
- **Animated finance background** + count-up metrics, typewriter hero, and scroll reveals throughout.
- **Projects** - filterable grid (Quant / ML / GenAI / Full-Stack) with a unique, deterministically **generated cover image** per project.
- **Case studies & Blog** - MDX-powered long-form write-ups (`content/projects`, `content/blog`).
- **About** - interactive work-experience timeline, skills bento, certifications carousel, and a live GitHub contribution calendar.
- **Socials** - official embedded LinkedIn posts, an X feed, and live GitHub repositories.
- **Contact** - a "send me a message" form, a connect sidebar, and a **moderated comments** guestbook (comments are public only after the owner approves them, enforced by Postgres Row-Level Security).
- **SEO** - sitemap, robots, and per-page metadata.

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [tsParticles](https://particles.js.org/) for the background
- [MDX](https://mdxjs.com/) via `next-mdx-remote` for content
- [Supabase](https://supabase.com) (auth + Postgres) for the guestbook & contact inbox
- `react-pdf` (resume), `react-github-calendar` (contributions)

## 🚀 Getting Started

```bash
npm install
npm run dev # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## 🔑 Environment Variables

The site runs fully without any configuration - the contact form falls back to opening your email client, and the guestbook shows a setup note. To enable sign-in, moderated comments, and a private message inbox, add Supabase keys to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

`.env*` files are gitignored - never commit your keys.

## 🗄 Supabase Setup (optional - for comments & messages)

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run the migrations in order:
   - `supabase/migrations/001_guestbook.sql`
   - `supabase/migrations/002_moderation_and_messages.sql`
3. In **Authentication → Providers**, enable **GitHub** and **Google**, and set the redirect URL to `https://<your-domain>/auth/callback` (and `http://localhost:3000/auth/callback` for local dev).
4. The **owner email** used to moderate comments and read messages is set in the migration policies and in `lib/data/site.ts` (`siteConfig.email`). Update both if yours differs. Sign in with that account to see **Approve** buttons on pending comments.

## ✏️ Editing Content

| What | Where |
|------|-------|
| Name, bio, hero, nav, social links | `lib/data/site.ts` |
| Project cards & metadata | `lib/data/projects.ts` |
| Project case studies (MDX) | `content/projects/*.mdx` |
| Blog posts (MDX) | `content/blog/*.mdx` |
| Work experience | `lib/data/experience.ts` |
| Skills | `lib/data/skills.ts` |
| Certifications | `lib/data/certifications.ts` |
| LinkedIn post embeds / X posts | `lib/data/social-posts.ts` |
| Resume PDF | `public/resume.pdf` |

> **Note:** the X posts in `lib/data/social-posts.ts` are placeholder examples - replace them with your real posts. `public/resume.pdf` is displayed publicly, so make sure it contains only information you're comfortable sharing.

## ☁️ Deploy

Deploy on [Vercel](https://vercel.com): import the repo, add the `NEXT_PUBLIC_SUPABASE_*` environment variables (if using Supabase), and ship. Update the hardcoded domain in `app/sitemap.ts` and `app/robots.ts` to your own.

---

Built with Next.js. Design influenced by premium fintech and minimalist developer portfolios.
