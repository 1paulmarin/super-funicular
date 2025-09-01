/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/chess/:path*",
        destination: "https://v0-new-chat-5duej5k59-paulmarin663-1342s-projects.vercel.app/:path*",
      },
    ]
  },
}

export default nextConfig
