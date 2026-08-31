import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "konkretni.com.pl" },
    ],
  },
  // Keep minimal
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
