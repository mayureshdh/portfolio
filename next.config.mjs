/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mayureshdh.github.io",
      },
    ],
  },
};

export default nextConfig;
