import { Link } from 'react-router-dom'

type TechTag = {
  label: string
  className: string
}

type FeaturedProject = {
  id: string
  title: string
  description: string
  image: string
  href: string
  topProject?: boolean
  tags: TechTag[]
}

const projects: FeaturedProject[] = [
  {
    id: 'fishman',
    title: 'Fishman',
    description: 'Git-native API client for developers. Fast, clean & powerful.',
    image: '/fishmanproject.webp',
    href: 'https://github.com/nkrider7',
    topProject: true,
    tags: [
      { label: 'Tauri', className: 'bg-[#dbeafe] text-[#1d4ed8] dark:bg-blue-500/20 dark:text-blue-300' },
      { label: 'Rust', className: 'bg-[#ffedd5] text-[#c2410c] dark:bg-orange-500/20 dark:text-orange-300' },
      { label: 'TypeScript', className: 'bg-[#e0e7ff] text-[#4338ca] dark:bg-indigo-500/20 dark:text-indigo-300' },
    ],
  },
  {
    id: 'broocode',
    title: 'Broocode',
    description: 'Modern dev agency & solutions for startups.',
    image: '/broocodeproject.webp',
    href: 'https://github.com/nkrider7',
    tags: [
      { label: 'Next.js', className: 'bg-[#dbeafe] text-[#1e40af] dark:bg-sky-500/20 dark:text-sky-300' },
      { label: 'Tailwind', className: 'bg-[#d1fae5] text-[#047857] dark:bg-emerald-500/20 dark:text-emerald-300' },
      { label: 'Shadcn', className: 'bg-[#e0e7ff] text-[#4338ca] dark:bg-violet-500/20 dark:text-violet-300' },
    ],
  },
  {
    id: 'kitfitx',
    title: 'KitFitX',
    description: "Women's health & fitness tracking app.",
    image: '/kifitxproject.webp',
    href: 'https://github.com/nkrider7',
    tags: [
      { label: 'React Native', className: 'bg-[#fce7f3] text-[#be185d] dark:bg-pink-500/20 dark:text-pink-300' },
      { label: 'Expo', className: 'bg-[#ffedd5] text-[#c2410c] dark:bg-orange-500/20 dark:text-orange-300' },
      { label: 'AI', className: 'bg-[#ede9fe] text-[#6d28d9] dark:bg-purple-500/20 dark:text-purple-300' },
    ],
  },
  {
    id: 'soul-arise',
    title: 'Soul Arise',
    description: 'Gamified anime-inspired self growth app.',
    image: '/soularise.webp',
    href: 'https://github.com/nkrider7',
    tags: [
      { label: 'Expo', className: 'bg-[#dbeafe] text-[#1d4ed8] dark:bg-blue-500/20 dark:text-blue-300' },
      { label: 'Redux', className: 'bg-[#e0e7ff] text-[#4338ca] dark:bg-indigo-500/20 dark:text-indigo-300' },
      { label: 'Firebase', className: 'bg-[#dbeafe] text-[#1e40af] dark:bg-sky-500/20 dark:text-sky-300' },
    ],
  },
]

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6.5 3.5H3.5A1 1 0 0 0 2.5 4.5v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 2.5h4v4M13.5 2.5 7.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WaveDivider() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[34px] w-full sm:h-[38px]"
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* Soft concave dip — image curves into the white content area */}
      <path
        d="M0 14 C80 14 120 34 200 34 C280 34 320 14 400 14 L400 40 L0 40 Z"
        className="fill-snow dark:fill-surface-dark"
      />
    </svg>
  )
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-cloud/90 bg-snow shadow-[0_8px_28px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-surface-dark dark:shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[16/11] overflow-hidden bg-obsidian">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width={1536}
          height={1024}
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />

        <WaveDivider />

        {project.topProject ? (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-[#ef4444] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-snow shadow-sm sm:left-3.5 sm:top-3.5">
            Top Project
          </span>
        ) : null}

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-snow text-obsidian shadow-[0_2px_8px_rgba(0,0,0,0.12)] sm:right-3.5 sm:top-3.5 dark:bg-surface-dark-raised dark:text-snow"
        >
          <ExternalLinkIcon />
        </a>
      </div>

      <div className="relative z-[1] -mt-px flex flex-1 flex-col px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
        <h3 className="text-[17px] font-bold tracking-tight text-obsidian dark:text-snow sm:text-[18px]">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-fog dark:text-ash sm:text-[13.5px]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none ${tag.className}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function FeaturedProjectsSection() {
  return (
    <section aria-labelledby="featured-projects-heading" className="space-y-6 sm:space-y-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2
            id="featured-projects-heading"
            className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight text-obsidian dark:text-snow sm:text-[24px]"
          >
            <img
              src="/gift.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain [image-rendering:pixelated] sm:h-8 sm:w-8"
              draggable={false}
            />
            Featured Projects
          </h2>
          <p className="mt-1 text-[14px] text-fog dark:text-ash">Things I&apos;ve built with passion</p>
        </div>

        <Link
          to="/projects"
          className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-cloud bg-snow px-4 py-2.5 text-[13px] font-medium text-obsidian sm:self-auto dark:border-white/10 dark:bg-surface-dark dark:text-snow"
        >
          View All Projects
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Mobile: horizontal snap scroll — Desktop: equal grid */}
      <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[min(78vw,300px)] shrink-0 snap-start sm:w-auto sm:min-w-0"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
