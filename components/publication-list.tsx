'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Publication } from '@/lib/data'

function PublicationRow({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false)

  return (
    <li className="border-b border-border py-4">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_10rem_6rem_3rem] md:gap-6">
        <div>
          <h2 className="text-pretty font-sans text-sm font-medium leading-snug text-foreground">
            {pub.href ? (
              <Link href={pub.href} className="transition-colors hover:text-accent">
                {pub.title}
              </Link>
            ) : (
              pub.title
            )}
          </h2>
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">{pub.authors}</p>
          <p className="mt-0.5 font-sans text-[13px] italic text-muted-foreground">
            {pub.venue}
          </p>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.1em] md:pt-0.5">
          <span className="text-muted-foreground md:hidden">DOI: </span>
          {pub.doi ? (
            <Link
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-foreground transition-colors hover:text-accent"
            >
              {pub.doi}
            </Link>
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:pt-0.5">
          {pub.type}
        </span>

        <span className="font-mono text-[11px] tabular-nums text-foreground md:pt-0.5 md:text-right">
          {pub.year}
        </span>
      </div>

      {pub.abstract && (
        <div className="mt-2 md:pr-[19rem]">
          <button
            type="button"
            onClick={() => setShowAbstract((v) => !v)}
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
            aria-expanded={showAbstract}
          >
            {showAbstract ? '[ − hide abstract ]' : '[ + abstract ]'}
          </button>
          {showAbstract && (
            <p className="mt-2 max-w-2xl text-pretty font-sans text-[13px] leading-relaxed text-foreground">
              {pub.abstract}
            </p>
          )}
        </div>
      )}
    </li>
  )
}

export function PublicationList({ publications }: { publications: Publication[] }) {
  return (
    <ul>
      {publications.map((pub, i) => (
        <PublicationRow key={i} pub={pub} />
      ))}
    </ul>
  )
}
