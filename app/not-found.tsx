import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-6xl font-semibold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-2 text-muted">
        This signal doesn&apos;t exist in the portfolio universe.
      </p>
      <div className="mt-8">
        <Button href="/">Return Home</Button>
      </div>
      <Link href="/projects" className="mt-4 text-sm text-accent hover:underline">
        Browse projects instead
      </Link>
    </div>
  );
}
