import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/framework.json";

interface FrameworkManifest {
  fullStack: {
    nextjs: BrandLogo;
  };
  frontend: {
    react: BrandLogo;
    angular: BrandLogo;
  };
  styling: {
    tailwindCss: BrandLogo;
    sass: BrandLogo;
  };
}

const frameworks = manifest as FrameworkManifest;

export const FRAMEWORK_LOGO_MAP = {
  nextjs: frameworks.fullStack.nextjs,
  react: frameworks.frontend.react,
  angular: frameworks.frontend.angular,
  tailwind: frameworks.styling.tailwindCss,
  sass: frameworks.styling.sass,
} satisfies Record<string, BrandLogo>;
