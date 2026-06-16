"use client";

import dynamic from "next/dynamic";

const GitHubContributionCalendar = dynamic(
  () =>
    import("@/components/about/GitHubCalendar").then(
      (m) => m.GitHubContributionCalendar,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 animate-pulse rounded-2xl bg-surface/50" />
    ),
  },
);

export function GitHubCalendarWrapper() {
  return <GitHubContributionCalendar />;
}
