import { siteConfig } from "@/lib/data/site";

type IconProps = { className?: string };

const Icons = {
  email: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  github: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  ),
  x: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  resume: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5" />
    </svg>
  ),
};

export function ConnectLinks() {
  const links = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Icons.email },
    { label: "LinkedIn", value: "in/-priyansh-shah", href: siteConfig.linkedin, icon: Icons.linkedin, external: true },
    { label: "GitHub", value: `@${siteConfig.githubUsername}`, href: siteConfig.github, icon: Icons.github, external: true },
    { label: "X / Twitter", value: `@${siteConfig.xUsername}`, href: siteConfig.x, icon: Icons.x, external: true },
    { label: "Resume", value: "Download PDF", href: "/resume.pdf", icon: Icons.resume, external: true },
  ];

  return (
    <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-6 backdrop-blur-sm">
      <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">
        Connect
      </p>
      <p className="mb-5 text-sm text-muted">
        Reach me directly or follow along anywhere.
      </p>
      <ul className="space-y-2.5">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent/50 hover:bg-accent/[0.04]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground group-hover:text-accent">
                    {l.label}
                  </span>
                  <span className="block truncate text-xs text-muted">{l.value}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
