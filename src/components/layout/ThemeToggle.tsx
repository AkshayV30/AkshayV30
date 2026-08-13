"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { buttonHover, iconVariants } from "@/app/motions";

type Theme = "light" | "dark" | "system";

interface ThemeConfig {
  value: Theme;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const THEME_CONFIGS: Record<Theme, ThemeConfig> = {
  light: { value: "light", label: "Light", icon: Sun },
  dark: { value: "dark", label: "Dark", icon: Moon },
  system: { value: "system", label: "System", icon: Laptop },
};

const NEXT_THEME_CYCLE: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
};

/**
 * High-performance hydration guard using React 18 external store.
 * Prevents Layout Shifts (CLS) without triggering extra renders like useEffect.
 */
function useIsHydrated(): boolean {
  return React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();

  // Validate Next-Themes string values cleanly
  const activeTheme: Theme =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  const currentConfig = THEME_CONFIGS[activeTheme];
  const DisplayIcon = currentConfig.icon;

  const handleCycleTheme = React.useCallback(() => {
    setTheme(NEXT_THEME_CYCLE[activeTheme]);
  }, [activeTheme, setTheme]);

  // Static shell skeleton structure matches the final DOM tree exactly
  if (!isHydrated) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-full pointer-events-none opacity-50"
        aria-label="Loading theme theme selection"
        aria-live="polite"
      >
        <span className="flex items-center justify-center w-5 h-5">
          <Laptop className="h-5 w-5" aria-hidden="true" />
        </span>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-full cursor-pointer select-none"
      onClick={handleCycleTheme}
      aria-label={`Current theme: ${currentConfig.label}. Click to cycle.`}
      title={`Switch theme (Current: ${currentConfig.label})`}
    >
      <motion.span
        {...buttonHover}
        className="flex items-center justify-center h-full w-full"
      >
        {/* AnimatePresence enables seamless transitions when keys swap */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeTheme}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex items-center justify-center w-5 h-5"
          >
            <DisplayIcon className="h-5 w-5" aria-hidden="true" />
          </motion.span>
        </AnimatePresence>
      </motion.span>
      <span className="sr-only">
        Active theme mode is currently set to {currentConfig.label} (System
        resolves to: {resolvedTheme})
      </span>
    </Button>
  );
}
