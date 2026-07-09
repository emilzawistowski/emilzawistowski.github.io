import { publications } from '@/lib/data'
import { PublicationList } from '@/components/publication-list'

export const metadata = {
  title: 'Publications — Emil Zawistowski',
}

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <div className="flex items-baseline justify-between border-b border-foreground py-2.5">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
          Publications
        </h1>
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          {String(publications.length).padStart(2, '0')}
        </span>
      </div>

      <PublicationList publications={publications} />
    </div>
  )
}
