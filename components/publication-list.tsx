'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Publication } from '@/lib/data'
import { NewTabHint } from './new-tab-hint'

export function usePublicationHashFlash() {
  useEffect(() => {
    const flashFromHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      const el = document.getElementById(hash)
      // Other anchors, such as the skip link's #main-content, are left to the browser.
      if (!el?.classList.contains('bibliography-row')) return
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
      window.setTimeout(() => el.classList.remove('bibliography-flash'), 1300)
    }
    flashFromHash()
    window.addEventListener('hashchange', flashFromHash)
    return () => window.removeEventListener('hashchange', flashFromHash)
  }, [])
}

export function PublicationRow({
  pub,
  headingLevel = 2,
}: {
  pub: Publication
  headingLevel?: 2 | 3
}) {
  const [showAbstract, setShowAbstract] = useState(false)
  const Heading = headingLevel === 3 ? 'h3' : 'h2'
  return (
    <li id={pub.id} className="bibliography-row">
      <div>
        <Heading className="max-w-3xl text-pretty text-sm font-medium leading-snug">
          {pub.href ? (
            <Link
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.title}
              <span aria-hidden="true" className="font-mono text-[10px]">
                &nbsp;↗
              </span>
              <NewTabHint />
            </Link>
          ) : (
            pub.title
          )}
        </Heading>
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
        <div className="publication-source">
          <span>{pub.venue}</span>
          {pub.doi && (
            <Link
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`DOI for ${pub.title} (opens in new tab)`}
            >
              DOI ↗
            </Link>
          )}
          {pub.abstract && (
            <button
              type="button"
              onClick={() => setShowAbstract(!showAbstract)}
              aria-expanded={showAbstract}
            >
              {showAbstract ? '− Abstract' : '+ Abstract'}
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
  headingLevel,
}: {
  publications: Publication[]
  headingLevel?: 2 | 3
}) {
  usePublicationHashFlash()
  return (
    <ul>
      {publications.map((pub) => (
        <PublicationRow key={pub.title} pub={pub} headingLevel={headingLevel} />
      ))}
    </ul>
  )
}
