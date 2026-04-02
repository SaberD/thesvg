import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    viewTransition: true,
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
