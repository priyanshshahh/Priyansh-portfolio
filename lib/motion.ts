import type { Variants } from "framer-motion";

// Shared easing - a smooth, slightly snappy ease-out used site-wide.
export const easeOut: [number, number, number, number] = [
  0.21, 0.47, 0.32, 0.98,
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

// Parent container that staggers its children's reveal.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

// Standard viewport config for scroll-triggered reveals.
export const revealOnce = { once: true, amount: 0.3 } as const;
