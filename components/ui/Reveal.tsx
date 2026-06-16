"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, revealOnce } from "@/lib/motion";

/**
 * Wraps a block and fades/slides it up the first time it scrolls into view.
 * Keeps server pages server-rendered while still giving each section motion.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, revealOnce);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
