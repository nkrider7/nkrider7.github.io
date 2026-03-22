import { logsGroupedByDate } from '@/content/registry'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

export function CalendarPage() {
  const grouped = logsGroupedByDate()
  const dates = [...grouped.keys()]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Calendar</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          MDX logs from <code className="rounded bg-gray-100 px-1 dark:bg-surface-dark-raised">content/logs</code>, grouped by
          date.
        </p>
      </div>

      {dates.length === 0 ? (
        <Card>
          <p className="text-gray-600 dark:text-gray-400">No log entries yet. Add <code>.mdx</code> files under content/logs.</p>
        </Card>
      ) : (
        <div className="relative space-y-10 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gray-200 dark:before:bg-white/15">
          {dates.map((date) => {
            const entries = grouped.get(date) ?? []
            return (
              <section key={date} className="relative">
                <span
                  className="absolute -left-6 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-violet-500 bg-white dark:bg-surface-dark-raised"
                  aria-hidden
                />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  {date}
                </h2>
                <ul className="mt-3 space-y-3">
                  {entries.map((entry) => (
                    <li key={entry.slug}>
                      <Link to={`/logs/${entry.slug}`}>
                        <Card className="transition hover:border-violet-400/60 dark:hover:border-violet-600/50">
                          <p className="font-medium text-gray-900 dark:text-white">{entry.meta.title}</p>
                          {entry.meta.description ? (
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{entry.meta.description}</p>
                          ) : null}
                          <p className="mt-2 text-xs text-violet-600 dark:text-violet-400">Open log →</p>
                        </Card>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
