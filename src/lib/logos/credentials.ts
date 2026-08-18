import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/credentials.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(value: unknown) => value as T;

export const CREDENTIAL_LOGOS = cast<Record<"credly", BrandLogo>>(manifest);

export const CREDENTIAL_LOGO_MAP = {
  credly: CREDENTIAL_LOGOS.credly,
} satisfies Record<string, BrandLogo>;
