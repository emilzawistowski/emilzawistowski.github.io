import type { MetadataRoute } from 'next'
import { works } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://emilzawistowski.github.io'
  return ['/', '/works/', '/publications/', ...works.map((work) => `/works/${work.slug}/`)].map((path) => ({
    url: `${base}${path}`,
  }))
}
