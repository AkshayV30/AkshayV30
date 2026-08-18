import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/systems.json";

interface SystemsManifest {
  operatingSystems: {
    linux: BrandLogo;
    ubuntu: BrandLogo;
    fedora: BrandLogo;
  };
  servers: {
    nginx: BrandLogo;
    apacheTomcat: BrandLogo;
  };
}

const systems = manifest as SystemsManifest;

export const SYSTEM_LOGO_MAP = {
  linux: systems.operatingSystems.linux,
  ubuntu: systems.operatingSystems.ubuntu,
  fedora: systems.operatingSystems.fedora,
  apacheTomcat: systems.servers.apacheTomcat,
  nginx: systems.servers.nginx,
} satisfies Record<string, BrandLogo>;
