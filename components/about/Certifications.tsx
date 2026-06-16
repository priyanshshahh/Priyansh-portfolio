"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data/certifications";
import { Badge } from "@/components/ui/Badge";

export function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, certifications.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
      setIndex(clamped);
    }
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const cardCenter = el.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setIndex(nearest);
  };

  return (
    <div className="relative">
      {/* arrows */}
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          onClick={() => scrollToCard(index - 1)}
          disabled={index === 0}
          aria-label="Previous certification"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={() => scrollToCard(index + 1)}
          disabled={index === certifications.length - 1}
          aria-label="Next certification"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
        >
          →
        </button>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar"
      >
        {certifications.map((cert, i) => (
          <motion.article
            key={cert.title}
            className="flex w-[300px] shrink-0 snap-center flex-col rounded-2xl border border-border bg-[var(--card-bg)] p-6 backdrop-blur-sm transition-shadow duration-300 md:w-[360px]"
            animate={{
              opacity: i === index ? 1 : 0.55,
              scale: i === index ? 1 : 0.95,
            }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow:
                i === index
                  ? "0 0 0 1px var(--color-accent), 0 20px 40px -20px var(--accent-glow)"
                  : "none",
            }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 font-mono text-base font-bold text-accent">
              {cert.badge}
            </div>
            <h3 className="text-lg font-semibold leading-snug text-foreground">
              {cert.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
            <p className="mt-1 font-mono text-xs text-muted">{cert.date}</p>
            <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
              {cert.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            {cert.url && cert.url !== "#" && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-mono text-xs text-accent hover:underline"
              >
                View credential →
              </a>
            )}
          </motion.article>
        ))}
      </div>

      {/* dots */}
      <div className="mt-2 flex justify-center gap-2">
        {certifications.map((cert, i) => (
          <button
            key={cert.title}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to ${cert.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
