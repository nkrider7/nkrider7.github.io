import { MdxLayout } from '@/components/mdx/MdxLayout'
import { Card } from '@/components/ui/Card'
import { getLearningBySlug } from '@/content/registry'
import { Link, useParams } from 'react-router-dom'

export function LearningDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getLearningBySlug(slug) : undefined

  if (!entry) {
    return (
      <Card>
        <h1 className="text-xl font-semibold text-obsidian dark:text-snow">Not found</h1>
        <p className="mt-2 text-steel">No learning note matches this URL.</p>
        <Link
          to="/learning"
          className="mt-4 inline-block text-[14px] font-medium text-obsidian dark:text-snow"
        >
          ← Back to learning
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
