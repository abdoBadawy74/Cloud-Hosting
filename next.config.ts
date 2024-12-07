import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"], // استخدم النمط الجديد للملفات
      },
    },
  },
};

export default nextConfig;
