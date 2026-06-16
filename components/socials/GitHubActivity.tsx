import { siteConfig } from "@/lib/data/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } },
    );
    return res.ok ? await res.json() : [];
  } catch {
    return [];
  }
}

export async function GitHubActivity() {
  const repos = await fetchRepos();

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
          GitHub
        </h3>
        <Button href={siteConfig.github} external variant="ghost" size="sm">
          @{siteConfig.githubUsername}
        </Button>
      </div>

      <p className="mb-4 text-sm font-medium text-foreground">Recent Repositories</p>
      {repos.length === 0 ? (
        <p className="text-sm text-muted">Unable to load repositories.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-lg border border-border p-4 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-mono text-sm text-accent">{repo.name}</p>
                <div className="flex shrink-0 items-center gap-2">
                  {repo.stargazers_count > 0 && (
                    <span className="font-mono text-xs text-muted">
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                  {repo.language && <Badge>{repo.language}</Badge>}
                </div>
              </div>
              {repo.description && (
                <p className="mt-1.5 text-xs text-muted line-clamp-2">
                  {repo.description}
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}
