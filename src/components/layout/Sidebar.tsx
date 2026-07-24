import { learningEntries } from '@/content/registry'
import { useUiStore } from '@/store/uiStore'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  )
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  )
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={cn(className, 'transition-transform duration-200', open && 'rotate-180')}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function CollapseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  )
}

const navBase =
  'flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[14px] font-medium transition duration-200'
const navActive = 'bg-obsidian text-snow shadow-btn-primary'
const navInactive =
  'text-steel hover:bg-paper hover:text-obsidian dark:text-ash dark:hover:bg-ink-slate dark:hover:text-snow'

export function Sidebar() {
  const location = useLocation()
  const sidebarCollapsed = useUiStore((s) => s.sidebarCollapsed)
  const setSidebarCollapsed = useUiStore((s) => s.setSidebarCollapsed)
  const learningNavOpen = useUiStore((s) => s.learningNavOpen)
  const setLearningNavOpen = useUiStore((s) => s.setLearningNavOpen)
  const mobileSidebarOpen = useUiStore((s) => s.mobileSidebarOpen)
  const setMobileSidebarOpen = useUiStore((s) => s.setMobileSidebarOpen)

  const learningActive = location.pathname.startsWith('/learning')

  useEffect(() => {
    if (learningActive) setLearningNavOpen(true)
  }, [learningActive, setLearningNavOpen])

  const widthClass = sidebarCollapsed ? 'lg:w-[4.5rem]' : 'lg:w-64'

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-obsidian/40 transition-opacity lg:hidden',
          mobileSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!mobileSidebarOpen}
        onClick={() => setMobileSidebarOpen(false)}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex min-h-0 w-64 flex-col border-r border-cloud bg-snow text-graphite transition-transform dark:border-white/10 dark:bg-surface-dark dark:text-cloud lg:relative lg:z-auto lg:h-full lg:max-h-full lg:shrink-0 lg:translate-x-0',
          widthClass,
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div
          className={cn(
            'flex h-16 items-center gap-2.5 border-b border-cloud px-4 dark:border-white/10',
            sidebarCollapsed && 'lg:justify-center lg:px-0',
          )}
        >
          {sidebarCollapsed ? (
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-[14px] transition hover:bg-paper dark:hover:bg-ink-slate lg:inline-flex"
              aria-label="Expand sidebar"
              title="Expand sidebar"
              onClick={() => setSidebarCollapsed(false)}
            >
              <img
                src="/skull.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain [image-rendering:pixelated]"
                draggable={false}
              />
            </button>
          ) : (
            <>
              <NavLink
                to="/"
                className="flex min-w-0 flex-1 items-center gap-2.5"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <img
                  src="/skull.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain [image-rendering:pixelated]"
                  draggable={false}
                />
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-obsidian dark:text-snow">
                    Narendra
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 truncate text-[12px] leading-none text-fog">
                    <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Available for work
                  </p>
                </div>
              </NavLink>
              <button
                type="button"
                className="hidden rounded-button p-2 text-fog transition hover:bg-paper hover:text-obsidian dark:hover:bg-ink-slate dark:hover:text-snow lg:inline-flex"
                aria-label="Collapse sidebar"
                onClick={() => setSidebarCollapsed(true)}
              >
                <CollapseIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-button p-2 text-fog hover:bg-paper lg:hidden"
                aria-label="Close sidebar"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </>
          )}
        </div>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto overflow-x-hidden p-3">
          <p
            className={cn(
              'px-3 pb-2 pt-1 text-[12px] font-medium uppercase tracking-wide text-ash',
              sidebarCollapsed && 'lg:hidden',
            )}
          >
            Navigation
          </p>

          <NavLink
            to="/"
            end
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(navBase, isActive ? navActive : navInactive, sidebarCollapsed && 'lg:justify-center')
            }
            title="Home"
          >
            <HomeIcon className="h-5 w-5 shrink-0" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>Home</span>
          </NavLink>

          <div className="pt-1">
            <button
              type="button"
              className={cn(
                navBase,
                'w-full text-left',
                learningActive ? 'bg-paper text-obsidian dark:bg-ink-slate dark:text-snow' : navInactive,
                sidebarCollapsed && 'lg:justify-center',
              )}
              aria-expanded={learningNavOpen}
              onClick={() => setLearningNavOpen(!learningNavOpen)}
              title="My Learning"
            >
              <BookIcon className="h-5 w-5 shrink-0" />
              <span className={cn('flex-1 truncate', sidebarCollapsed && 'lg:sr-only')}>
                My Learning
              </span>
              <ChevronIcon
                open={learningNavOpen}
                className={cn('h-4 w-4 shrink-0 text-ash', sidebarCollapsed && 'lg:hidden')}
              />
            </button>
            {learningNavOpen && (
              <div
                className={cn(
                  'mt-1 space-y-0.5 border-l border-cloud pl-2 dark:border-white/10',
                  sidebarCollapsed && 'lg:hidden',
                )}
              >
                <NavLink
                  to="/learning"
                  end
                  onClick={() => setMobileSidebarOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-[12px] py-2 pl-3 text-[13px] transition',
                      isActive
                        ? 'bg-paper font-medium text-obsidian dark:bg-ink-slate dark:text-snow'
                        : 'text-fog hover:text-obsidian dark:hover:text-snow',
                    )
                  }
                >
                  All topics
                </NavLink>
                {learningEntries.map((e) => (
                  <NavLink
                    key={e.slug}
                    to={`/learning/${e.slug}`}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block truncate rounded-[12px] py-2 pl-3 text-[13px] transition',
                        isActive
                          ? 'bg-paper font-medium text-obsidian dark:bg-ink-slate dark:text-snow'
                          : 'text-fog hover:text-obsidian dark:hover:text-snow',
                      )
                    }
                    title={e.meta.title}
                  >
                    {e.meta.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(navBase, isActive ? navActive : navInactive, sidebarCollapsed && 'lg:justify-center')
            }
            title="My Projects"
          >
            <FolderIcon className="h-5 w-5 shrink-0" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>My Projects</span>
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(navBase, isActive ? navActive : navInactive, sidebarCollapsed && 'lg:justify-center')
            }
            title="My Fav Sites"
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>My Fav Sites</span>
          </NavLink>

          <NavLink
            to="/calendar"
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(navBase, isActive ? navActive : navInactive, sidebarCollapsed && 'lg:justify-center')
            }
            title="Calendar"
          >
            <CalendarIcon className="h-5 w-5 shrink-0" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>Calendar</span>
          </NavLink>
        </nav>

        <div
          className={cn(
            'border-t border-cloud p-4 dark:border-white/10',
            sidebarCollapsed && 'lg:hidden',
          )}
        >
          <div className="rounded-card border border-cloud bg-paper p-4 dark:border-white/10 dark:bg-ink-slate">
            <BadgeLite />
            <p className="mt-2 text-[13px] font-medium text-obsidian dark:text-snow">
              Building in public
            </p>
            <p className="mt-1 text-[12px] text-fog">
              Notes, projects, and daily logs — updated as I learn.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

function BadgeLite() {
  return (
    <span className="inline-flex items-center rounded-badge bg-ember px-2 py-1 text-[12px] font-medium text-snow">
      Open to work
    </span>
  )
}
