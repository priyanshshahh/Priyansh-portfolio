"use client";

import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "@/lib/data/site";
import { useTheme } from "@/context/ThemeContext";

export function GitHubContributionCalendar() {
  const { isNight } = useTheme();

  return (
    <div className="overflow-x-auto hide-scrollbar rounded-2xl border border-border bg-[var(--card-bg)] p-6">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        GitHub Activity
      </h3>
      <GitHubCalendar
        username={siteConfig.githubUsername}
        colorScheme={isNight ? "dark" : "light"}
        fontSize={12}
        blockSize={11}
        blockMargin={4}
      />
    </div>
  );
}
