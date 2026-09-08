import type { NextConfig } from "next";

// Project site URL: https://gideonbature.github.io/emrais-engineering/
// When mapping a custom domain at the site root, set BASE_PATH="" in the workflow.
const basePath = process.env.BASE_PATH ?? "/emrais-engineering";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
