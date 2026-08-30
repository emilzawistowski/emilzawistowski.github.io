'use client'

import { useState } from 'react'
import type { NewsItem } from '@/lib/data'

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
            className="grid grid-cols-1 gap-1 border-b border-border py-4 md:grid-cols-[7rem_1fr] md:gap-6"
          >
            <time className="font-mono text-[11px] tabular-nums tracking-[0.1em] text-foreground">
              {item.date}
            </time>
            <div>
              <h3 className="text-pretty font-sans text-sm font-medium leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 max-w-2xl text-pretty font-sans text-[13px] leading-relaxed text-muted-foreground">
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
          className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-100 hover:bg-foreground hover:text-background"
          aria-expanded={expanded}
        >
          {expanded ? '[ − show less ]' : `[ + show all (${items.length}) ]`}
        </button>
      )}
    </div>
  )
}
