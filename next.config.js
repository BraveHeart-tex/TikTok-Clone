/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // config image
  images: {
    domains: ['avatars.githubusercontent.com'],
    optimizeImages: true,
  },
};

module.exports = nextConfig;
