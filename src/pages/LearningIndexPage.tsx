import { learningEntries } from '@/content/registry'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

export function LearningIndexPage() {
  return (
    <div className="space-y-10 pb-8">
      <div className="space-y-3">
        <Badge variant="ember">Notes</Badge>
        <h1 className="text-heading-sm font-semibold text-obsidian dark:text-snow sm:text-heading">
          My Learning
        </h1>
        <p className="max-w-2xl text-[15px] text-steel">
          Notes are loaded from{' '}
          <code className="rounded-badge bg-paper px-1.5 py-0.5 text-[13px] dark:bg-ink-slate">
            content/learning/*.mdx
          </code>
          .
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {learningEntries.map((entry) => (
          <Link
            key={entry.slug}
            to={`/learning/${entry.slug}`}
            className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Card className="h-full transition duration-300 group-hover:-translate-y-0.5 group-hover:border-mist">
              <h2 className="text-subheading font-semibold text-obsidian transition group-hover:text-graphite dark:text-snow">
                {entry.meta.title}
              </h2>
              {entry.meta.description ? (
                <p className="mt-2 text-[14px] text-steel">{entry.meta.description}</p>
              ) : null}
              <p className="mt-6 text-[13px] font-medium text-obsidian transition group-hover:translate-x-0.5 dark:text-snow">
                Read →
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
