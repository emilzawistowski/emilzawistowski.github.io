'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Publication } from '@/lib/data'

export function usePublicationHashFlash() {
  useEffect(() => {
    const flashFromHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      const el = document.getElementById(hash)
      if (!el) return
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      el.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'center',
      })
      el.classList.remove('bibliography-flash')
      void el.offsetWidth
      el.classList.add('bibliography-flash')
      window.setTimeout(
        () => el.classList.remove('bibliography-flash'),
        1300,
      )
    }
    flashFromHash()
    window.addEventListener('hashchange', flashFromHash)
    return () => window.removeEventListener('hashchange', flashFromHash)
  }, [])
}

export function PublicationRow({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false)
  return (
    <li id={pub.id} className="bibliography-row">
      <div>
        <h2 className="max-w-3xl text-pretty text-sm font-medium leading-snug">
          {pub.href ? (
            <Link href={pub.href} className="hover:text-accent">
              {pub.title}
            </Link>
          ) : (
            pub.title
          )}
        </h2>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {pub.authors.split(/(E\. Zawistowski)/).map((part, index) =>
            part === 'E. Zawistowski' ? (
              <strong key={index} className="font-medium text-foreground">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
        <p className="mt-0.5 text-xs italic leading-relaxed text-muted-foreground">
          {pub.venue}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-wider">
          {pub.doi && (
            <Link
              href={`https://doi.org/${pub.doi}`}
              className="inline-flex min-h-11 items-center break-all hover:text-accent"
            >
              DOI: {pub.doi} ↗
            </Link>
          )}
          {pub.abstract && (
            <button
              type="button"
              onClick={() => setShowAbstract(!showAbstract)}
              className="min-h-11 hover:text-accent"
              aria-expanded={showAbstract}
            >
              {showAbstract ? '[ − hide abstract ]' : '[ + abstract ]'}
            </button>
          )}
        </div>
        {showAbstract && (
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed">
            {pub.abstract}
          </p>
        )}
      </div>
      <span className="bibliography-type">{pub.type}</span>
      <span className="bibliography-year">{pub.year}</span>
    </li>
  )
}
export function PublicationList({
  publications,
}: {
  publications: Publication[]
}) {
  usePublicationHashFlash()
  return (
    <ul>
      {publications.map((pub) => (
        <PublicationRow key={pub.title} pub={pub} />
      ))}
    </ul>
  )
}
