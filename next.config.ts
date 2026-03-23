import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export has no Next.js image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
