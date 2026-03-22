import { Card } from '@/components/ui/Card'
import { favoriteSites } from '@/data/favoriteSites'

export function FavoritesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Fav Sites</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Bookmarks and references. Data lives in{' '}
          <code className="rounded bg-gray-100 px-1 dark:bg-surface-dark-raised">src/data/favoriteSites.ts</code>.
        </p>
      </div>
      <ul className="space-y-3">
        {favoriteSites.map((site) => (
          <li key={site.id}>
            <Card className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between" padding>
              <div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-600 hover:underline dark:text-violet-400"
                >
                  {site.title}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">{site.description}</p>
              </div>
              <span className="truncate text-xs text-gray-400">{site.url}</span>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
