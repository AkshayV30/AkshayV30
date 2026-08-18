import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/social.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(value: unknown) => value as T;

export const SOCIAL_LOGOS = cast<Record<"linkedin", BrandLogo>>(manifest);

export const SOCIAL_LOGO_MAP = {
  linkedin: SOCIAL_LOGOS.linkedin,
} satisfies Record<string, BrandLogo>;
