import { Monogram } from '../ui/Monogram'
import './LoadingScreen.css'

export function LoadingScreen({ exiting = false }: { exiting?: boolean }) {
  return (
    <div
      className={`loading${exiting ? ' loading--exit' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <Monogram size="sm" />
      <svg className="loading__spinner" viewBox="0 0 50 50" aria-hidden="true">
        <circle className="loading__path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
      <p className="loading__label label-lg">Loading Experience</p>
    </div>
  )
}
