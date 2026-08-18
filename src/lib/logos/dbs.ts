import type { BrandLogo } from "@/types/logo";

import manifest from "../../../public/logos/manifests/databases.json";

type NestedRegistry = {
  [key: string]: BrandLogo | NestedRegistry;
};

const cast = <T extends NestedRegistry>(value: unknown) => value as T;

export const DATABASE_LOGOS = cast<{
  relationalDatabases: Record<"mySql" | "postgreSql", BrandLogo>;

  documentDatabases: Record<"mongoDb", BrandLogo>;

  inMemoryDatabases: Record<"redis", BrandLogo>;
}>(manifest);

export const DATABASE_LOGO_MAP = {
  mysql: DATABASE_LOGOS.relationalDatabases.mySql,
  postgresql: DATABASE_LOGOS.relationalDatabases.postgreSql,
  mongodb: DATABASE_LOGOS.documentDatabases.mongoDb,
  redis: DATABASE_LOGOS.inMemoryDatabases.redis,
} satisfies Record<string, BrandLogo>;
