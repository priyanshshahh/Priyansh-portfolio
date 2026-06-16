import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectBento } from "@/components/projects/ProjectBento";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work"
        description="Production systems, research pipelines, and quantitative platforms — each with a detailed case study."
      />
      <ProjectBento />
    </PageTransition>
  );
}
