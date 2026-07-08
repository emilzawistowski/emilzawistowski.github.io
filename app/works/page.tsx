import Image from 'next/image'
import Link from 'next/link'
import { works } from '@/lib/data'

export const metadata = {
  title: 'Works — Emil Zawistowski',
}

export default function WorksPage() {
  // 1. Filtrujemy projekty na wyróżnione i pozostałe
  const featuredWorks = works.filter((work) => work.featured)
  const remainingWorks = works.filter((work) => !work.featured)

  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6 space-y-12">
      
      {/* SEKCJA: WYRÓŻNIONE (Wyświetla się tylko, jeśli dodasz do danych chociaż jeden projekt z featured: true) */}
      {featuredWorks.length > 0 && (
        <div>
          <div className="flex items-baseline justify-between border-b border-foreground py-2.5 mb-2">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground font-bold">
              ★ Featured / Key Projects
            </h2>
            <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
              {String(featuredWorks.length).padStart(2, '0')}
            </span>
          </div>

          <ul>
            {featuredWorks.map((work) => (
              <li key={`featured-${work.slug}`} className="border-b border-border">
                <Link
                  href={`/works/${work.slug}`}
                  className="group grid grid-cols-1 items-center gap-3 py-3 md:grid-cols-[7rem_1fr_9rem_4rem] md:gap-6 bg-accent/5 hover:bg-accent/10 transition-colors px-2 -mx-2 rounded"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground md:aspect-[3/2] md:w-28">
                    <Image
                      src={work.image || '/placeholder.svg'}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 112px"
                      className="object-cover grayscale transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>

                  <h3 className="text-pretty font-sans text-sm font-medium leading-tight text-foreground transition-colors group-hover:text-accent md:text-base">
                    {work.title}
                  </h3>

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
        </div>
      )}

      {/* SEKCJA: WSZYSTKIE POZOSTAŁE PROJEKTY */}
      <div>
        <div className="flex items-baseline justify-between border-b border-foreground py-2.5 mb-2">
          <h1 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
            All Works / Research Projects
          </h1>
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {String(remainingWorks.length).padStart(2, '0')}
          </span>
        </div>

        <ul>
          {remainingWorks.map((work) => (
            <li key={work.slug} className="border-b border-border">
              <Link
                href={`/works/${work.slug}`}
                className="group grid grid-cols-1 items-center gap-3 py-3 md:grid-cols-[7rem_1fr_9rem_4rem] md:gap-6"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground md:aspect-[3/2] md:w-28">
                  <Image
                    src={work.image || '/placeholder.svg'}
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
      </div>

    </div>
  )
}