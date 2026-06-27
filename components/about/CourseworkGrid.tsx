import { courseworkCategories } from "@/lib/data/coursework";
import { Card } from "@/components/ui/Card";

export function CourseworkGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {courseworkCategories.map((cat) => (
        <Card key={cat.title} className="p-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            {cat.title}
          </h3>
          <ul className="mt-3 space-y-1.5">
            {cat.courses.map((c) => (
              <li key={c.code} className="text-sm text-muted">
                <span className="font-mono text-xs text-foreground">{c.code}</span>
                <span className="mx-1.5 text-border">·</span>
                {c.name}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
