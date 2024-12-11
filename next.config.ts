import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"], // استخدم النمط الجديد للملفات
      },
    },
    isrFlushToDisk: false, // تعطيل الحفظ المؤقت للصفحات
  },
};

export default nextConfig;
