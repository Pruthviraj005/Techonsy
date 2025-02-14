/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "assets.aceternity.com"], // Added "assets.aceternity.com" here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Fixed array brackets; hostname should be a string
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
