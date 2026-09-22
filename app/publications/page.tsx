import { publications } from '@/lib/data'
import { PublicationArchive } from '@/components/publication-archive'

export const metadata = {
  title: 'Publications — Emil Zawistowski',
}

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <header className="catalogue-header">
        <h1>Publications</h1>
      </header>

      <div className="pt-6">
        <PublicationArchive publications={publications} />
      </div>
    </div>
  )
}
