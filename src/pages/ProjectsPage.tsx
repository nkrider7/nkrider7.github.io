import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { projects } from '@/data/projects'

export function ProjectsPage() {
  return (
    <div className="space-y-10 pb-8">
      <div className="space-y-3">
        <Badge variant="ember">Work</Badge>
        <h1 className="text-heading-sm font-semibold text-obsidian dark:text-snow sm:text-heading">
          My Projects
        </h1>
        <p className="max-w-2xl text-[15px] text-steel">
          A snapshot of work and repos. Edit the list in{' '}
          <code className="rounded-badge bg-paper px-1.5 py-0.5 text-[13px] dark:bg-ink-slate">
            src/data/projects.ts
          </code>
          .
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Card className="h-full transition duration-300 group-hover:-translate-y-0.5 group-hover:border-mist">
              <h2 className="text-subheading font-semibold text-obsidian dark:text-snow">
                {p.title}
              </h2>
              <p className="mt-2 text-[14px] text-steel">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="mt-6 text-[13px] font-medium text-obsidian transition group-hover:translate-x-0.5 dark:text-snow">
                Open link →
              </p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
