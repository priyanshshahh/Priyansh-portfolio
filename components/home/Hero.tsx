"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { StudyDeskScene } from "@/components/home/StudyDeskScene";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ticker = [
  { k: "SHARPE", v: "1.8" },
  { k: "ACCURACY", v: "96.5%" },
  { k: "MODELS", v: "12+" },
  { k: "AGENTS", v: "MULTI" },
];

export function Hero() {
  return (
    <section className="grid min-h-[78vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left - copy */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-sm text-accent"
        >
          {siteConfig.hero.greeting}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-6xl"
        >
          I build{" "}
          <span className="text-accent">
            <Typewriter
              options={{
                strings: [...siteConfig.hero.typewriter],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 30,
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {siteConfig.hero.subcopy}
        </motion.p>

        {/* mono ticker */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-3 font-mono text-xs"
        >
          {ticker.map((t, i) => (
            <span key={t.k} className="flex items-center gap-2">
              <span className="text-muted">{t.k}</span>
              <span className="font-semibold tabular-nums text-accent">
                {t.v}
              </span>
              {i < ticker.length - 1 && (
                <span className="ml-3 text-border">·</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <Button href="/projects" size="lg">
            View Projects
          </Button>
          <Button href="/resume" variant="secondary" size="lg">
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Right - interactive study desk */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex justify-center lg:justify-end"
      >
        <StudyDeskScene />
      </motion.div>
    </section>
  );
}
