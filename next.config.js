const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.PIPER_BACKEND_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
