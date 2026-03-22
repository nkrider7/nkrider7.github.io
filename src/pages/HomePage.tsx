import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const skills = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'React Native']

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              Full stack developer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Narendra
            </h1>
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
              I build responsive web and mobile experiences with a focus on clear UX and solid
              engineering — from idea to production.
            </p>
          </div>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Specialized in React, Next.js, and React Native. Based in Aligarh, Uttar Pradesh,
            India. Currently deepening systems skills (including Rust) and documenting learning
            on this site.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/projects" variant="primary">
              View projects
            </Button>
            <Button to="/learning" variant="secondary">
              Learning notes
            </Button>
            <Button
              variant="ghost"
              className="!inline-flex"
              onClick={() => window.open('https://github.com/nkrider7', '_blank', 'noopener,noreferrer')}
            >
              GitHub
            </Button>
          </div>
        </div>
        <Card className="flex max-w-sm flex-col items-center gap-4 p-8 text-center lg:max-w-xs">
          <img
            src="https://avatars.githubusercontent.com/u/75013042?s=200&v=4"
            alt=""
            className="h-28 w-28 rounded-full border-4 border-violet-500/30 object-cover shadow-md"
          />
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Narendra</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio & knowledge base</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="hover:border-violet-300 dark:hover:border-violet-700">
            <h3 className="font-medium text-gray-900 dark:text-white">Learning</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              MDX topics discovered from the content folder — add files, no code changes.
            </p>
            <Button to="/learning" variant="ghost" className="mt-4 !px-0">
              Open learning →
            </Button>
          </Card>
          <Card className="hover:border-violet-300 dark:hover:border-violet-700">
            <h3 className="font-medium text-gray-900 dark:text-white">Projects</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Selected work and repositories worth highlighting.
            </p>
            <Button to="/projects" variant="ghost" className="mt-4 !px-0">
              View projects →
            </Button>
          </Card>
          <Card className="hover:border-violet-300 dark:hover:border-violet-700">
            <h3 className="font-medium text-gray-900 dark:text-white">Calendar</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Logs grouped by date — a lightweight journal from MDX in{' '}
              <code className="rounded bg-gray-100 px-1 dark:bg-surface-dark-raised">content/logs</code>.
            </p>
            <Button to="/calendar" variant="ghost" className="mt-4 !px-0">
              View calendar →
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
