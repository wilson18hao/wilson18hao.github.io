import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './ui.css'

type Variant = 'primary' | 'tonal' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn--${variant} label-lg ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
