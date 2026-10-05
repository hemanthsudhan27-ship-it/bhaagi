import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow local images — no remote hosts needed
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
