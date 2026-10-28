/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // এই লাইনটি যোগ করুন
  },
};

module.exports = nextConfig;