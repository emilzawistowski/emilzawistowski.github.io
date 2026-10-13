import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { works } from '@/lib/data'
import { NewTabHint } from '@/components/new-tab-hint'
export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const work = works.find((work) => work.slug === slug)
  if (!work) return {}
  const url = `/works/${work.slug}/`
  const image = work.image ?? '/og.jpg'
  const imageAlt =
    work.imageAlt ?? 'Emil Zawistowski — Hearing Science | Auditory Cognition'
  return {
    title: `${work.shortTitle} — Emil Zawistowski`,
    description: work.question,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: work.title,
      description: work.question,
      url,
      siteName: 'Emil Zawistowski',
      type: 'article',
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.question,
      images: [image],
    },
  }
}
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const work = works.find((work) => work.slug === slug)
  if (!work) notFound()
  const { relatedPublicationId } = work
  return (
    <article className="work-detail mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="border-b border-foreground">
        <Link
          href="/works"
          className="inline-flex min-h-12 items-center font-mono text-[11px] uppercase tracking-wider hover:text-accent"
        >
          ← Research & Projects
        </Link>
      </div>
      <header className="work-detail-header">
        <h1 className="text-pretty text-2xl font-medium leading-tight md:text-4xl">
          {work.title}
        </h1>
        <div className="work-detail-meta">
          <span>
            {work.year} · {work.category}
          </span>
          <span>{work.venue}</span>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">
          {work.question}
        </p>
        {work.links?.length || relatedPublicationId ? (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {work.links?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-mono text-xs underline underline-offset-4 hover:text-accent"
              >
                {link.label} ↗
                <NewTabHint />
              </Link>
            ))}
            {relatedPublicationId && (
              <Link
                href={`/publications#${relatedPublicationId}`}
                className="inline-flex min-h-11 items-center font-mono text-xs underline underline-offset-4 hover:text-accent"
              >
                Related publication →
              </Link>
            )}
          </div>
        ) : null}
      </header>
      <div className="work-detail-body">
        <div className="work-detail-content">
          <section aria-labelledby="methods">
            <h2 id="methods" className="section-heading">
              Approach & Methods
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed">
              {work.methods}
            </p>
          </section>
          <section className="mt-8" aria-labelledby="findings">
            <h2 id="findings" className="section-heading">
              Outcome & Limitations
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed">
              {work.findings}
            </p>
          </section>
          {work.collaborators && (
            <p className="work-collaborators">
              <span>Collaborators</span>
              {work.collaborators.join(', ')}
            </p>
          )}
          {work.image && (
            <div className="work-detail-image">
              <Image
                src={work.image}
                alt={work.imageAlt ?? `Project illustration: ${work.shortTitle}`}
                width={work.imageWidth ?? 1600}
                height={work.imageHeight ?? 1000}
                loading="eager"
                sizes="(max-width: 767px) 100vw, 700px"
                className={`h-auto w-full grayscale${work.imageIsLineArt ? ' line-art' : ''}`}
              />
            </div>
          )}
        </div>
      </div>
      <Link
        href="/works"
        className="mt-8 inline-flex min-h-11 items-center font-mono text-xs hover:text-accent"
      >
        ← All research & projects
      </Link>
    </article>
  )
}
