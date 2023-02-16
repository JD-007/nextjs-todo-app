/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStringMode: true,
  experimental: { appDir: true },
    async rewrites(){

      return[
        {
          source: "/api/:path*",
          destination: "http://localhost:3001/api/:path*",

        },
      ];
      },
};

module.exports = nextConfig
