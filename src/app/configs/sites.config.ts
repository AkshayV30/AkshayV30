const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_CONFIG = {
  basePath: BASE_PATH,
  isGitHubPages: Boolean(BASE_PATH),
} as const;

export const GITHUB_PAGES_BASE_PATH = SITE_CONFIG.basePath;
