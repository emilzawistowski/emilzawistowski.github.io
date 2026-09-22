import { CollapsibleList } from '@/components/collapsible-list'
import Image from 'next/image'
import Link from 'next/link'
import {
  biography,
  contact,
  homeSelection,
  news,
  publications,
  scholar,
  works,
} from '@/lib/data'
import { NewsList } from '@/components/news-list'
import { StatementText } from '@/components/statement-text'

function RichParagraph({ text }: { text: string }) {
  const parts = text.split('**')
  return (
    <p>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index}>{part}</strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  )
}
import { PublicationList } from '@/components/publication-list'
import { ProjectCard } from '@/components/project-card'

export default function HomePage() {
  const selectedWorks = homeSelection.flatMap((slug) =>
    works.filter((work) => work.slug === slug),
  )
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: scholar.name,
    jobTitle: scholar.role,
    affiliation: {
      '@type': 'Organization',
      name: scholar.affiliation,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Copenhagen',
      addressCountry: 'DK',
    },
    url: 'https://emilzawistowski.github.io/',
    image: 'https://emilzawistowski.github.io/portrait_emil.jpg',
    sameAs: contact.links.map((link) => link.href),
    knowsAbout: [
      'Hearing science',
      'Auditory cognition',
      'Spatial hearing',
      'Psychoacoustics',
      'EEG',
    ],
  }
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="identity-panel" aria-labelledby="intro-title">
        <div className="identity-heading">
          <h1 id="intro-title">{scholar.name}</h1>
          <p className="identity-role">{scholar.role}</p>
          <span className="eyebrow">Copenhagen, DK</span>
          <div className="identity-meta-block">
            <p className="identity-degrees">MSc Sound and Music Computing, <span>Aalborg University</span><br />BSc Cognitive Science, <span>University of Warsaw</span></p>
            <a className="identity-email" href={`mailto:${contact.email}`}>Get in touch ↗</a>
          </div>
          <StatementText text={biography.short} />
        </div>
        <div className="identity-side">
          <div className="identity-photo">
            <Image
              src="/portrait_emil.jpg"
              alt={`Portrait of ${scholar.name}`}
              fill
              sizes="(max-width: 767px) 96px, 306px"
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
        <div className="identity-focus">
          <RichParagraph text={biography.focus} />
        </div>
      </section>
      <div className="credentials home-section">
        {[
          { title: 'Education', entries: biography.education },
          { title: 'Experience', entries: biography.appointments },
        ].map((section) => (
          <CollapsibleList
            key={section.title}
            title={section.title}
            entries={section.entries}
            limit={3}
          />
        ))}
      </div>
      <section className="home-section" aria-labelledby="home-projects">
        <div className="editorial-heading">
          <div>
            <h2 id="home-projects">Selected Projects</h2>
          </div>
          <Link href="/works">All projects ↗</Link>
        </div>
        <div className="featured-grid">
          {selectedWorks.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </div>
      </section>
      <section className="home-section" aria-labelledby="home-publications">
        <div className="editorial-heading">
          <div>
            <h2 id="home-publications">Publications</h2>
          </div>
          <Link href="/publications">Full list ↗</Link>
        </div>
        <PublicationList publications={publications.slice(0, 3)} />
      </section>
      <section className="home-section" aria-labelledby="home-news">
        <div className="editorial-heading">
          <div>
            <h2 id="home-news">News</h2>
          </div>
        </div>
        <NewsList items={news} limit={3} />
      </section>
    </div>
  )
}
