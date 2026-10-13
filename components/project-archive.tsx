'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { Work } from '@/lib/data'

const pageSize = 10
const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })

export function ProjectArchive({ works }: { works: Work[] }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')
  const [category, setCategory] = useState('')
  const [venue, setVenue] = useState('')
  const [selection, setSelection] = useState('')
  const [sort, setSort] = useState('year')
  const [direction, setDirection] = useState('desc')
  const [page, setPage] = useState(1)
  const options = (key: 'year' | 'category' | 'venue') =>
    [...new Set(works.map((work) => work[key]))].sort(collator.compare)
  const filtered = useMemo(() => {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
    return works
      .filter((work) => {
        const text = [
          work.title,
          work.shortTitle,
          ...work.keywords,
          work.year,
          work.category,
          work.venue,
          work.focus,
          work.description,
          work.methods,
          work.findings,
          ...(work.collaborators ?? []),
        ]
          .join(' ')
          .toLocaleLowerCase()
        return (
          terms.every((term) => text.includes(term)) &&
          (!year || work.year === year) &&
          (!category || work.category === category) &&
          (!venue || work.venue === venue) &&
          (!selection ||
            (selection === 'featured'
              ? work.featured
              : selection === 'selected'
                ? work.selected || work.featured
                : !work.selected && !work.featured))
        )
      })
      .sort((a, b) => {
        const key = sort as 'year' | 'title' | 'category' | 'venue'
        const result = collator.compare(a[key], b[key])
        return (
          (direction === 'asc' ? result : -result) ||
          collator.compare(a.title, b.title)
        )
      })
  }, [works, query, year, category, venue, selection, sort, direction])
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pages)
  const active = Boolean(query || year || category || venue || selection)
  function reset() {
    setQuery('')
    setYear('')
    setCategory('')
    setVenue('')
    setSelection('')
    setSort('year')
    setDirection('desc')
    setPage(1)
  }
  return (
    <div className="project-archive">
      <div className="archive-controls">
        <label className="archive-search">
          Search
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder="Title, methods, collaborators…"
          />
        </label>
        <label>
          Year
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value)
              setPage(1)
            }}
          >
            <option value="">All years</option>
            {options('year')
              .reverse()
              .map((value) => (
                <option key={value}>{value}</option>
              ))}
          </select>
        </label>
        <label>
          Type
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setPage(1)
            }}
          >
            <option value="">All types</option>
            {options('category').map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Sort by
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value)
              setPage(1)
            }}
          >
            <option value="year">Year</option>
            <option value="title">Title</option>
            <option value="category">Type</option>
            <option value="venue">Institution / venue</option>
          </select>
        </label>
        <label>
          Order
          <select
            value={direction}
            onChange={(e) => {
              setDirection(e.target.value)
              setPage(1)
            }}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
      <details className="archive-more">
        <summary className="disclosure-label">
          More filters{venue || selection ? ' · active' : ''}
        </summary>
        <div className="archive-extra-controls">
          <label>
            Institution / venue
            <select
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value)
                setPage(1)
              }}
            >
              <option value="">All institutions / venues</option>
              {options('venue').map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            Selection
            <select
              value={selection}
              onChange={(e) => {
                setSelection(e.target.value)
                setPage(1)
              }}
            >
              <option value="">All projects</option>
              <option value="featured">Featured</option>
              <option value="selected">Selected, including featured</option>
              <option value="archive">Archive only</option>
            </select>
          </label>
        </div>
      </details>
      <div className="archive-status">
        <p role="status">
          {filtered.length} of {works.length} projects
        </p>
        {(active || sort !== 'year' || direction !== 'desc') && (
          <button onClick={reset}>Reset</button>
        )}
      </div>
      <div className="archive-column-labels" aria-hidden="true">
        <span>Project</span>
        <span>Keywords</span>
        <span>Type</span>
        <span>Year</span>
      </div>
      <ul className="archive-results">
        {filtered
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((work) => (
            <li key={work.slug}>
              <Link href={`/works/${work.slug}`}>
                <span className="archive-title">{work.title}</span>
                <span className="archive-keywords">
                  {work.keywords.join(', ')}
                </span>
                <span className="archive-type">{work.category}</span>
                <span className="archive-year">{work.year}</span>
              </Link>
            </li>
          ))}
      </ul>
      {!filtered.length && (
        <p className="py-6 text-sm text-muted-foreground">
          No projects match these filters. Try a broader search or reset the
          filters.
        </p>
      )}
      {pages > 1 && (
        <nav aria-label="Archive pages" className="archive-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            ← Previous
          </button>
          <span>
            Page {currentPage} of {pages}
          </span>
          <button
            disabled={currentPage === pages}
            onClick={() => setPage(currentPage + 1)}
          >
            Next →
          </button>
        </nav>
      )}
    </div>
  )
}
