import { journeyNarrative } from "@/lib/data/experience";
import { siteConfig } from "@/lib/data/site";
import { Card } from "@/components/ui/Card";

export function NarrativePane() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          Journey
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          From Applied Math to Blockchain Lab Lead
        </h2>
        <p className="mt-4 whitespace-pre-line text-muted leading-relaxed">
          {journeyNarrative}
        </p>
      </div>

      <Card className="p-5">
        <h3 className="font-semibold text-foreground">Education</h3>
        <p className="mt-1 text-accent">{siteConfig.education.school}</p>
        <p className="text-sm text-muted">{siteConfig.education.degree}</p>
        <p className="font-mono text-xs text-muted mt-1">
          {siteConfig.education.period}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {siteConfig.education.awards.map((award) => (
            <span
              key={award}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {award}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
