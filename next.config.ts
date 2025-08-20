import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export mode for Vercel builds, not for Render
  ...(process.env.VERCEL ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

