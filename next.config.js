/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dummyimage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com/',
        port: '',
        pathname: '/800x430/ffffff/**',
      },
    ],
  },

}

module.exports = nextConfig
