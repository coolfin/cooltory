/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/uni',
        destination:
          'https://docs.google.com/spreadsheets/d/12l0GoZA2Yyvil9sV0N9XTHDC7ym-hHi3gTPTdtjPEjE/edit?usp=sharing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
