"use client";

import { useMemo, useState, useEffect } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

function getReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function FinanceParticlesInner() {
  const [reducedMotion, setReducedMotion] = useState(getReducedMotionPreference);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: reducedMotion ? 0 : 35, density: { enable: true } },
        color: { value: ["#22d3ee", "#0369a1", "#a78bfa", "#64748b"] },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.08, max: 0.25 },
          animation: { enable: !reducedMotion, speed: 0.3 },
        },
        size: { value: { min: 2, max: 5 } },
        move: {
          enable: !reducedMotion,
          speed: 0.4,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: !reducedMotion, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
        },
      },
      detectRetina: true,
    }),
    [reducedMotion],
  );

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles
        id="finance-particles"
        className="h-full w-full"
        options={options}
      />
    </div>
  );
}

export function FinanceParticles() {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <FinanceParticlesInner />
    </ParticlesProvider>
  );
}
