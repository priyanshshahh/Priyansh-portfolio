import Link from "next/link";
import { getProjectLinks, type Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { ProjectCardMotion } from "@/components/projects/ProjectCardMotion";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const projectLinks = getProjectLinks(project);
  const hasLiveDemo = Boolean(project.demoUrl && project.demoUrl !== "#");
  const status = hasLiveDemo
    ? { label: "Live", tone: "bg-emerald-500/15 text-emerald-500" }
    : project.codePublic
      ? { label: "Open Source", tone: "bg-accent/15 text-accent" }
      : projectLinks.length > 0
        ? { label: "Resources", tone: "bg-accent/15 text-accent" }
        : { label: "Private", tone: "bg-muted/15 text-muted" };

  return (
    <ProjectCardMotion className={className}>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[var(--card-bg)] backdrop-blur-sm transition-colors duration-300 hover:border-accent/40">
        <div className="relative h-44 w-full overflow-hidden">
          <ProjectCover
            project={project}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {project.featured && (
              <span className="rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                ★ Featured
              </span>
            )}
          </div>
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium backdrop-blur-sm",
              status.tone,
            )}
          >
            {status.label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs text-muted">{project.date}</p>
          <h3 className="mt-1 text-xl font-semibold text-foreground group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-base font-semibold tabular-nums text-accent">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            <Button href={`/projects/${project.slug}`} size="sm">
              Read Case Study
            </Button>
            {hasLiveDemo && (
              <Button href={project.demoUrl!} variant="secondary" size="sm" external>
                Live Demo
              </Button>
            )}
            {project.codePublic && project.codeUrl && (
              <Button href={project.codeUrl} variant="secondary" size="sm" external>
                Code
              </Button>
            )}
            {projectLinks
              .filter(
                (link) =>
                  link.url !== project.demoUrl &&
                  link.url !== project.codeUrl &&
                  link.label !== "Live demo" &&
                  link.label !== "Source code",
              )
              .slice(0, 2)
              .map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label} →
                </Link>
              ))}
          </div>
        </div>
      </div>
    </ProjectCardMotion>
  );
}
