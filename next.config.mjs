// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  // ⛔️ No `turbopack` key here at all
};

export default nextConfig;
