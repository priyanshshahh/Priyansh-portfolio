"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { StudyDeskToggle } from "@/components/theme/StudyDeskToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          PS<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <StudyDeskToggle />
      </nav>

      {/* Mobile nav */}
      <div className="flex gap-1 overflow-x-auto px-4 pb-3 md:hidden hide-scrollbar">
        {siteConfig.nav.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs transition-colors",
                active
                  ? "border-accent text-accent"
                  : "border-border text-muted",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Scroll progress */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent/70"
        style={{ scaleX }}
      />
    </header>
  );
}
