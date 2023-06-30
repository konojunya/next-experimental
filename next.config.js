/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};
