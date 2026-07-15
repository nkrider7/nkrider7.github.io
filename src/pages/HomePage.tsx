import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { learningEntries } from '@/content/registry'
import { projects } from '@/data/projects'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const keywords = ['React.js', 'Next.js', 'TypeScript', 'React Native', 'solid UX']

const focusItems = [
  'Ship production-ready React & Next.js apps',
  'Design interfaces with clarity and restraint',
  'Document learning in public with MDX notes',
  'Deepen systems craft — currently exploring Rust',
]

const explore = [
  {
    title: 'Learning',
    description: 'MDX topics from the content folder — add a file, no code changes.',
    to: '/learning',
    tags: ['Notes', 'MDX'],
  },
  {
    title: 'Projects',
    description: 'Selected work and repositories worth highlighting.',
    to: '/projects',
    tags: ['Build', 'Ships'],
  },
  {
    title: 'Calendar',
    description: 'Daily logs grouped by date — a lightweight journal.',
    to: '/calendar',
    tags: ['Logs', 'Journal'],
  },
]

export function HomePage() {
  const [keywordIndex, setKeywordIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeaving(true)
      window.setTimeout(() => {
        setKeywordIndex((i) => (i + 1) % keywords.length)
        setLeaving(false)
      }, 280)
    }, 2600)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="space-y-20 pb-8">
      {/* Hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="animate-fade-up space-y-7">
          <Badge variant="ember">Full stack developer</Badge>
          <h1 className="max-w-2xl text-balance text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.12] text-obsidian dark:text-snow">
            Narendra builds{' '}
            <span className="relative inline-flex h-[1.15em] overflow-hidden align-bottom text-steel">
              <span
                key={keywordIndex}
                className={leaving ? 'animate-keyword-out' : 'animate-keyword-in'}
              >
                {keywords[keywordIndex]}
              </span>
            </span>
          </h1>
          <p className="max-w-xl text-body text-steel">
            Responsive web and mobile experiences with clear UX and solid engineering — from idea
            to production. Based in Aligarh, Uttar Pradesh.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/projects" variant="primary">
              View projects
            </Button>
            <Button to="/learning" variant="neutral">
              Learning notes
            </Button>
            <Button href="https://github.com/nkrider7" variant="ghost">
              GitHub →
            </Button>
          </div>
        </div>

        <Card className="animate-fade-up relative overflow-hidden [animation-delay:120ms]" tone="snow">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-80"
            style={{ background: 'radial-gradient(circle, #fe45e2 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-5 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/75013042?s=200&v=4"
              alt="Narendra"
              className="h-28 w-28 rounded-[28px] border border-cloud object-cover"
            />
            <div>
              <p className="text-subheading font-semibold text-obsidian dark:text-snow">Narendra</p>
              <p className="mt-1 text-[14px] text-fog">Portfolio & knowledge base</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'RN'].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Stats */}
      <section className="grid gap-6 sm:grid-cols-3">
        <Stat number={`${projects.length}+`} label="Projects catalogued" />
        <Stat number={`${learningEntries.length}`} label="Learning topics" />
        <Stat number="IN" label="Aligarh · building daily" />
      </section>

      {/* Explore cards */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-heading-sm font-semibold text-obsidian dark:text-snow">Explore</h2>
            <p className="mt-1 text-[14px] text-fog">One space for notes, work, and logs.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {explore.map((item, i) => (
            <Link
              key={item.title}
              to={item.to}
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Card className="h-full transition duration-300 group-hover:-translate-y-0.5 group-hover:border-mist">
                <div className="mb-10 flex h-36 items-end rounded-[24px] bg-gradient-to-br from-paper via-cloud/40 to-mist/30 p-5 dark:from-ink-slate dark:via-surface-dark dark:to-obsidian">
                  <span className="text-[48px] font-semibold leading-none text-obsidian/10 transition group-hover:text-obsidian/20 dark:text-snow/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-subheading font-semibold text-obsidian dark:text-snow">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] text-steel">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <p className="mt-6 text-[13px] font-medium text-obsidian transition group-hover:translate-x-0.5 dark:text-snow">
                  Open →
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Dark feature + skills */}
      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card tone="deep" className="!p-8">
          <h2 className="text-heading-sm font-bold text-snow">What I focus on</h2>
          <ul className="mt-8 space-y-4">
            {focusItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-subheading font-medium text-snow">
                <span className="mt-1.5 text-ash" aria-hidden>
                  →
                </span>
                <span className="text-[18px] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col justify-between !p-8">
          <div>
            <Badge variant="filled">Stack</Badge>
            <h2 className="mt-4 text-heading-sm font-semibold text-obsidian dark:text-snow">
              Tools that ship
            </h2>
            <p className="mt-2 text-[14px] text-steel">
              Specialized in React, Next.js, and React Native — documenting the journey on this
              site.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              'React',
              'TypeScript',
              'Next.js',
              'Tailwind',
              'React Native',
              'Vite',
              'MDX',
              'Node',
            ].map((s) => (
              <Badge key={s} variant={s === 'TypeScript' ? 'ember' : 'outline'}>
                {s}
              </Badge>
            ))}
          </div>
          <Button to="/favorites" variant="neutral" className="mt-8 self-start">
            Fav tools & sites
          </Button>
        </Card>
      </section>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-cloud pt-6 dark:border-white/10">
      <span className="text-[40px] font-semibold leading-none text-obsidian dark:text-snow sm:text-[56px]">
        {number}
      </span>
      <span className="text-[14px] text-steel">{label}</span>
    </div>
  )
}
