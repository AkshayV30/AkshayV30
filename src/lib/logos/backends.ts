import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/backends.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(value: unknown) => value as T;

export const BACKEND_LOGOS = cast<{
  runtimes: {
    nodejs: BrandLogo;
    nodejsDark: BrandLogo;
    nodejsHex: BrandLogo;
    nodejsLight: BrandLogo;
  };

  frameworks: {
    fastapi: BrandLogo;
    express: BrandLogo;
  };

  api: {
    rest: BrandLogo;
  };

  authentication: {
    jwt: BrandLogo;
  };

  orm: {
    prisma: BrandLogo;
  };
}>(manifest);

export const BACKEND_LOGO_MAP = {
  nodejs: BACKEND_LOGOS.runtimes.nodejs,

  fastapi: BACKEND_LOGOS.frameworks.fastapi,
  express: BACKEND_LOGOS.frameworks.express,

  rest: BACKEND_LOGOS.api.rest,

  jwt: BACKEND_LOGOS.authentication.jwt,

  prisma: BACKEND_LOGOS.orm.prisma,
} satisfies Record<string, BrandLogo>;
