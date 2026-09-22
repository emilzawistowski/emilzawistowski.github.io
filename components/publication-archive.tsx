'use client'

import { useMemo, useState } from 'react'
import type { Publication } from '@/lib/data'
import { PublicationRow, usePublicationHashFlash } from './publication-list'

const pageSize = 10
const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })

export function PublicationArchive({
  publications,
}: {
  publications: Publication[]
}) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')
  const [pubType, setPubType] = useState('')
  const [venue, setVenue] = useState('')
  const [sort, setSort] = useState('year')
  const [direction, setDirection] = useState('desc')
  const [page, setPage] = useState(1)
  usePublicationHashFlash()
  const options = (key: 'year' | 'type' | 'venue') =>
    [...new Set(publications.map((pub) => pub[key]))].sort(collator.compare)
  const filtered = useMemo(() => {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
    return publications
      .filter((pub) => {
        const text = [
          pub.title,
          pub.authors,
          pub.venue,
          pub.type,
          pub.year,
          pub.doi ?? '',
        ]
          .join(' ')
          .toLocaleLowerCase()
        return (
          terms.every((term) => text.includes(term)) &&
          (!year || pub.year === year) &&
          (!pubType || pub.type === pubType) &&
          (!venue || pub.venue === venue)
        )
      })
      .sort((a, b) => {
        const key = sort as 'year' | 'title' | 'type' | 'venue'
        const result = collator.compare(a[key], b[key])
        return (
          (direction === 'asc' ? result : -result) ||
          collator.compare(a.title, b.title)
        )
      })
  }, [publications, query, year, pubType, venue, sort, direction])
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pages)
  const active = Boolean(query || year || pubType || venue)
  function reset() {
    setQuery('')
    setYear('')
    setPubType('')
    setVenue('')
    setSort('year')
    setDirection('desc')
    setPage(1)
  }
  return (
    <div className="project-archive publication-archive">
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
            placeholder="Title, authors, venue…"
          />
        </label>
      </div>
      <details className="archive-more publication-filters">
        <summary className="disclosure-label">
          Filters / Sort
          {year || pubType || venue || sort !== 'year' || direction !== 'desc'
            ? ' · active'
            : ''}
        </summary>
        <div className="archive-extra-controls">
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
              value={pubType}
              onChange={(e) => {
                setPubType(e.target.value)
                setPage(1)
              }}
            >
              <option value="">All types</option>
              {options('type').map((value) => (
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
              <option value="type">Type</option>
              <option value="venue">Venue</option>
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
          <label>
            Venue
            <select
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value)
                setPage(1)
              }}
            >
              <option value="">All venues</option>
              {options('venue').map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
        </div>
      </details>
      <div className="archive-status">
        <p role="status">
          {filtered.length} of {publications.length} publications
        </p>
        {(active || sort !== 'year' || direction !== 'desc') && (
          <button onClick={reset}>Reset</button>
        )}
      </div>
      <ul>
        {filtered
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((pub) => (
            <PublicationRow key={pub.title} pub={pub} />
          ))}
      </ul>
      {!filtered.length && (
        <p className="py-6 text-sm text-muted-foreground">
          No publications match these filters. Try a broader search or reset the
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
