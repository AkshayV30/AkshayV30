import type { NextConfig } from "next";

import { SITE_CONFIG } from "./src/app/configs/sites.config";

const nextConfig: NextConfig = {
  output: "export",

  basePath: SITE_CONFIG.basePath,
  assetPrefix: SITE_CONFIG.basePath ? `${SITE_CONFIG.basePath}/` : undefined,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
