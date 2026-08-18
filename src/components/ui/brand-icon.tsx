"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import type { BrandLogo } from "@/types/logo";

interface BrandIconProps extends Omit<
  React.ComponentProps<typeof Image>,
  "src" | "alt"
> {
  icon: BrandLogo;
}

export default function BrandIcon({
  icon,
  className,
  width = 24,
  height = 24,
  ...props
}: BrandIconProps) {
  const { resolvedTheme } = useTheme();

  const isHydrated = React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false,
  );

  // Server + initial client render must produce identical markup.
  // Use light until the theme is known on the client.
  const src = isHydrated && resolvedTheme === "dark" ? icon.dark : icon.light;

  return (
    <Image
      {...props}
      src={src}
      alt={icon.alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
