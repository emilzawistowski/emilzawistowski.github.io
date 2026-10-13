import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Image files wherever they sit, including ones added later.
const imageFiles = ['/*.jpg', '/*.jpeg', '/*.png', '/*.gif', '/*.webp', '/*.avif', '/*.svg']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Keeps the photos and figures out of image search and result thumbnails.
      // The favicon stays open, otherwise the result loses the site icon.
      { userAgent: 'Googlebot-Image', allow: '/favicon/', disallow: '/' },
      // Bing reads pages and images with the same crawler, so it is kept off the image files only.
      { userAgent: 'bingbot', allow: '/favicon/', disallow: imageFiles },
      { userAgent: ['msnbot-media', 'YandexImages', 'Baiduspider-image'], disallow: '/' },
    ],
    sitemap: 'https://emilzawistowski.github.io/sitemap.xml',
  }
}
