"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

// useLayoutEffect runs before paint (prevents a theme flash) but warns during
// SSR, so fall back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type Theme = "day" | "night";

interface ThemeContextValue {
  theme: Theme;
  isNight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start on "day" so the server-rendered HTML and the client's first
  // render match (avoids hydration mismatch). The stored theme is applied in an
  // effect after mount; an inline script in <head> sets data-theme pre-paint to
  // prevent a flash of the wrong background.
  const [theme, setThemeState] = useState<Theme>("day");
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Apply the persisted theme before the first paint so night-mode users
    // don't see a flash of the day palette. Runs once on mount; the rendered
    // React tree starts on "day" (matching the server) so hydration is stable.
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const initial = stored === "day" || stored === "night" ? stored : "day";
    document.documentElement.setAttribute("data-theme", initial);
    setThemeState(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "day" ? "night" : "day"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isNight: theme === "night",
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
