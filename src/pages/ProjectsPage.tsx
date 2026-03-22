import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { projects } from '@/data/projects'

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Projects</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          A snapshot of work and repos. Edit the list in{' '}
          <code className="rounded bg-gray-100 px-1 dark:bg-surface-dark-raised">src/data/projects.ts</code>.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl outline-none ring-violet-500 focus-visible:ring-2"
          >
            <Card className="h-full transition hover:border-violet-400/60 dark:hover:border-violet-600/50">
              <h2 className="font-medium text-gray-900 dark:text-white">{p.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-violet-600 dark:text-violet-400">Open link →</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
