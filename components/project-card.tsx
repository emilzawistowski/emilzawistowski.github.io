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
  const illustrations: Record<string, string> = {
    'msc-thesis-auditory-distance': 'distance',
    'auditory-object-enumeration': 'enumeration',
    'demant-audio-explorers': 'extraction',
    'harman-spatial-audio': 'spatial',
  }
  const contexts: Record<string, string> = {
    'msc-thesis-auditory-distance': "Master’s Thesis | Aalborg University",
    'auditory-object-enumeration': 'Preprint | University of Warsaw — Research Circle of Cognitive Psychology of Music',
    'demant-audio-explorers': 'Competition | Audio Explorers (Demant)',
    'harman-spatial-audio': 'Industry Collaboration | HARMAN International',
  }
  const illustration = illustrations[work.slug]
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
            src={illustration ? `/illustrations/${illustration}.svg` : work.image}
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
      {fullTitle ? <dl className="research-card-focus card-metadata">
        {fullTitle && (
          <div>
            <dt>Keywords</dt>
            <dd>{work.keywords.join(' · ')}</dd>
          </div>
        )}
        <div>
          <dt>Type</dt>
          <dd>{work.category}</dd>
        </div>
      </dl> : <p className="research-card-context">{contexts[work.slug] ?? `${work.category} | ${work.venue}`}</p>}
    </Link>
  )
}
