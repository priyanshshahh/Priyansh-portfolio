import type { SocialPost } from "@/lib/data/social-posts";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${d}, ${y}`;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SocialFeed({
  platform,
  name,
  subtitle,
  handle,
  profileUrl,
  posts,
}: {
  platform: "linkedin" | "x";
  name: string;
  subtitle: string;
  handle: string;
  profileUrl: string;
  posts: SocialPost[];
}) {
  return (
    <div className="flex h-[640px] flex-col overflow-hidden rounded-2xl border border-border bg-[var(--card-bg)] backdrop-blur-sm">
      {/* Header */}
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            {platform === "linkedin" ? <LinkedInIcon /> : <XIcon />}
          </span>
          <div>
            <p className="font-semibold leading-tight text-foreground">{name}</p>
            <p className="text-xs text-muted">{subtitle}</p>
          </div>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {handle}
        </a>
      </div>

      {/* Scrollable feed */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4 hide-scrollbar">
        {posts.map((post) => (
          <a
            key={post.url + post.date}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-border p-4 transition-colors hover:border-accent/40 hover:bg-accent/[0.03]"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                {formatDate(post.date)}
              </span>
              {post.tag && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  {post.tag}
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-foreground">{post.text}</p>
            {(post.likes != null || post.comments != null) && (
              <div className="mt-3 flex gap-4 font-mono text-xs text-muted">
                {post.likes != null && <span>♥ {post.likes}</span>}
                {post.comments != null && <span>💬 {post.comments}</span>}
                <span className="ml-auto text-accent">Open →</span>
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="shrink-0 border-t border-border px-5 py-3">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent hover:underline"
        >
          View all on {platform === "linkedin" ? "LinkedIn" : "X"} →
        </a>
      </div>
    </div>
  );
}
