/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  reactStrictMode: true,
  trailingSlash: true, // Optional: Enables trailing slashes for static exports
};


// Merge the bundle analyzer config with the Next.js config
module.exports = withBundleAnalyzer(nextConfig);
