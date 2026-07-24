import { Link } from 'react-router-dom'

const traits = ['Full Stack Developer', 'Problem Solver', 'Product Builder'] as const

const experiences = [
  // {
  //   title: 'Fishman',
  //   role: 'Self Project',
  //   tag: 'Building',
  //   date: 'Jul 2024 – Present',
  //   description:
  //     'Building next-gen API Client for developers. Focused on speed, UX and Git-native workflows.',
  //   avatar: '/fishman.png',
  //   href: 'https://github.com/nkrider7',
  // },
  {
    title: 'Broocode',
    role: 'Self Project',
    tag: 'Builder',
    date: 'Jan 2025 – Present',
    description: 'Building modern web experiences and solutions for brands & startups.',
    avatar: '/broocodecircle.png',
    href: 'https://github.com/nkrider7',
  },
  {
    title: 'KitFitX',
    role: 'Full Stack Developer',
    tag: null,
    date: 'Sep 2025 – Mar 2026 (7 mo)',
    description: "Women's health & fitness tracking app with AI-powered features.",
    avatar: '/kitfitxcircle.png',
    href: 'https://github.com/nkrider7',
  },
  {
    title: 'Boomzo',
    role: 'Full Stack Developer',
    tag: null,
    date: '2024 – 2025',
    description: 'Product engineering for growth-focused web and mobile experiences.',
    avatar: '/boomzocircle.png',
    href: 'https://github.com/nkrider7',
  },
] as const

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="#22c55e" />
      <path
        d="M4.6 8.2 6.9 10.4 11.4 5.6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AboutExperienceSection() {
  return (
    <section className="grid items-start gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-8 xl:gap-14">
      {/* About Me */}
      <div className="min-w-0 space-y-5 sm:space-y-6">
        <h2 className="flex items-center gap-2 text-[22px] font-bold tracking-tight text-obsidian dark:text-snow sm:text-[24px]">
          <span className="select-none font-semibold text-[#ef4444]" aria-hidden>
            //
          </span>
          About Me
        </h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-5 xl:gap-7">
          <div className="min-w-0 flex-1 space-y-5">
            <div className="space-y-3">
              <p className="text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-obsidian dark:text-snow">
                Hey, I&apos;m <span className="text-[#ff5a00]">Narendra!</span>
              </p>
              <p className="max-w-md text-[15px] leading-relaxed text-steel dark:text-ash">
                A passionate{' '}
                <span className="font-semibold text-[#9a3412] dark:text-[#fdba74]">Software Developer</span> who
                loves building meaningful products, open-sourcing ideas, and solving real-world problems with
                code.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex items-center gap-2 rounded-full border border-cloud bg-snow px-3.5 py-2 text-[13px] font-medium text-obsidian shadow-[0_1px_0_rgba(0,0,0,0.02)] dark:border-white/10 dark:bg-surface-dark-raised dark:text-snow"
                >
                  <CheckIcon />
                  {trait}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/nkrider7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-sm items-center gap-3 rounded-[22px] bg-[#ececee] p-2.5 pr-4 transition hover:bg-[#e4e4e7] dark:bg-surface-dark-raised dark:hover:bg-white/10"
            >
              <span className="relative flex h-[82px] w-[82px] shrink-0 items-center justify-center overflow-visible rounded-[16px] ">
                <img
                  src="/fishman.png"
                  alt=""
                  className="h-[130%] w-[130%] object-cover object-[center_8%]"
                  draggable={false}
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] leading-none text-fog">Currently building</span>
                <span className="mt-1.5 flex items-center gap-1.5 text-[14px] font-semibold leading-snug text-obsidian dark:text-snow">
                  <span className="truncate">Fishman – Git-native API Client</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 shrink-0 text-steel transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-ash"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M4 12 12 4M6.5 4H12v5.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          <div className="mx-auto w-full max-w-[420px] shrink-0 sm:mx-0 sm:w-[168px] md:w-[150px] lg:w-[180px] xl:w-[210px]">
            <div className="overflow-hidden rounded-[28px] border-[3px] border-snow shadow-soft ring-1 ring-cloud dark:border-white/10 dark:ring-white/10">
              <img
                src="/rectangle.png"
                alt="Soul level up illustration"
                width={1536}
                height={1024}
                className="h-auto w-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="min-w-0">
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
          <h2 className="flex items-center gap-2 text-[20px] font-bold tracking-tight text-obsidian dark:text-snow sm:text-[22px]">
            <span className="select-none font-semibold text-[#ef4444]" aria-hidden>
              /
            </span>
            Work Experience
            <span className="select-none font-semibold text-[#ef4444]" aria-hidden>
              /
            </span>
          </h2>
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-steel transition hover:text-obsidian dark:text-ash dark:hover:text-snow"
          >
            View All
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <ol>
          {experiences.map((item, index) => {
            const isLast = index === experiences.length - 1
            return (
              <li key={item.title} className="relative flex gap-3.5 sm:gap-4">
                <div className="relative flex w-3 shrink-0 justify-center pt-3.5">
                  {!isLast && (
                    <span
                      className="absolute top-3.5 bottom-0 left-1/2 w-px -translate-x-1/2 bg-cloud dark:bg-white/10"
                      aria-hidden
                    />
                  )}
                  <span
                    className="relative z-10 h-3 w-3 rounded-full border-[2.5px] border-[#ff5a00] bg-paper dark:bg-surface-dark"
                    aria-hidden
                  />
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group min-w-0 flex-1 py-3.5 transition hover:opacity-95 ${
                    isLast ? 'pb-0' : 'border-b border-cloud dark:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="relative mt-0.5 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#e0e0e0] ">
                      <img
                        src={item.avatar}
                        alt=""
                        className="h-full w-full  object-cover object-[center_10%]"
                        draggable={false}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                        <h3 className="text-[16px] font-bold leading-tight text-obsidian dark:text-snow">
                          {item.title}
                        </h3>
                        <time className="shrink-0 text-[12px] leading-snug text-fog">{item.date}</time>
                      </div>

                      <p className="mt-1 text-[13px] text-steel dark:text-ash">
                        {item.role}
                        {item.tag ? (
                          <>
                            {' '}
                            <span className="text-fog">•</span>{' '}
                            <span className="font-semibold text-[#ff5a00]">{item.tag}</span>
                          </>
                        ) : null}
                      </p>

                      <p className="mt-2 text-[13px] leading-relaxed text-steel dark:text-ash">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
