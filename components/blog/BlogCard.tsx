"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";

export function BlogCard({ post }: { post: BlogPost }) {
  const { slug, frontmatter, readingTime } = post;
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group h-full"
    >
      <Link
        href={`/blog/${slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[var(--card-bg)] backdrop-blur-sm transition-colors duration-300 hover:border-accent/40"
      >
        {/* gradient chart header */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-accent/15 via-accent/5 to-transparent">
          <svg
            viewBox="0 0 320 128"
            className="absolute inset-0 h-full w-full opacity-60"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,96 40,80 80,88 120,56 160,68 200,40 240,52 280,28 320,36"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
            />
            <polygon
              points="0,96 40,80 80,88 120,56 160,68 200,40 240,52 280,28 320,36 320,128 0,128"
              fill="var(--accent-glow)"
            />
          </svg>
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            {frontmatter.tags[0]}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-xs text-muted">
            {frontmatter.date} · {readingTime}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
            {frontmatter.title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
            {frontmatter.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {frontmatter.tags.slice(0, 3).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <span className="mt-4 font-mono text-sm text-accent">Read →</span>
        </div>
      </Link>
    </motion.article>
  );
}
