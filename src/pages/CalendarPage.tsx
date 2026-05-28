import { useMemo, useState } from 'react'
import { logsGroupedByDate } from '@/content/registry'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const githubIssueUrl = 'https://github.com/nkrider7/nkrider7.github.io/issues/new'

type CalendarDay = {
  date: Date
  key: string
  isToday: boolean
  isCurrentMonth: boolean
}

function dateToKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function dateFromKey(key: string) {
  const [year, month, day] = key.split('-').map(Number)

  return new Date(year, month - 1, day)
}

function monthLabel(date: Date) {
  return date.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })
}

function buildLogRequestUrl(dateKey: string) {
  const readableDate = dateFromKey(dateKey).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const body = [
    `page-path: content/logs/${dateKey}.mdx`,
    `page-title: Daily Log - ${readableDate}`,
    '',
    '<!-- content -->',
    `Logged notes for ${readableDate}.`,
    '',
    '## What happened',
    '',
    '- ',
    '',
    '## Next step',
    '',
    '- ',
    '<!-- /content -->',
  ].join('\n')
  const params = new URLSearchParams({
    labels: 'new-page',
    title: `New page request: Daily Log - ${readableDate}`,
    body,
  })

  return `${githubIssueUrl}?${params.toString()}`
}

function buildCalendarDays(monthDate: Date): CalendarDay[] {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const firstVisibleDay = new Date(firstDay)
  firstVisibleDay.setDate(firstDay.getDate() - firstDay.getDay())

  const todayKey = dateToKey(new Date())

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstVisibleDay)
    date.setDate(firstVisibleDay.getDate() + index)
    const key = dateToKey(date)

    return {
      date,
      key,
      isToday: key === todayKey,
      isCurrentMonth: date.getMonth() === month,
    }
  })
}

export function CalendarPage() {
  const grouped = logsGroupedByDate()
  const dates = [...grouped.keys()]
  const firstLogDate = dates[0] ? dateFromKey(dates[0]) : new Date()
  const today = new Date()
  const todayKey = dateToKey(today)
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(firstLogDate.getFullYear(), firstLogDate.getMonth(), 1),
  )
  const [selectedDate, setSelectedDate] = useState(dates[0] ?? todayKey)

  const calendarDays = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth])
  const selectedEntries = grouped.get(selectedDate) ?? []
  const logRequestUrl = buildLogRequestUrl(selectedDate)
  const activeMonthEntries = calendarDays.reduce((count, day) => {
    if (!day.isCurrentMonth) {
      return count
    }

    return count + (grouped.get(day.key)?.length ?? 0)
  }, 0)

  const moveMonth = (step: number) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + step, 1))
  }

  const jumpToToday = () => {
    setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1))
    setSelectedDate(todayKey)
  }

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-6 shadow-sm dark:border-violet-500/20 dark:from-violet-950/40 dark:via-surface-dark dark:to-fuchsia-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              Learning timeline
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Interactive Calendar
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              Browse MDX logs by month, jump between days, and open entries from the selected
              date.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{dates.length}</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Log days</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {activeMonthEntries}
              </p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">This month</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:col-span-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedEntries.length}
              </p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Selected</p>
            </div>
          </div>
        </div>
      </div>

      {dates.length === 0 ? (
        <Card className="text-center">
          <p className="font-medium text-gray-900 dark:text-white">No log entries yet</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Add <code>.mdx</code> files under <code>content/logs</code> to light up the calendar.
          </p>
          <a
            href={logRequestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            Add today&apos;s log on GitHub
          </a>
        </Card>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <Card className="overflow-hidden p-0">
            <div className="flex flex-col gap-4 border-b border-gray-200/80 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-surface-dark sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {monthLabel(visibleMonth)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Pick any glowing day to view logs
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => moveMonth(-1)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-surface-dark-raised dark:text-gray-200 dark:hover:border-violet-500 dark:hover:text-violet-300"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={jumpToToday}
                  className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => moveMonth(1)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-surface-dark-raised dark:text-gray-200 dark:hover:border-violet-500 dark:hover:text-violet-300"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-200/80 p-px dark:bg-white/10">
              {weekdayLabels.map((day) => (
                <div
                  key={day}
                  className="bg-white px-2 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-surface-dark-raised dark:text-gray-400"
                >
                  {day}
                </div>
              ))}

              {calendarDays.map((day) => {
                const entries = grouped.get(day.key) ?? []
                const hasEntries = entries.length > 0
                const isSelected = selectedDate === day.key

                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => setSelectedDate(day.key)}
                    aria-label={`Select ${day.key}`}
                    className={`group relative min-h-24 bg-white p-2 text-left transition hover:z-10 hover:scale-[1.02] hover:bg-violet-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-surface-dark-raised dark:hover:bg-violet-950/30 sm:min-h-28 ${
                      !day.isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : ''
                    } ${isSelected ? 'z-10 bg-violet-50 ring-2 ring-violet-500 dark:bg-violet-950/40' : ''}`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        day.isToday
                          ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                          : day.isCurrentMonth
                            ? 'text-gray-800 dark:text-gray-100'
                            : 'text-gray-400 dark:text-gray-600'
                      }`}
                    >
                      {day.date.getDate()}
                    </span>

                    {hasEntries ? (
                      <div className="mt-3 space-y-1">
                        <span className="inline-flex rounded-full bg-violet-100 px-2 py-0.5 text-[11px] font-semibold text-violet-700 dark:bg-violet-950/70 dark:text-violet-200">
                          {entries.length} log{entries.length > 1 ? 's' : ''}
                        </span>
                        <div className="flex gap-1">
                          {entries.slice(0, 3).map((entry) => (
                            <span
                              key={entry.slug}
                              className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.75)]"
                            />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </button>
                )
              })}
            </div>
          </Card>

          <aside className="space-y-4">
            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl" />
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                Selected date
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {dateFromKey(selectedDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {selectedEntries.length > 0
                  ? `${selectedEntries.length} log entry found for this day.`
                  : 'No log entry on this day yet.'}
              </p>
              <a
                href={logRequestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Add log request
              </a>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Opens GitHub with a prefilled request for{' '}
                <code>content/logs/{selectedDate}.mdx</code>.
              </p>
            </Card>

            <div className="space-y-3">
              {selectedEntries.length > 0 ? (
                selectedEntries.map((entry) => (
                  <Link
                    key={entry.slug}
                    to={`/logs/${entry.slug}`}
                    className="group block rounded-xl outline-none ring-violet-500 focus-visible:ring-2"
                  >
                    <Card className="transition hover:-translate-y-0.5 hover:border-violet-400/60 hover:shadow-md dark:hover:border-violet-600/50">
                      <p className="font-semibold text-gray-900 transition group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
                        {entry.meta.title}
                      </p>
                      {entry.meta.description ? (
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {entry.meta.description}
                        </p>
                      ) : null}
                      <p className="mt-4 text-xs font-semibold text-violet-600 dark:text-violet-400">
                        Open log →
                      </p>
                    </Card>
                  </Link>
                ))
              ) : (
                <Card className="border-dashed text-sm text-gray-600 dark:text-gray-400">
                  Select a highlighted day, or add a new MDX log for this date.
                </Card>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
