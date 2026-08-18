import type { BrandLogo } from "@/types/logo";

import { CHALLENGE_LOGO_MAP } from "./challenges";
import { CLOUD_LOGO_MAP } from "./cloud";
import { CREDENTIAL_LOGO_MAP } from "./credentials";
import { DATABASE_LOGO_MAP } from "./dbs";
import { DEVOPS_LOGO_MAP } from "./devops";
import { FRAMEWORK_LOGO_MAP } from "./frameworks";
import { GENERAL_LOGO_MAP } from "./general";
import { LANGUAGE_LOGO_MAP } from "./languages";
import { SOCIAL_LOGO_MAP } from "./social";
import { SYSTEM_LOGO_MAP } from "./systems";
import { BACKEND_LOGO_MAP } from "./backends";

/**
 * Central application-wide logo registry.
 *
 * Category-specific manifests are isolated in their own modules.
 * Consumers should import logos from this file instead of importing
 * individual category registries directly.
 */
export const LOGOS = {
  // Cloud
  ...CLOUD_LOGO_MAP,

  // Credentials
  ...CREDENTIAL_LOGO_MAP,

  // Challenges
  ...CHALLENGE_LOGO_MAP,

  // Databases
  ...DATABASE_LOGO_MAP,

  // DevOps
  ...DEVOPS_LOGO_MAP,

  // Frameworks
  ...FRAMEWORK_LOGO_MAP,

  // General
  ...GENERAL_LOGO_MAP,

  // Languages
  ...LANGUAGE_LOGO_MAP,

  // Social
  ...SOCIAL_LOGO_MAP,

  // Systems
  ...SYSTEM_LOGO_MAP,

  // Backends
  ...BACKEND_LOGO_MAP,
} satisfies Record<string, BrandLogo>;
