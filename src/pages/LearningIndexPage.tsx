import { learningEntries } from '@/content/registry'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

export function LearningIndexPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Learning</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Notes are loaded from <code className="rounded bg-gray-100 px-1 dark:bg-surface-dark-raised">content/learning/*.mdx</code>.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {learningEntries.map((entry) => (
          <Link key={entry.slug} to={`/learning/${entry.slug}`} className="group block">
            <Card className="h-full transition group-hover:border-violet-400/60 dark:group-hover:border-violet-600/50">
              <h2 className="font-medium text-gray-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                {entry.meta.title}
              </h2>
              {entry.meta.description ? (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{entry.meta.description}</p>
              ) : null}
              <p className="mt-3 text-xs font-medium text-violet-600 dark:text-violet-400">Read →</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
