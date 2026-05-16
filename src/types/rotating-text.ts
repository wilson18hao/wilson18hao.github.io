import type { ComponentPropsWithoutRef } from 'react'
import type { Transition } from 'motion/react'

export interface RotatingTextProps extends ComponentPropsWithoutRef<'span'> {
  texts: string[]
  transition?: Transition
  initial?: { y?: string | number; opacity?: number }
  animate?: { y?: string | number; opacity?: number }
  exit?: { y?: string | number; opacity?: number }
  animatePresenceMode?: 'wait' | 'sync' | 'popLayout'
  animatePresenceInitial?: boolean
  rotationInterval?: number
  staggerDuration?: number
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number
  loop?: boolean
  auto?: boolean
  splitBy?: 'characters' | 'words' | 'lines' | string
  onNext?: (index: number) => void
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}

export interface RotatingTextRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}
