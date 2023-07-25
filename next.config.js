/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: 'https://ed0b-103-169-159-101.ngrok-free.app/',
  },
  images: {
        domains: ['chnspart.com'],
  },
}

module.exports = nextConfig
