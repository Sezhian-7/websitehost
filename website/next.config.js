/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: 'https://Sezhian-7.github.io/websitehost/',
  basePath: '/websitehost/',
  assetPrefix: '/websitehost/',

  swcMinify: true,
  images: {
    unoptimized: true, // cant use next export otherwise
  },
  env: {
    REACT_APP_SITE_KEY: "6Lf02gweAAAAANnV-fTjQXd-JoWlWUoc_SM433RD",
    // REACT_APP_SITE_KEY: "6LcdgMIjAAAAAJMSaChAFVP9hh5aAnHZ43eHQMEW",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
