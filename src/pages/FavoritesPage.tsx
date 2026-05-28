import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/Card'
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
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-violet-200/70 bg-gradient-to-br from-violet-50 via-white to-white p-6 shadow-sm dark:border-violet-500/20 dark:from-violet-950/30 dark:via-surface-dark dark:to-surface-dark-raised">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              Curated web bookmarks
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              My Fav Sites
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              Quick references, docs, and tools collected in one place. Switch views or search
              by title, description, or domain.
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/70 p-4 text-sm shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-gray-900 dark:text-white">{favoriteSites.length} sites</p>
            <p className="text-gray-500 dark:text-gray-400">Ready when you need them</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-surface-dark-raised sm:flex-row sm:items-center sm:justify-between">
        <label className="relative flex-1">
          <span className="sr-only">Search favorite sites</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search favorite sites..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-surface-dark dark:text-white dark:focus:border-violet-500 dark:focus:bg-surface-dark-raised"
          />
        </label>

        <div className="inline-flex rounded-xl bg-gray-100 p-1 dark:bg-surface-dark">
          {(['grid', 'list'] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              aria-pressed={viewMode === mode}
              className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
                viewMode === mode
                  ? 'bg-white text-violet-700 shadow-sm dark:bg-surface-dark-raised dark:text-violet-300'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
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
                  className="group block rounded-xl outline-none ring-violet-500 focus-visible:ring-2"
                >
                  <Card
                    className={`h-full transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/70 hover:shadow-md dark:hover:border-violet-500/60 ${
                      isGrid
                        ? 'flex min-h-52 flex-col justify-between'
                        : 'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'
                    }`}
                  >
                    <div className={isGrid ? 'space-y-4' : 'space-y-2'}>
                      <div className="flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-base font-semibold text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-950/70 dark:text-violet-200">
                          {site.title.slice(0, 1)}
                        </span>
                        <div>
                          <h2 className="font-semibold text-gray-900 transition group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
                            {site.title}
                          </h2>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {site.description}
                          </p>
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
                      <span className="max-w-full truncate rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-surface-dark dark:text-gray-400">
                        {domain}
                      </span>
                      <span className="text-xs font-semibold text-violet-600 transition group-hover:translate-x-0.5 dark:text-violet-400">
                        Visit site
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
          <p className="font-medium text-gray-900 dark:text-white">No favorite sites found</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Try another search term or clear the search box.
          </p>
        </Card>
      )}
    </div>
  )
}
