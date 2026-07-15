import { MDXProvider } from '@mdx-js/react'
import type { ReactNode } from 'react'

const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-obsidian underline decoration-cloud underline-offset-2 transition hover:decoration-ember dark:text-snow dark:decoration-iron"
      {...props}
    />
  ),
}

type MdxLayoutProps = {
  title: string
  description?: string
  children: ReactNode
}

export function MdxLayout({ title, description, children }: MdxLayoutProps) {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="space-y-6">
        <header className="space-y-2 border-b border-cloud pb-5 dark:border-white/10">
          <h1 className="text-heading-sm font-semibold tracking-tight text-obsidian dark:text-snow">
            {title}
          </h1>
          {description ? <p className="text-[14px] text-steel">{description}</p> : null}
        </header>
        <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-obsidian prose-li:marker:text-ember dark:prose-a:text-snow">
          {children}
        </article>
      </div>
    </MDXProvider>
  )
}
