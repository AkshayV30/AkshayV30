"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import type { BrandLogo } from "@/types/logo";
import { resolveAssetPath } from "@/app/configs/assets.config";

interface BrandIconProps extends Omit<
  React.ComponentProps<typeof Image>,
  "src" | "alt"
> {
  icon: BrandLogo;
}

const EMPTY_SUBSCRIBE = () => () => {};

function useIsHydrated(): boolean {
  return React.useSyncExternalStore(
    EMPTY_SUBSCRIBE,
    () => true,
    () => false,
  );
}

export default function BrandIcon({
  icon,
  className,
  width = 24,
  height = 24,
  ...props
}: BrandIconProps) {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();

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
