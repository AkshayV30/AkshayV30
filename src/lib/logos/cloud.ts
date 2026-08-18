import type { BrandLogo } from "@/types/logo";

import awsManifest from "../../../public/logos/manifests/cloud/aws.json";
import gcpManifest from "../../../public/logos/manifests/cloud/gcp.json";
import ibmManifest from "../../../public/logos/manifests/cloud/ibm.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(manifest: unknown) => manifest as T;

export const CLOUD_LOGOS = {
  aws: cast<Record<"aWSCloudLogo32", BrandLogo>>(awsManifest),
  gcp: cast<Record<"googleCloud", BrandLogo>>(gcpManifest),
  ibm: cast<Record<"ibmCloud", BrandLogo>>(ibmManifest),
} as const;

export const CLOUD_LOGO_MAP = {
  awsCloud: CLOUD_LOGOS.aws.aWSCloudLogo32,
  googleCloud: CLOUD_LOGOS.gcp.googleCloud,
  ibmCloud: CLOUD_LOGOS.ibm.ibmCloud,
} satisfies Record<string, BrandLogo>;
