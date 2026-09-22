import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { works } from '@/lib/data'
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
  return work
    ? {
        title: `${work.shortTitle} — Emil Zawistowski`,
        description: work.question,
      }
    : {}
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
  const relatedPublicationIds: Record<string, string> = {
    camjam: 'nime-camjam-2026',
    'auditory-object-enumeration': 'osf-enumeration-2026',
    'spatial-hearing-subitizing-efficiency': 'vcca-subitizing-2026',
  }
  const relatedPublicationId = relatedPublicationIds[work.slug]
  return (
    <article className="mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="border-b border-foreground">
        <Link
          href="/works"
          className="inline-flex min-h-12 items-center font-mono text-[11px] uppercase tracking-wider hover:text-accent"
        >
          ← Research & Projects
        </Link>
      </div>
      <header className="max-w-3xl py-8 md:py-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {work.year} / {work.category}
        </p>
        <h1 className="text-pretty text-2xl font-medium leading-tight md:text-4xl">
          {work.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">
          {work.question}
        </p>
        {work.links?.length || relatedPublicationId ? (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {work.links?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center font-mono text-xs underline underline-offset-4 hover:text-accent"
              >
                {link.label} ↗
              </Link>
            ))}
            {relatedPublicationId && (
              <Link
                href={`/publications#${relatedPublicationId}`}
                className="inline-flex min-h-11 items-center font-mono text-xs underline underline-offset-4 hover:text-accent"
              >
                Related publication ↗
              </Link>
            )}
          </div>
        ) : null}
      </header>
      <div className="grid items-start gap-8 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12">
        <div>
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
          {work.image && (
            <div className="mt-8 w-full overflow-hidden border border-border">
              <Image
                src={work.image}
                alt={`Project illustration: ${work.shortTitle}`}
                width={1600}
                height={1000}
                sizes="(max-width: 767px) 100vw, 700px"
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
        <aside className="font-mono text-xs leading-relaxed">
          <h2 className="mb-4 text-[11px] uppercase tracking-wider">
            Project context
          </h2>
          <dl className="divide-y divide-border border-y border-border">
            <div className="py-3">
              <dt className="mb-1 text-muted-foreground">
                Institution / Venue
              </dt>
              <dd>{work.venue}</dd>
            </div>
            {work.collaborators && (
              <div className="py-3">
                <dt className="mb-1 text-muted-foreground">Collaborators</dt>
                <dd>{work.collaborators.join(', ')}</dd>
              </div>
            )}
          </dl>
        </aside>
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
