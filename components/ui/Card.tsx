import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-[var(--card-bg)] backdrop-blur-sm transition-colors duration-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
