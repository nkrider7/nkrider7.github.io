import { MdxLayout } from '@/components/mdx/MdxLayout'
import { Card } from '@/components/ui/Card'
import { getLogBySlug } from '@/content/registry'
import { Link, useParams } from 'react-router-dom'

export function LogDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getLogBySlug(slug) : undefined

  if (!entry) {
    return (
      <Card>
        <h1 className="text-xl font-semibold text-obsidian dark:text-snow">Not found</h1>
        <p className="mt-2 text-steel">No log entry matches this URL.</p>
        <Link
          to="/calendar"
          className="mt-4 inline-block text-[14px] font-medium text-obsidian dark:text-snow"
        >
          ← Back to calendar
        </Link>
      </Card>
    )
  }

  const { Component, meta } = entry

  return (
    <Card>
      <MdxLayout title={meta.title} description={meta.description}>
        <Component />
      </MdxLayout>
    </Card>
  )
}
