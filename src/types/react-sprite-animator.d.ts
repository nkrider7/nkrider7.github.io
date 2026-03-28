declare module 'react-sprite-animator' {
  import type { CSSProperties } from 'react'

  export interface SpriteAnimatorProps {
    className?: string
    width: number
    height: number
    sprite: string
    scale?: number
    direction?: 'horizontal' | 'vertical'
    shouldAnimate?: boolean
    loop?: boolean
    startFrame?: number
    fps?: number
    stopLastFrame?: boolean
    frameCount?: number
    wrapAfter?: number
    frame?: number
    reset?: boolean
    onError?: (err: unknown) => void
    onLoad?: () => void
    onEnd?: () => void
  }

  export function SpriteAnimator(props: SpriteAnimatorProps): JSX.Element

  export function useSprite(options: SpriteAnimatorProps): CSSProperties
}
