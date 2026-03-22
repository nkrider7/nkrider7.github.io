import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  padding?: boolean
} & HTMLAttributes<HTMLDivElement>

export function Card({
  children,
  className = '',
  padding = true,
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-surface-dark-raised ${padding ? 'p-6' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
