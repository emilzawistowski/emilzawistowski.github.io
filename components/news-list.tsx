'use client'

import { useState } from 'react'
import type { NewsItem } from '@/lib/data'

function toISODate(date: string): string | undefined {
  const day = '(\\d{2})\\.(\\d{2})\\.(\\d{4})'
  const month = '(\\d{2})\\.(\\d{4})'
  let match = date.match(new RegExp(`^${day}`))
  if (match) return `${match[3]}-${match[2]}-${match[1]}`
  match = date.match(new RegExp(`^${month}`))
  if (match) return `${match[2]}-${match[1]}`
  return undefined
}

export function NewsList({
  items,
  limit = 6,
}: {
  items: NewsItem[]
  limit?: number
}) {
  const [expanded, setExpanded] = useState(false)
  const canCollapse = items.length > limit
  const visible = expanded || !canCollapse ? items : items.slice(0, limit)

  return (
    <div>
      <ul>
        {visible.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-1 border-b border-border py-2.5 md:grid-cols-[7rem_1fr] md:gap-6"
          >
            <time
              dateTime={toISODate(item.date)}
              className="font-mono text-[11px] tabular-nums tracking-[0.1em] text-foreground"
            >
              {item.date}
            </time>
            <div>
              <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
              <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {canCollapse && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 min-h-11 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
          aria-expanded={expanded}
        >
          {expanded ? '[ − show less ]' : `[ + show all (${items.length}) ]`}
        </button>
      )}
    </div>
  )
}
