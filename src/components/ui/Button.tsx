import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'pill' | 'neutral'

const variants: Record<Variant, string> = {
  primary:
    'rounded-button bg-obsidian px-4 py-3 text-snow shadow-btn-primary hover:bg-graphite active:scale-[0.98]',
  secondary:
    'rounded-button border border-cloud bg-snow px-4 py-3 text-iron hover:bg-paper',
  ghost: 'rounded-button px-3 py-2 text-steel hover:bg-paper hover:text-obsidian',
  pill: 'rounded-pill border border-iron bg-snow px-5 py-3 text-iron hover:bg-paper',
  neutral: 'rounded-button bg-surface-subtle px-4 py-3 text-graphite hover:bg-cloud/60',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  to?: string
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  type = 'button',
  ...rest
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 text-[14px] font-normal transition duration-200',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
