/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
