// import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')

export default withNextIntl(nextConfig)
