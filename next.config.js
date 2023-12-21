/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      ["next-superjson-plugin", {}]
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.cloundinary.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
