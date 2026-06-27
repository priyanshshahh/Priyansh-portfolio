import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NarrativePane } from "@/components/about/NarrativePane";
import { SkillsBento } from "@/components/about/SkillsBento";
import { ExperienceTabs } from "@/components/about/ExperienceTabs";
import { Certifications } from "@/components/about/Certifications";
import { CourseworkGrid } from "@/components/about/CourseworkGrid";
import { GitHubCalendarWrapper } from "@/components/about/GitHubCalendarWrapper";

export const metadata = {
  title: "About",
};

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="About"
        title="Building quantitative systems with mathematical rigor"
        description="Applied Mathematics student, research lead, and engineer at the intersection of ML, finance, and agentic AI."
      />

      {/* Journey + Education - constrained prose so it reads like an essay */}
      <Reveal className="mt-8 max-w-3xl">
        <NarrativePane />
      </Reveal>

      {/* Coursework */}
      <Reveal className="mt-24">
        <SectionLabel eyebrow="Academic Foundation" title="Relevant Coursework" />
        <div className="mt-8">
          <CourseworkGrid />
        </div>
      </Reveal>

      {/* Skills - full-width bento */}
      <Reveal className="mt-24">
        <SectionLabel eyebrow="What I work with" title="Skills Matrix" />
        <div className="mt-8">
          <SkillsBento />
        </div>
      </Reveal>

      {/* Work Experience - interactive timeline */}
      <Reveal className="mt-24">
        <SectionLabel eyebrow="My Professional Journey" title="Work Experience" />
        <div className="mt-8">
          <ExperienceTabs />
        </div>
      </Reveal>

      {/* Certifications & Recognition */}
      <Reveal className="mt-24">
        <SectionLabel
          eyebrow="Continuous Learning"
          title="Certifications & Recognition"
        />
        <div className="mt-8">
          <Certifications />
        </div>
      </Reveal>

      {/* GitHub contributions */}
      <Reveal className="mt-24 mb-8">
        <GitHubCalendarWrapper />
      </Reveal>
    </PageTransition>
  );
}
