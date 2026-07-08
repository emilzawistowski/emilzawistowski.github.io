/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // To generuje folder './out' ze statyczną stroną
  images: {
    unoptimized: true, // Wymagane na GitHub Pages, żeby działały obrazki z <Image />
  },
};

export default nextConfig;