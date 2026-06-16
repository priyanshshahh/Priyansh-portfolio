"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/ThemeContext";

const FinanceParticles = dynamic(
  () =>
    import("@/components/background/FinanceParticles").then(
      (m) => m.FinanceParticles,
    ),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FinanceParticles />
      {children}
    </ThemeProvider>
  );
}
