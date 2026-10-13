'use client'

import { useEffect, useState } from 'react'

// The pages are built ahead of time, so the year is refreshed in the browser.
export function CurrentYear({ builtIn }: { builtIn: number }) {
  const [year, setYear] = useState(builtIn)
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}
