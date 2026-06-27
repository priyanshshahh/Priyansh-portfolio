import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Deep-dives explaining the architecture, methodology, and lessons behind my projects.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Writing"
        title="Notes & project deep-dives"
        description="Long-form write-ups explaining how my projects were built - the architecture, the trade-offs, and what I learned."
      />

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet - check back soon.</p>
      ) : (
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Reveal>
      )}
    </PageTransition>
  );
}
