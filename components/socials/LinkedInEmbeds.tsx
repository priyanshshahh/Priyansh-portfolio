import { siteConfig } from "@/lib/data/site";
import { linkedInEmbeds } from "@/lib/data/social-posts";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function LinkedInEmbeds() {
  return (
    <div className="flex h-[640px] flex-col overflow-hidden rounded-2xl border border-border bg-[var(--card-bg)] backdrop-blur-sm">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <LinkedInIcon />
          </span>
          <div>
            <p className="font-semibold leading-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-xs text-muted">
              Quantitative Systems Architect & Data Scientist
            </p>
          </div>
        </div>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Follow
        </a>
      </div>

      {/* Scrollable column of official LinkedIn post embeds */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4 hide-scrollbar">
        {linkedInEmbeds.length === 0 ? (
          <p className="text-sm text-muted">No posts yet.</p>
        ) : (
          linkedInEmbeds.map((id) => (
            <iframe
              key={id}
              src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
              title={`LinkedIn post ${id}`}
              height={560}
              className="w-full rounded-xl border border-border bg-white"
              allowFullScreen
              loading="lazy"
            />
          ))
        )}
      </div>

      <div className="shrink-0 border-t border-border px-5 py-3">
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent hover:underline"
        >
          View all on LinkedIn →
        </a>
      </div>
    </div>
  );
}
