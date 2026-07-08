import Image from 'next/image'
import Link from 'next/link'
import { biography, contact, news, scholar } from '@/lib/data'
import { CollapsibleList } from '@/components/collapsible-list'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      {/* Biography */}
      <div className="border-b border-foreground py-2.5">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
          Biography
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-[1fr_15rem] md:gap-10">
        <div>
          <p className="max-w-2xl text-pretty font-sans text-base font-medium leading-snug text-foreground md:text-lg">
            {biography.short}
          </p>
          <div className="mt-5 flex max-w-2xl flex-col gap-3">
            {biography.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty font-sans text-[13px] leading-relaxed text-foreground"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-8 max-w-2xl border-t border-foreground pt-4">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 font-mono text-[13px] uppercase tracking-[0.1em] sm:grid-cols-2">
              <div className="grid grid-cols-[4.5rem_1fr] gap-3">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="lowercase text-foreground transition-colors hover:text-accent"
                  >
                    {contact.email}
                  </Link>
                </dd>
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] gap-3">
                <dt className="text-muted-foreground">Links</dt>
                <dd>
                  <ul className="flex flex-col gap-1">
                    {contact.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                        >
                          <span className="tracking-[0.1em]">{l.label}</span>
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <aside className="font-mono text-[11px]">
          <div className="relative mb-5 aspect-[4/5] w-full max-w-[12rem] overflow-hidden bg-muted">
            <Image
              src="/portrait.jpg"
              alt={`Portrait of ${scholar.name}`}
              fill
              sizes="192px"
              className="object-cover grayscale"
              priority
            />
          </div>

          <CollapsibleList title="Education" entries={biography.education} />

          <div className="mt-6">
            <CollapsibleList title="Appointments" entries={biography.appointments} />
          </div>
        </aside>
      </div>

      {/* News */}
      <div className="mt-6 flex items-baseline justify-between border-b border-foreground py-2.5">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
          News / Updates
        </h2>
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          {String(news.length).padStart(2, '0')}
        </span>
      </div>

      <ul>
        {news.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-1 border-b border-border py-4 md:grid-cols-[7rem_1fr] md:gap-6"
          >
            <time className="font-mono text-[11px] tabular-nums tracking-[0.1em] text-foreground">
              {item.date}
            </time>
            <div>
              <h3 className="text-pretty font-sans text-sm font-medium leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 max-w-2xl text-pretty font-sans text-[13px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
