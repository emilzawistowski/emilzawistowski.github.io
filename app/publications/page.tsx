import { publications } from '@/lib/data'
import { PublicationArchive } from '@/components/publication-archive'

export const metadata = {
  title: 'Publications — Emil Zawistowski',
  description:
    'Publications by Emil Zawistowski: auditory display (ICAD), computational audiology (VCCA), musical interfaces (NIME) and auditory cognition preprints.',
}

export default function PublicationsPage() {
  const articlesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': publications.map((pub) => ({
      '@type': 'ScholarlyArticle',
      headline: pub.title,
      author: pub.authors
        .split(',')
        .map((name) => ({ '@type': 'Person', name: name.trim() })),
      datePublished: pub.year,
      publisher: {
        '@type': 'Organization',
        name: pub.venue,
      },
      ...(pub.href ? { url: pub.href } : {}),
      ...(pub.doi ? { sameAs: `https://doi.org/${pub.doi}` } : {}),
    })),
  }
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
      />
      <header className="catalogue-header">
        <h1>Publications</h1>
      </header>

      <div className="pt-6">
        <PublicationArchive publications={publications} />
      </div>
    </div>
  )
}
