"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data/experience";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

function initials(company: string) {
  return company
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export function ExperienceTabs() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <div className="grid gap-6 md:grid-cols-[340px_1fr]">
      {/* Rail of roles */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0 hide-scrollbar">
        {experiences.map((e, i) => {
          const isActive = i === active;
          return (
            <button
              key={e.role}
              onClick={() => setActive(i)}
              className={cn(
                "group relative flex w-[280px] shrink-0 items-center gap-3.5 rounded-xl border px-4 py-4 text-left transition-all duration-300 md:w-full",
                isActive
                  ? "border-accent/40 bg-[var(--card-bg)]"
                  : "border-transparent hover:border-border",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="exp-active"
                  className="absolute inset-0 rounded-xl ring-1 ring-accent/30"
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              )}
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold transition-colors",
                  isActive
                    ? "bg-accent text-background"
                    : "bg-foreground/[0.06] text-muted",
                )}
              >
                {initials(e.company)}
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold leading-snug text-foreground">
                  {e.role.replace(/\s*\(.*?\)\s*/g, " ").trim()}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {e.company}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail pane */}
      <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-6 backdrop-blur-sm md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">
              {exp.role}
            </h3>
            <p className="mt-1 text-accent">{exp.company}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {exp.period} · {exp.location}
            </p>
            <ul className="mt-6 space-y-4">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] text-muted leading-relaxed md:text-base">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
