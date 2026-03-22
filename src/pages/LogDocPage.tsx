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
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Not found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">No log entry matches this URL.</p>
        <Link to="/calendar" className="mt-4 inline-block text-sm font-medium text-violet-600 dark:text-violet-400">
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
