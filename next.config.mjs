/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
  distDir: "dist",
  output: 'export',
  // Optional: Add trailingSlash if hosting on GitHub Pages or similar
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
