import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { favoriteSites } from '@/data/favoriteSites'

type ViewMode = 'grid' | 'list'

function getSiteDomain(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

export function FavoritesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [query, setQuery] = useState('')

  const filteredSites = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return favoriteSites
    }

    return favoriteSites.filter((site) => {
      const domain = getSiteDomain(site.url)

      return [site.title, site.description, domain].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      )
    })
  }, [query])

  const isGrid = viewMode === 'grid'

  return (
    <div className="space-y-8 pb-8">
      <div className="overflow-hidden rounded-card border border-cloud bg-snow p-7 dark:border-white/10 dark:bg-surface-dark">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge variant="ember">Bookmarks</Badge>
            <h1 className="text-heading-sm font-semibold text-obsidian dark:text-snow sm:text-heading">
              My Fav Sites
            </h1>
            <p className="max-w-2xl text-[15px] text-steel">
              Quick references, docs, and tools. Switch views or search by title, description, or
              domain.
            </p>
          </div>

          <div className="flex items-baseline gap-3 border-t border-cloud pt-4 dark:border-white/10 lg:border-0 lg:pt-0">
            <span className="text-[40px] font-semibold leading-none text-obsidian dark:text-snow">
              {favoriteSites.length}
            </span>
            <span className="text-[14px] text-steel">sites ready</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-card border border-cloud bg-snow p-3 dark:border-white/10 dark:bg-surface-dark sm:flex-row sm:items-center sm:justify-between">
        <label className="relative flex-1">
          <span className="sr-only">Search favorite sites</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search favorite sites..."
            className="w-full rounded-input border border-cloud bg-paper px-4 py-3 text-[14px] text-graphite outline-none transition placeholder:text-ash focus:border-mist focus:bg-snow dark:border-white/10 dark:bg-ink-slate dark:text-snow dark:focus:bg-surface-dark"
          />
        </label>

        <div className="inline-flex rounded-input bg-paper p-1 dark:bg-ink-slate">
          {(['grid', 'list'] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              aria-pressed={viewMode === mode}
              className={`rounded-[10px] px-4 py-2 text-[14px] font-medium capitalize transition ${
                viewMode === mode
                  ? 'bg-obsidian text-snow shadow-btn-primary'
                  : 'text-steel hover:text-obsidian dark:hover:text-snow'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {filteredSites.length > 0 ? (
        <ul className={isGrid ? 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
          {filteredSites.map((site) => {
            const domain = getSiteDomain(site.url)

            return (
              <li key={site.id}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <Card
                    className={`h-full transition duration-300 group-hover:-translate-y-0.5 group-hover:border-mist ${
                      isGrid
                        ? 'flex min-h-52 flex-col justify-between'
                        : 'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'
                    }`}
                  >
                    <div className={isGrid ? 'space-y-4' : 'space-y-2'}>
                      <div className="flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-paper text-[15px] font-semibold text-obsidian transition group-hover:bg-obsidian group-hover:text-snow dark:bg-ink-slate dark:text-snow">
                          {site.title.slice(0, 1)}
                        </span>
                        <div>
                          <h2 className="font-semibold text-obsidian dark:text-snow">{site.title}</h2>
                          <p className="mt-1 text-[14px] text-steel">{site.description}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex gap-3 ${
                        isGrid
                          ? 'mt-6 items-center justify-between'
                          : 'sm:min-w-52 sm:flex-col sm:items-end sm:gap-2'
                      }`}
                    >
                      <span className="max-w-full truncate rounded-badge border border-cloud px-2 py-1 text-[12px] text-fog dark:border-white/10">
                        {domain}
                      </span>
                      <span className="text-[13px] font-medium text-obsidian transition group-hover:translate-x-0.5 dark:text-snow">
                        Visit →
                      </span>
                    </div>
                  </Card>
                </a>
              </li>
            )
          })}
        </ul>
      ) : (
        <Card className="text-center">
          <p className="font-medium text-obsidian dark:text-snow">No favorite sites found</p>
          <p className="mt-1 text-[14px] text-steel">
            Try another search term or clear the search box.
          </p>
        </Card>
      )}
    </div>
  )
}
