'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { scholar } from '@/lib/data'

const nav = [
  { label: 'Homepage', href: '/' },
  { label: 'Works', href: '/works' },
  { label: 'Publications', href: '/publications' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground">
            {scholar.title}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {scholar.role}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-foreground transition-colors hover:text-accent'
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.15em] text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border md:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col font-mono text-xs uppercase tracking-[0.15em]">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 ${
                    isActive(item.href) ? 'text-accent' : 'text-foreground'
                  }`}
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
