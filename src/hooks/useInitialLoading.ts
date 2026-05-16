import { useEffect, useState } from 'react'

const LOADING_KEY = 'wilson-portfolio-loaded'

export function useInitialLoading(durationMs = 1800) {
  const [loading, setLoading] = useState(() => {
    if (typeof sessionStorage === 'undefined') return true
    return !sessionStorage.getItem(LOADING_KEY)
  })
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!loading) return

    const timer = window.setTimeout(() => {
      setExiting(true)
      sessionStorage.setItem(LOADING_KEY, '1')
      window.setTimeout(() => setLoading(false), 400)
    }, durationMs)

    return () => window.clearTimeout(timer)
  }, [loading, durationMs])

  return { loading, exiting }
}
