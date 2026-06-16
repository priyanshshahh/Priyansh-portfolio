import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResumeViewer } from "@/components/resume/ResumeViewer";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Resume"
        title="Professional CV"
        description="View or download my latest resume."
      />
      <ResumeViewer />
    </PageTransition>
  );
}
