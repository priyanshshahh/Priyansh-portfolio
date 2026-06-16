import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { getCaseStudyBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);
  return {
    title: project?.title ?? caseStudy?.frontmatter.title ?? "Project",
    description: project?.tagline ?? caseStudy?.frontmatter.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!project || !caseStudy) notFound();

  return (
    <PageTransition>
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-muted hover:text-accent transition-colors"
      >
        ← Back to Projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <article className="prose-portfolio min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Case Study
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-muted">{project.tagline}</p>
          <div className="mt-8 border-t border-border pt-8">
            <MdxContent source={caseStudy.content} />
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              Details
            </p>
            <p className="font-mono text-sm text-muted">{project.date}</p>
            <p className="mt-1 text-sm text-muted">{caseStudy.readingTime}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              Key Metrics
            </p>
            {project.metrics.map((m) => (
              <div key={m.label} className="mb-3">
                <p className="font-mono text-lg font-semibold text-accent tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                external={project.demoUrl !== "#"}
                className="w-full"
              >
                View Demo
              </Button>
            )}
            {project.codePublic && project.codeUrl && (
              <Button href={project.codeUrl} variant="secondary" external className="w-full">
                View Code
              </Button>
            )}
          </div>
        </aside>
      </div>
    </PageTransition>
  );
}
