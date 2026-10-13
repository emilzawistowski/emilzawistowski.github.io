'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { scholar } from '@/lib/data'
import { applyTheme, storedTheme } from '@/lib/theme'

const nav = [
  { label: 'Homepage', href: '/' },
  { label: 'Research & Projects', href: '/works' },
  { label: 'Publications', href: '/publications' },
]

function toggleTheme() {
  const next =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  try {
    localStorage.setItem('theme', next)
  } catch {}
}

function ThemeToggle({ className }: { className: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
    >
      <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5">
        <circle
          cx="8"
          cy="8"
          r="6.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  // Until the visitor picks a theme, keep following the system setting.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const follow = () => {
      if (!storedTheme()) applyTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', follow)
    return () => media.removeEventListener('change', follow)
  }, [])
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
        if (event.key === 'Escape' && open) {
          setOpen(false)
          // The focused menu link is about to disappear; hand focus back to the button.
          menuButton.current?.focus()
        }
      }}
    >
      <div className="site-masthead mx-auto max-w-[1100px] px-4 md:px-6">
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
            <li>
              <ThemeToggle className="-m-2 block p-2 text-muted-foreground hover:text-foreground" />
            </li>
          </ul>
        </nav>
        <div className="masthead-actions flex items-center md:hidden">
          <ThemeToggle className="flex min-h-11 min-w-11 items-center justify-center" />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(!open)}
            className="min-h-11 min-w-16 font-mono text-xs uppercase tracking-[0.15em]"
            aria-expanded={open}
            aria-controls={open ? 'mobile-navigation' : undefined}
            aria-label="Toggle navigation menu"
          >
            {open ? '[ close ]' : '[ menu ]'}
          </button>
        </div>
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
