"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, revealOnce } from "@/lib/motion";

export function FeaturedProjects({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, revealOnce);

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="py-16"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <motion.p
            variants={fadeUp}
            className="mb-2 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Selected work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Featured Projects
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <Link
            href="/projects"
            className="shrink-0 font-mono text-sm text-accent hover:underline"
          >
            See all →
          </Link>
        </motion.div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">{children}</div>
    </motion.section>
  );
}
