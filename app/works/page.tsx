import Image from 'next/image'
import Link from 'next/link'
import { works } from '@/lib/data'

export const metadata = {
  title: 'Research & Projects — Emil Zawistowski',
}

export default function WorksPage() {
  const featuredWorks = works.filter((work) => work.featured)
  const selectedWorks = works.filter((work) => work.selected && !work.featured)
  const archiveWorks = [...works].sort((first, second) => Number(second.year) - Number(first.year))

  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="flex items-baseline justify-between border-b border-foreground py-2.5">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
          Research & Projects
        </h1>
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          {String(works.length).padStart(2, '0')}
        </span>
      </div>

      <section aria-labelledby="selected-projects-heading" className="py-6">
        <h2
          id="selected-projects-heading"
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground"
        >
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {featuredWorks.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="group bg-background p-3 transition-colors hover:bg-muted"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover grayscale transition duration-300 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
              <div className="mt-3 grid grid-cols-[1fr_auto] gap-4">
                <h3 className="text-pretty font-sans text-sm font-medium leading-tight text-foreground transition-colors group-hover:text-accent md:text-base">
                  {work.title}
                </h3>
                <span className="font-mono text-[11px] tabular-nums text-foreground">
                  {work.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {work.category}
              </p>
            </Link>
          ))}
        </div>

        <ul className="mt-8">
          {selectedWorks.map((work) => (
          <li key={work.slug} className="border-b border-border">
            <Link
              href={`/works/${work.slug}`}
              className="group grid grid-cols-1 items-center gap-3 py-3 md:grid-cols-[7rem_1fr_9rem_4rem] md:gap-6"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground md:aspect-[3/2] md:w-28">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 112px"
                  className="object-cover grayscale transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>

              <h2 className="text-pretty font-sans text-sm font-medium leading-tight text-foreground transition-colors group-hover:text-accent md:text-base">
                {work.title}
              </h2>

              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {work.category}
              </span>

              <span className="font-mono text-[11px] tabular-nums text-foreground md:text-right">
                {work.year}
              </span>
            </Link>
          </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="all-projects-heading" className="mt-4 pb-8">
        <div className="flex items-baseline justify-between border-b border-foreground py-2.5">
          <h2
            id="all-projects-heading"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground"
          >
            All Projects
          </h2>
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {String(archiveWorks.length).padStart(2, '0')}
          </span>
        </div>

        <ul>
          {archiveWorks.map((work) => (
            <li key={work.slug} className="border-b border-border">
              <Link
                href={`/works/${work.slug}`}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-2.5 transition-colors hover:text-accent md:grid-cols-[5rem_1fr_12rem_4rem] md:gap-6"
              >
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {work.year}
                </span>
                <span className="text-pretty font-sans text-sm font-medium leading-tight">
                  {work.title}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:block">
                  {work.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:text-right">
                  View ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
