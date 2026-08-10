import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages project-site URL:
  // https://akshayv30.github.io/AkshayV30/
  ...(isGitHubPages && {
    basePath: "/AkshayV30",
    assetPrefix: "/AkshayV30/",
  }),

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
