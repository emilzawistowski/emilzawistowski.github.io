import Link from 'next/link'

export const metadata = {
  title: 'Page not found — Emil Zawistowski',
}

const links = [
  { label: 'Homepage', href: '/' },
  { label: 'Research & Projects', href: '/works' },
  { label: 'Publications', href: '/publications' },
]

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <header className="catalogue-header">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
      </header>
      <p className="max-w-prose pt-8 text-base leading-relaxed">
        This page does not exist or has moved.
      </p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center font-mono text-xs underline underline-offset-4 hover:text-accent"
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  )
}
