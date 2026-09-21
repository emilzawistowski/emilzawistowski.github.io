'use client'

import { useId, useState } from 'react'

type Entry = { year: string; text: string }

export function CollapsibleList({
  title,
  entries,
  limit = 3,
}: {
  title: string
  entries: Entry[]
  limit?: number
}) {
  const [expanded, setExpanded] = useState(false)
  const id = useId()
  const visible = expanded ? entries : entries.slice(0, limit)
  return (
    <section aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      <ul id={`${id}-entries`}>
        {visible.map((entry) => (
          <li key={entry.text}>
            <span>{entry.year}</span>
            <p>{entry.text}</p>
          </li>
        ))}
      </ul>
      {entries.length > limit && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`${id}-entries`}
          onClick={() => setExpanded(!expanded)}
          className="credential-toggle"
        >
          {expanded ? '[ − show less ]' : `[ + show all (${entries.length}) ]`}
        </button>
      )}
    </section>
  )
}
