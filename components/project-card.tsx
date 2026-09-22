import Link from 'next/link'
import Image from 'next/image'
import type { Work } from '@/lib/data'

export function ProjectCard({
  work,
  fullTitle = false,
}: {
  work: Work
  fullTitle?: boolean
}) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className={`research-card${fullTitle ? ' research-card-full' : ''}`}
    >
      <div className="research-card-meta">
        <span>{work.year}</span>
        <span aria-hidden="true">↗</span>
      </div>
      {work.image && (
        <div className="research-card-thumb">
          <Image
            src={work.image}
            alt={`Project thumbnail: ${work.shortTitle}`}
            width={800}
            height={450}
            sizes="(max-width: 767px) 100vw, 300px"
            className="grayscale"
          />
        </div>
      )}
      <h3>{fullTitle ? work.title : work.shortTitle}</h3>
      {!fullTitle && <p className="research-card-question">{work.question}</p>}
      <dl className="research-card-focus card-metadata">
        <div>
          <dt>Keywords</dt>
          <dd>{work.keywords.join(' · ')}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>{work.category}</dd>
        </div>
      </dl>
    </Link>
  )
}
