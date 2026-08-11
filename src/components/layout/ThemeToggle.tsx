"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { buttonHover, iconVariants } from "@/app/configs/motion.config";

type Theme = "light" | "dark" | "system";

type ThemeConfig = {
  value: Theme;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const themes: ThemeConfig[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
];

const NEXT_THEME_MAP: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
};

function useHydrated() {
  return React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const hydrated = useHydrated();

  // Guard against non-standard/unrecognized fallback string variants
  const activeTheme: Theme =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  const activeThemeConfig =
    themes.find((item) => item.value === activeTheme) ?? themes[2];

  const ActiveIcon = activeThemeConfig.icon;

  const handleCycleTheme = React.useCallback(() => {
    setTheme(NEXT_THEME_MAP[activeTheme]);
  }, [activeTheme, setTheme]);

  /*
   * Server rendering and first paint shell setup matching
   * the identical bounding layout boxes to prevent CLS.
   */
  if (!hydrated) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        disabled
        aria-label="Loading theme choices"
      >
        <span className="flex items-center justify-center">
          <Laptop className="h-5 w-5" aria-hidden="true" />
        </span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full cursor-pointer"
      onClick={handleCycleTheme}
      aria-label={`Current theme: ${activeThemeConfig.label}. Click to cycle.`}
      title={`Switch theme (Current: ${activeThemeConfig.label})`}
    >
      <motion.span
        {...buttonHover}
        className="flex items-center justify-center h-full w-full"
      >
        <motion.span
          key={activeTheme}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center"
        >
          <ActiveIcon className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.span>
      <span className="sr-only">
        Active theme is set to {activeThemeConfig.label}
      </span>
    </Button>
  );
}
