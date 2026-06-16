import { cn } from "@/lib/utils";

export function Callout({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "architecture" | "results";
}) {
  const borderColor = {
    default: "border-accent",
    architecture: "border-violet-400",
    results: "border-emerald-400",
  };

  return (
    <div
      className={cn(
        "my-6 rounded-xl border-l-4 bg-surface/50 p-5",
        borderColor[variant],
      )}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
        {title}
      </p>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
