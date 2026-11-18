import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache/instant shell features were blocking client navigations in Next 16.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
