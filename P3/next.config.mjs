/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GodsPlan/P3',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
