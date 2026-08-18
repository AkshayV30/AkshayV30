import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/languages.json";

interface LanguagesManifest {
  web: {
    javascript: BrandLogo;
    typescript: BrandLogo;
  };
  programming: {
    python: BrandLogo;
    cplusplus: BrandLogo;
  };
  markup: {
    html5: BrandLogo;
  };
  styling: {
    css3: BrandLogo;
  };
  shell: {
    bash: BrandLogo;
  };
}

const languages = manifest as LanguagesManifest;

export const LANGUAGE_LOGO_MAP = {
  javascript: languages.web.javascript,
  typescript: languages.web.typescript,
  python: languages.programming.python,
  cplusplus: languages.programming.cplusplus,
  html5: languages.markup.html5,
  css3: languages.styling.css3,
  bash: languages.shell.bash,
} satisfies Record<string, BrandLogo>;
