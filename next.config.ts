import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Amplify Hosting despliega este proyecto en modo SSR (compute), por lo que
  // NO se define `output`. El optimizador de next/image queda disponible y las
  // capturas remotas se sirven ya redimensionadas en AVIF/WebP.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
