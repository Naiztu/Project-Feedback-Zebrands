/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTBACK: "http://localhost:8080",
  },
};

module.exports = nextConfig;
