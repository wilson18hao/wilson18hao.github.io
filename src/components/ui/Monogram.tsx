import './ui.css'

type Size = 'sm' | 'md' | 'lg'

export function Monogram({ size = 'md' }: { size?: Size }) {
  return (
    <div className={`monogram monogram--${size} headline-lg`} aria-hidden="true">
      WD
    </div>
  )
}
