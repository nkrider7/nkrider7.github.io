import type { ReactNode } from 'react'

type BadgeVariant = 'outline' | 'filled' | 'ember'

type BadgeProps = {
  children: ReactNode
  className?: string
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  outline: 'border border-cloud bg-transparent text-graphite',
  filled: 'border border-transparent bg-iron text-[#fafafa]',
  ember: 'border border-transparent bg-ember text-snow',
}

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

export function Badge({ children, className = '', variant = 'outline' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-badge px-2 py-1 text-[12px] font-normal leading-none',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
