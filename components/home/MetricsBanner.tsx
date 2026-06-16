"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { useCountUp } from "@/lib/useCountUp";
import { fadeUp, staggerContainer, revealOnce } from "@/lib/motion";

function Metric({ value, label, active }: { value: string; label: string; active: boolean }) {
  const display = useCountUp(value, active);
  return (
    <motion.div variants={fadeUp} className="text-center md:text-left">
      <p className="font-mono text-3xl font-semibold tabular-nums text-accent md:text-4xl">
        {display}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export function MetricsBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, revealOnce);

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="border-y border-border py-8"
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
        By the numbers
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {siteConfig.metrics.map((metric) => (
          <Metric
            key={metric.label}
            value={metric.value}
            label={metric.label}
            active={inView}
          />
        ))}
      </div>
    </motion.section>
  );
}
