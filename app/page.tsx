import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/home/Hero";
import { MetricsBanner } from "@/components/home/MetricsBanner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FeaturedProjectItem } from "@/components/home/FeaturedProjectItem";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <PageTransition>
      <Hero />
      <MetricsBanner />
      <FeaturedProjects>
        {featured.map((project) => (
          <FeaturedProjectItem key={project.slug}>
            <ProjectCard project={project} className="h-full" />
          </FeaturedProjectItem>
        ))}
      </FeaturedProjects>
    </PageTransition>
  );
}
