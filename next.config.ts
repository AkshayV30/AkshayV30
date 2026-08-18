import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const GITHUB_PAGES_BASE_PATH = "/AkshayV30";

const nextConfig: NextConfig = {
  output: "export",

  ...(isGitHubPages && {
    basePath: GITHUB_PAGES_BASE_PATH,
    assetPrefix: `${GITHUB_PAGES_BASE_PATH}/`,
  }),

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
