import type { NextConfig } from "next";

// Custom domain (emrais.com.ng) is served from the site root — no basePath.
// For local github.io-only testing without a domain, set BASE_PATH=/emrais-engineering.
const basePath = process.env.BASE_PATH ?? "";

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
