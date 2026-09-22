import Link from 'next/link'
import { homeSelection, works } from '@/lib/data'
import { ProjectCard } from '@/components/project-card'
import { ProjectArchive } from '@/components/project-archive'
export const metadata = {
  title: 'Research & Projects — Emil Zawistowski',
  description:
    'Research projects by Emil Zawistowski: auditory distance perception with EEG and Wave Field Synthesis, spatial audio, auditory subitizing, sound-source separation and brain-computer music interfaces.',
}
export default function WorksPage() {
  // Featured order follows homeSelection so / and /works stay consistent;
  // archive sorting is independent.
  const featuredWorks = homeSelection.flatMap((slug) =>
    works.filter((work) => work.slug === slug && work.featured),
  )
  const selectedWorks = works.filter((work) => work.selected && !work.featured)
  return (
    <div className="mx-auto max-w-[1100px] px-4 md:px-6">
      <header className="catalogue-header">
        <h1>Research & Projects</h1>
      </header>
      <section aria-labelledby="selected-projects" className="pt-8">
        <h2
          id="selected-projects"
          className="mb-4 text-xl font-medium tracking-tight"
        >
          Selected Projects
        </h2>
        <div className="featured-grid">
          {featuredWorks.map((work) => (
            <ProjectCard key={work.slug} work={work} fullTitle />
          ))}
        </div>
        <div
          className="project-index-row index-column-labels"
          aria-hidden="true"
        >
          <span>Project</span>
          <span>Keywords</span>
          <span>Type</span>
          <span>Year</span>
        </div>
        <ul className="selected-project-list">
          {selectedWorks.map((work) => (
            <li key={work.slug}>
              <Link href={`/works/${work.slug}`} className="project-index-row">
                <h3>{work.title}</h3>
                <span className="project-keywords">
                  {work.keywords.join(', ')}
                </span>
                <span className="project-type">{work.category}</span>
                <span className="project-year">{work.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="archive-heading" className="pb-8 pt-10">
        <h2
          id="archive-heading"
          className="mb-4 text-xl font-medium tracking-tight"
        >
          Archive
        </h2>
        <ProjectArchive works={works} />
      </section>
    </div>
  )
}
