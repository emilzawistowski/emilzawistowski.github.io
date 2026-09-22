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
import { PublicationList } from '@/components/publication-list'
import { ProjectCard } from '@/components/project-card'

export default function HomePage() {
  const selectedWorks = homeSelection.flatMap((slug) =>
    works.filter((work) => work.slug === slug),
  )
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <section className="identity-panel" aria-labelledby="intro-title">
        <div className="identity-photo">
          <Image
            src="/portrait.jpg"
            alt={`Portrait of ${scholar.name}`}
            fill
            sizes="(max-width: 767px) 72px, 144px"
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="identity-heading">
          <h1 id="intro-title">{scholar.name}</h1>
          <p>{scholar.role}</p>
          <span className="eyebrow">Copenhagen, DK</span>
        </div>
        <p className="identity-description">{biography.short}</p>
      </section>
      <div className="contact-strip">
        <Link href={`mailto:${contact.email}`}>{contact.email} ↗</Link>
        {contact.links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label} ↗
          </Link>
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
