import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import { getProjectBySlug } from "@/lib/data/projects";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return {
    title: post?.frontmatter.title ?? "Post",
    description: post?.frontmatter.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedProject = post.frontmatter.project
    ? getProjectBySlug(post.frontmatter.project)
    : undefined;

  return (
    <PageTransition>
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm text-muted transition-colors hover:text-accent"
      >
        ← Back to Blog
      </Link>

      <article className="prose-portfolio mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {post.frontmatter.date} · {post.readingTime}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
          {post.frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{post.frontmatter.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.frontmatter.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <MdxContent source={post.content} />
        </div>

        {relatedProject && (
          <div className="mt-12 rounded-2xl border border-border bg-[var(--card-bg)] p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Related project
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {relatedProject.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{relatedProject.tagline}</p>
            <div className="mt-4">
              <Button href={`/projects/${relatedProject.slug}`} size="sm">
                View case study
              </Button>
            </div>
          </div>
        )}
      </article>
    </PageTransition>
  );
}
