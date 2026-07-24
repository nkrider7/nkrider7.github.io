import { AboutExperienceSection } from '@/components/home/AboutExperienceSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { StatsHighlightBar } from '@/components/home/StatsHighlightBar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

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

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/nkrider7',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/narendra-nishad/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/narendra_builds',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.717-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.instagram.com/nkriderking/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12.02a31.247 31.247 0 0 0 .502 5.834 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12.02a31.247 31.247 0 0 0-.502-5.834zM9.545 15.568V8.472l6.273 3.548-6.273 3.548z" />
      </svg>
    ),
  },
]

export function HomePage() {
  return (
    <div className="space-y-10 pb-4">
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-[28px] border border-cloud/80 bg-snow px-5 py-8 sm:px-8 sm:py-10 lg:rounded-[36px] lg:px-10 lg:py-8 xl:px-12 xl:py-10 dark:border-white/10 dark:bg-surface-dark">
        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(9,9,11,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(9,9,11,0.045) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 15% 20%, black 20%, transparent 70%), radial-gradient(ellipse 50% 50% at 90% 10%, black 10%, transparent 55%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,90,0,0.12),transparent_70%)] blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(254,69,226,0.1),transparent_70%)] blur-2xl"
          aria-hidden
        />

        {/* Corner frames */}
        <span
          className="pointer-events-none absolute left-4 top-4 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-mist/80 sm:left-6 sm:top-6 sm:h-10 sm:w-10 dark:border-white/15"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-mist/80 sm:right-6 sm:top-6 sm:h-10 sm:w-10 dark:border-white/15"
          aria-hidden
        />

        {/* Pixel accents */}
        <span className="pointer-events-none absolute left-[46%] top-8 hidden h-2 w-2 bg-mist sm:block dark:bg-white/20" aria-hidden />
        <span className="pointer-events-none absolute bottom-16 left-[38%] hidden h-1.5 w-1.5 bg-ash/70 sm:block" aria-hidden />
        <span className="pointer-events-none absolute right-[42%] top-20 hidden text-[18px] leading-none text-mist dark:text-white/25 sm:block" aria-hidden>
          +
        </span>
        <span className="pointer-events-none absolute bottom-24 right-[48%] hidden text-[14px] leading-none text-mist dark:text-white/20 sm:block" aria-hidden>
          +
        </span>

        <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-4 lg:gap-8 xl:gap-10">
          {/* Copy */}
          <div className="animate-fade-up z-10  text-center md:text-left space-y-5 sm:space-y-6 md:pr-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb4a2] bg-[#fff5f2] px-3 py-1.5 dark:border-ember/40 dark:bg-ember/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.14em] text-[#e11d48] dark:text-[#fb7185]">
                SOFTWARE DEVELOPER
              </span>
            </div>

            <h1 className="max-w-[15ch] text-[clamp(2.1rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-obsidian dark:text-snow">
              Building Digital Experiences that Make an{' '}
              <span className="relative inline-block origin-bottom-left -rotate-[3deg] font-marker text-[1.18em] font-normal leading-none text-[#ef4444]">
                Impact.
                <svg
                  className="absolute -bottom-1 left-[-4%] w-[108%] text-[#ef4444]"
                  viewBox="0 0 120 8"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 5.5c28-3.5 58-4 116-2.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-md text-[10px] leading-relaxed text-steel sm:text-[14px] dark:text-ash">
              I craft fast, scalable, and delightful applications with modern technologies.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <Button to="/projects" variant="primary" className="!rounded-full !px-5 !py-3.5 text-[14px] font-medium">
                Explore My Work
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 15 15 5M8 5h7v7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button
                href="https://www.linkedin.com/in/narendra-nishad/"
                variant="secondary"
                className="!rounded-full !border-mist !px-5 !py-3.5 text-[14px] font-medium dark:!border-white/15"
              >
                Download CV
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 17h12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 justify-center md:justify-start">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-fog">FIND ME ON</span>
              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cloud text-obsidian transition hover:-translate-y-0.5 hover:border-mist hover:bg-paper dark:border-white/10 dark:text-snow dark:hover:bg-white/5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className=" relative mx-auto w-full max-w-[560px]  md:max-w-none md:-mr-2 lg:-mr-4">
            <div
              className="pointer-events-none absolute left-1/2 top-[18%] h-[55%] w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.28),transparent_68%)] blur-2xl t"
              aria-hidden
            />

            <div className="relative ">
              <img
                src="/luffyhero.png"
                alt="Gear 5 character illustration"
                width={1536}
                height={1024}
                className="relative z-10 mx-auto h-auto w-full select-none object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      <StatsHighlightBar />

      <AboutExperienceSection />

      <FeaturedProjectsSection />

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
