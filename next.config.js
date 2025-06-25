/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? '/geothermal-testbase-platform'
      : '',
  basePath:
    process.env.NODE_ENV === 'production' ? '/geothermal-testbase-platform' : ''
}

module.exports = nextConfig
