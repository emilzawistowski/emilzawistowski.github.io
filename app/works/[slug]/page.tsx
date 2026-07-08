import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { works } from '@/lib/data'

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
  if (!work) notFound()

  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="border-b border-foreground py-2.5">
        <Link
          href="/works"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
        >
          ← Works
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-[1fr_16rem] md:gap-10">
        <div>
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-foreground">
            <Image
              src={work.image || '/placeholder.svg'}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover grayscale"
              priority
            />
          </div>
          <h1 className="mt-5 text-balance font-sans text-xl font-medium leading-tight text-foreground md:text-2xl">
            {work.title}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty font-sans text-[13px] leading-relaxed text-foreground">
            {work.description}
          </p>
        </div>

        <aside className="font-mono text-[11px] uppercase tracking-[0.12em]">
          <dl className="divide-y divide-border border-y border-border">
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-muted-foreground">Category</dt>
              <dd className="text-right text-foreground">{work.category}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-muted-foreground">Year</dt>
              <dd className="text-right tabular-nums text-foreground">{work.year}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-muted-foreground">Venue</dt>
              <dd className="text-right text-foreground">{work.venue}</dd>
            </div>
            {work.collaborators && (
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-muted-foreground">With</dt>
                <dd className="text-right text-foreground">
                  {work.collaborators.join(', ')}
                </dd>
              </div>
            )}
          </dl>

          {work.links && work.links.length > 0 && (
            <ul className="mt-5 flex flex-col gap-1.5">
              {work.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  )
}
