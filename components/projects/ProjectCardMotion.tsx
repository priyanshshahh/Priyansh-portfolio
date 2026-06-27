"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProjectCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("group h-full", className)}
    >
      {children}
    </motion.div>
  );
}
