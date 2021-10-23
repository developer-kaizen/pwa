/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/startseite',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
}
