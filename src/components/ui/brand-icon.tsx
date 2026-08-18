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

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function resolveAssetPath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${BASE_PATH}${path}`;
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

  const logo = isHydrated && resolvedTheme === "dark" ? icon.dark : icon.light;

  return (
    <Image
      {...props}
      src={resolveAssetPath(logo)}
      alt={icon.alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
