"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { buttonHover, iconVariants } from "@/app/motions";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";
type ThemePreference = Theme | "system";

const THEME_CYCLE: Record<Theme, Theme> = {
  light: "dark",
  dark: "light",
};

interface ThemeConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const THEME_CONFIG: Record<Theme, ThemeConfig> = {
  light: {
    label: "Light",
    icon: Sun,
  },
  dark: {
    label: "Dark",
    icon: Moon,
  },
};

function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark";
}

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Deterministic state hydration tracking
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Defers execution slightly to avoid synchronous cascading renders
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  /*
   * next-themes can return:
   * "light", "dark", "system", or undefined during hydration.
   *
   * We intentionally keep "system" as a valid preference,
   * but the UI only exposes Light and Dark.
   */
  const preference: ThemePreference =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  /*
   * If the user has not selected Light/Dark yet, use the
   * currently resolved system theme as the visual state.
   */
  const activeTheme: Theme = isTheme(preference)
    ? preference
    : isTheme(resolvedTheme)
      ? resolvedTheme
      : "light";

  const currentConfig = THEME_CONFIG[activeTheme];
  const DisplayIcon = currentConfig.icon;

  const handleToggle = React.useCallback(() => {
    setTheme(THEME_CYCLE[activeTheme]);
  }, [activeTheme, setTheme]);

  /*
   * Hydration-safe placeholder.
   *
   * Avoid adding or removing attributes like 'disabled' between Server & Client.
   * Instead, manage visual styling through classes and disable actions with a conditional guard.
   */
  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Loading theme"
        aria-disabled="true"
        tabIndex={-1}
        className="cursor-default select-none rounded-full"
      >
        <Sun className="h-5 w-5" aria-hidden="true" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={`Switch to ${THEME_CYCLE[activeTheme]} theme`}
      title={`Current theme: ${currentConfig.label}. Switch to ${THEME_CYCLE[activeTheme]}.`}
      className="cursor-pointer select-none rounded-full"
    >
      <motion.span
        {...buttonHover}
        className="flex h-full w-full items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeTheme}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex h-5 w-5 items-center justify-center"
          >
            <DisplayIcon className="h-5 w-5" aria-hidden="true" />
          </motion.span>
        </AnimatePresence>
      </motion.span>

      <span className="sr-only">
        Current theme: {currentConfig.label}. Switch to{" "}
        {THEME_CYCLE[activeTheme]}.
      </span>
    </Button>
  );
}
