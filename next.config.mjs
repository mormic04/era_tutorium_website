/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Add this line to enable static export
  //basePath: '/~momi/era', // Set your base path here
  basePath: process.env.NODE_ENV === 'production' ? '/~momi/era' : '',
};

export default nextConfig;
