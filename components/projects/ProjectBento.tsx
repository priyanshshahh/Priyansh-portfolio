"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { getCategory, type FilterCategory } from "@/lib/projectVisual";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const FILTERS: ("All" | FilterCategory)[] = [
  "All",
  "Quant",
  "ML",
  "GenAI",
  "Full-Stack",
];

export function ProjectBento() {
  const [filter, setFilter] = useState<"All" | FilterCategory>("All");

  const shown =
    filter === "All"
      ? projects
      : projects.filter((p) => getCategory(p) === filter);

  const countFor = (f: "All" | FilterCategory) =>
    f === "All"
      ? projects.length
      : projects.filter((p) => getCategory(p) === f).length;

  return (
    <>
      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
                active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-accent/50 hover:text-foreground",
              )}
            >
              {f}{" "}
              <span className={active ? "text-accent/70" : "text-muted/60"}>
                {countFor(f)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
