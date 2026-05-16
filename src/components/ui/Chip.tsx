import type { ReactNode } from 'react'
import './ui.css'

export function Chip({ children }: { children: ReactNode }) {
  return <span className="chip label-md">{children}</span>
}
