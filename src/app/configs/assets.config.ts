import { SITE_CONFIG } from "./sites.config";

export const ASSET_BASE_PATH = SITE_CONFIG.basePath;

export function resolveAssetPath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${ASSET_BASE_PATH}${path}`;
}
