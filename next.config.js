/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.HOSTNAME
    // urlBack: 'http://localhost:3000',
    // token_key: 'auth-token',
    // user_key: 'auth-user',
    // data_key: 'auth-data',
    // is_admin: 'is_admin'
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'mdx',
    'md',
    'jsx',
    'js',
    'tsx',
    'ts'
  ]
};

module.exports = nextConfig;
