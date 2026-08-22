import Link from 'next/link'
import { scholar, contact } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-end md:justify-between md:px-6">
        <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-muted-foreground">
          <p className="text-foreground">{scholar.title}</p>
          <p>{scholar.affiliation}</p>
          <p>{scholar.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em]">
          {contact.links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
