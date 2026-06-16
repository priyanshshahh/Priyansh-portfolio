import { skillCategories } from "@/lib/data/skills";
import { Card } from "@/components/ui/Card";

export function SkillsBento() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((cat) => (
        <Card key={cat.title} className="p-7">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <h3 className="font-mono text-base font-semibold uppercase tracking-widest text-accent">
              {cat.title}
            </h3>
            <span className="font-mono text-sm text-muted">{cat.skills.length}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-lg border border-border bg-foreground/[0.04] px-4 py-2 font-mono text-[15px] text-foreground transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
