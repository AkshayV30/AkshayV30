import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/general.json";

interface GeneralManifest {
  dataFormats: {
    json: BrandLogo;
  };
}

const general = manifest as GeneralManifest;

export const GENERAL_LOGO_MAP = {
  json: general.dataFormats.json,
} satisfies Record<string, BrandLogo>;
