import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/15673208',
      },
      {
        protocol: 'https',
        hostname: 'www.buymeacoffee.com',
        pathname: '/assets/img/custom_images/orange_img.png',
      },
    ],
  },
}

export default nextConfig
