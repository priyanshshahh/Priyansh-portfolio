"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Parses a metric string like "96.5%", "2,000+", "16", "4+" into:
 *  - a numeric target to animate toward
 *  - the prefix/suffix decoration to re-apply (e.g. "%", "+", "x")
 *  - the number of decimal places to preserve
 */
function parseMetric(value: string) {
  const match = value.match(/-?[\d,]*\.?\d+/);
  if (!match) {
    return { target: null as number | null, prefix: value, suffix: "", decimals: 0 };
  }
  const numericRaw = match[0];
  const start = match.index ?? 0;
  const prefix = value.slice(0, start);
  const suffix = value.slice(start + numericRaw.length);
  const cleaned = numericRaw.replace(/,/g, "");
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { target: parseFloat(cleaned), prefix, suffix, decimals };
}

function format(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Animates a numeric metric string from 0 to its target once `active` is true.
 * Respects prefers-reduced-motion by snapping straight to the final value.
 * Returns the formatted display string at every frame.
 */
export function useCountUp(value: string, active: boolean, durationMs = 1400) {
  const { target, prefix, suffix, decimals } = parseMetric(value);
  const [display, setDisplay] = useState(target === null ? value : `${prefix}0${suffix}`);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active || target === null) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      frame.current = requestAnimationFrame(() => setDisplay(value));
      return () => {
        if (frame.current) cancelAnimationFrame(frame.current);
      };
    }

    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / durationMs, 1);
      // easeOutExpo for a snappy settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(`${prefix}${format(target * eased, decimals)}${suffix}`);
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, value]);

  return display;
}
