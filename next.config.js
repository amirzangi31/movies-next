/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'modos.github.io',
            port: '',
            pathname: '/persian-cinema-json/posters/**',
          },
          {
            protocol: 'https',
            hostname: 'modos.github.io',
            port: '',
            pathname: '/persian-cinema-json/actors/**',
          },
        ],
      },
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);



module.exports = withNextIntl(nextConfig)
