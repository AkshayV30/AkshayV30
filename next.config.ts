import type { NextConfig } from "next";

const isGithubPages =
  process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/AkshayV30" : "",
  assetPrefix: isGithubPages ? "/AkshayV30/" : "",
};

export default nextConfig;
