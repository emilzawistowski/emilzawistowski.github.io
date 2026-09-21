'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { scholar } from '@/lib/data'

const nav = [
  { label: 'Homepage', href: '/' },
  { label: 'Research & Projects', href: '/works' },
  { label: 'Publications', href: '/publications' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)
  const linkClass = (href: string) =>
    isActive(href)
      ? 'text-foreground underline underline-offset-8 decoration-2'
      : 'text-muted-foreground hover:text-foreground hover:underline underline-offset-8'
  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false)
      }}
    >
      <div
        className={`site-masthead mx-auto max-w-[1100px] px-4 md:px-6 ${pathname === '/' ? 'masthead-home' : ''}`}
      >
        {pathname !== '/' && (
          <>
            <Link
              href="/"
              className="masthead-name font-mono text-xs uppercase tracking-[0.15em]"
            >
              {scholar.name}
            </Link>
            <p className="masthead-role font-mono text-[9px] uppercase tracking-[0.09em] text-muted-foreground">
              {scholar.role}
            </p>
          </>
        )}
        <nav className="masthead-nav hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="masthead-toggle min-h-11 min-w-16 font-mono text-xs uppercase tracking-[0.15em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-border md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="font-mono text-xs uppercase tracking-[0.15em]">
            {nav.map((item) => (
              <li
                key={item.href}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-4 ${linkClass(item.href)}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
