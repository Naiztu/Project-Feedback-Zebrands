/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTBACK: process.env.HOSTBACK
  }
};

module.exports = nextConfig;
