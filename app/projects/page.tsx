import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectBento } from "@/components/projects/ProjectBento";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work"
        description="Production systems, research pipelines, and quantitative platforms - each with a detailed case study."
      />
      <ProjectBento
        items={projects.map((project) => ({
          slug: project.slug,
          node: <ProjectCard key={project.slug} project={project} />,
        }))}
      />
    </PageTransition>
  );
}
