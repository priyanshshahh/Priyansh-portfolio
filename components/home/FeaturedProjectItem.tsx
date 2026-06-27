"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function FeaturedProjectItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={fadeUp}>{children}</motion.div>;
}
