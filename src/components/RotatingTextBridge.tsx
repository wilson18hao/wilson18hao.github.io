import { forwardRef } from 'react'
import BaseRotatingText from './Rotating Text/RotatingText.jsx'
import type { RotatingTextProps, RotatingTextRef } from '../types/rotating-text'

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(function RotatingTextBridge(
  props,
  ref,
) {
  return <BaseRotatingText {...props} ref={ref} />
})

RotatingText.displayName = 'RotatingTextBridge'

export default RotatingText
