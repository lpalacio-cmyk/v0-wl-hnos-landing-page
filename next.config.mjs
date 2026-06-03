/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/precio", destination: "/precio/index.html" },
      { source: "/equilibrio", destination: "/equilibrio/index.html" },
    ]
  },
}

export default nextConfig
