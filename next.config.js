/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
    env: {
      SERVER: process.env.SERVER,
    },
  },
}

module.exports = nextConfig
