import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-foreground shadow-sm hover:opacity-90 active:opacity-100',
  secondary:
    'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-white/15 dark:bg-surface-dark-raised dark:text-gray-100 dark:hover:bg-white/10',
  ghost:
    'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  type = 'button',
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
