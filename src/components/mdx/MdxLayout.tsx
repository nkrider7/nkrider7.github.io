import { MDXProvider } from '@mdx-js/react'
import type { ReactNode } from 'react'

const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-violet-600 underline decoration-violet-600/30 underline-offset-2 hover:decoration-violet-600 dark:text-violet-400 dark:decoration-violet-400/30"
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
        <header className="space-y-1 border-b border-gray-200 pb-4 dark:border-white/10">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          {description ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          ) : null}
        </header>
        <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-li:marker:text-violet-500">
          {children}
        </article>
      </div>
    </MDXProvider>
  )
}
