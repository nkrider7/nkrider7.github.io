import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  padding?: boolean
  tone?: 'snow' | 'subtle' | 'dark' | 'deep'
} & HTMLAttributes<HTMLDivElement>

const tones = {
  snow: 'border-cloud bg-snow',
  subtle: 'border-cloud bg-surface-subtle',
  dark: 'border-transparent bg-surface-dark text-snow',
  deep: 'border-transparent bg-ink-slate text-snow',
}

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

export function Card({
  children,
  className = '',
  padding = true,
  tone = 'snow',
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border transition duration-200',
        tones[tone],
        padding && 'p-7',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
