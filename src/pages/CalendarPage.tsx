import { useMemo, useState } from 'react'
import { logsGroupedByDate } from '@/content/registry'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
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
    <div className="space-y-8 pb-8">
      <div className="overflow-hidden rounded-card border border-cloud bg-snow p-7 dark:border-white/10 dark:bg-surface-dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge variant="ember">Timeline</Badge>
            <h1 className="text-heading-sm font-semibold text-obsidian dark:text-snow sm:text-heading">
              Interactive Calendar
            </h1>
            <p className="max-w-2xl text-[15px] text-steel">
              Browse MDX logs by month, jump between days, and open entries from the selected date.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <StatMini number={dates.length} label="Log days" />
            <StatMini number={activeMonthEntries} label="This month" />
            <StatMini
              number={selectedEntries.length}
              label="Selected"
              className="col-span-2 sm:col-span-1"
            />
          </div>
        </div>
      </div>

      {dates.length === 0 ? (
        <Card className="text-center">
          <p className="font-medium text-obsidian dark:text-snow">No log entries yet</p>
          <p className="mt-1 text-[14px] text-steel">
            Add <code>.mdx</code> files under <code>content/logs</code> to light up the calendar.
          </p>
          <Button href={logRequestUrl} variant="primary" className="mt-5">
            Add today&apos;s log on GitHub
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <Card className="overflow-hidden !p-0">
            <div className="flex flex-col gap-4 border-b border-cloud bg-paper/80 p-5 dark:border-white/10 dark:bg-ink-slate/50 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[14px] font-semibold text-obsidian dark:text-snow">
                  {monthLabel(visibleMonth)}
                </p>
                <p className="text-[12px] text-fog">Pick any marked day to view logs</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="secondary" className="!py-2" onClick={() => moveMonth(-1)}>
                  Prev
                </Button>
                <Button type="button" variant="primary" className="!py-2" onClick={jumpToToday}>
                  Today
                </Button>
                <Button type="button" variant="secondary" className="!py-2" onClick={() => moveMonth(1)}>
                  Next
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-cloud p-px dark:bg-white/10">
              {weekdayLabels.map((day) => (
                <div
                  key={day}
                  className="bg-snow px-2 py-3 text-center text-[11px] font-medium uppercase tracking-wide text-fog dark:bg-surface-dark"
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
                    className={`group relative min-h-24 bg-snow p-2 text-left transition hover:z-10 hover:bg-paper focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian dark:bg-surface-dark dark:hover:bg-ink-slate sm:min-h-28 ${
                      !day.isCurrentMonth ? 'text-ash' : ''
                    } ${isSelected ? 'z-10 bg-paper ring-2 ring-obsidian dark:bg-ink-slate' : ''}`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-semibold ${
                        day.isToday
                          ? 'bg-obsidian text-snow'
                          : day.isCurrentMonth
                            ? 'text-graphite dark:text-cloud'
                            : 'text-ash'
                      }`}
                    >
                      {day.date.getDate()}
                    </span>

                    {hasEntries ? (
                      <div className="mt-3 space-y-1">
                        <Badge variant="filled">
                          {entries.length} log{entries.length > 1 ? 's' : ''}
                        </Badge>
                        <div className="flex gap-1">
                          {entries.slice(0, 3).map((entry) => (
                            <span
                              key={entry.slug}
                              className="h-1.5 w-1.5 rounded-full bg-ember"
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
            <Card tone="deep" className="!p-6">
              <p className="text-[13px] text-ash">Selected date</p>
              <h2 className="mt-2 text-[28px] font-semibold leading-tight text-snow">
                {dateFromKey(selectedDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <p className="mt-2 text-[14px] text-mist">
                {selectedEntries.length > 0
                  ? `${selectedEntries.length} log entry found for this day.`
                  : 'No log entry on this day yet.'}
              </p>
              <Button href={logRequestUrl} variant="pill" className="mt-5 w-full !border-snow/20 !bg-snow !text-obsidian">
                Add log request
              </Button>
              <p className="mt-3 text-[12px] text-ash">
                Opens GitHub with a prefilled request for{' '}
                <code className="text-mist">content/logs/{selectedDate}.mdx</code>.
              </p>
            </Card>

            <div className="space-y-3">
              {selectedEntries.length > 0 ? (
                selectedEntries.map((entry) => (
                  <Link
                    key={entry.slug}
                    to={`/logs/${entry.slug}`}
                    className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  >
                    <Card className="transition duration-300 group-hover:-translate-y-0.5 group-hover:border-mist">
                      <p className="font-semibold text-obsidian dark:text-snow">{entry.meta.title}</p>
                      {entry.meta.description ? (
                        <p className="mt-2 text-[14px] text-steel">{entry.meta.description}</p>
                      ) : null}
                      <p className="mt-4 text-[13px] font-medium text-obsidian transition group-hover:translate-x-0.5 dark:text-snow">
                        Open log →
                      </p>
                    </Card>
                  </Link>
                ))
              ) : (
                <Card className="border-dashed text-[14px] text-steel">
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

function StatMini({
  number,
  label,
  className = '',
}: {
  number: number
  label: string
  className?: string
}) {
  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className="text-[32px] font-semibold leading-none text-obsidian dark:text-snow">
        {number}
      </span>
      <span className="text-[13px] text-steel">{label}</span>
    </div>
  )
}
