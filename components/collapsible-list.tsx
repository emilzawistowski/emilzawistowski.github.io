'use client'

import { useState } from 'react'

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
  const canCollapse = entries.length > limit
  const visible = expanded || !canCollapse ? entries : entries.slice(0, limit)

  return (
    <section>
      <h2 className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
        {title}
      </h2>
      <ul className="divide-y divide-border border-y border-border">
        {visible.map((e, i) => (
          <li key={i} className="grid grid-cols-[3rem_1fr] gap-3 py-2">
            <span className="tabular-nums text-muted-foreground">{e.year}</span>
            <span className="text-foreground">{e.text}</span>
          </li>
        ))}
      </ul>
      {canCollapse && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
          aria-expanded={expanded}
        >
          {expanded ? '[ − show less ]' : `[ + show all (${entries.length}) ]`}
        </button>
      )}
    </section>
  )
}
