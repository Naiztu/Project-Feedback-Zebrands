/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTBACK: process.env.HOSTBACK,
    KEY: process.env.KEY,
  },
};

module.exports = nextConfig;
