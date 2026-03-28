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
        strokeWidth={2}
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
        strokeWidth={2}
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
        strokeWidth={2}
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
        strokeWidth={2}
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
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={cn(className, 'transition-transform', open && 'rotate-180')}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function CollapseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
    </svg>
  )
}

const navActive =
  'bg-violet-600/20 text-white border-l-4 border-violet-500 pl-[calc(0.75rem-4px)]'
const navInactive =
  'text-gray-400 hover:bg-white/10 hover:text-white border-l-4 border-transparent'

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

  const widthClass = sidebarCollapsed ? 'lg:w-[4.5rem]' : 'lg:w-56'

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden',
          mobileSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!mobileSidebarOpen}
        onClick={() => setMobileSidebarOpen(false)}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex min-h-0 w-56 flex-col border-r border-white/10 bg-surface-dark-deep text-gray-100 transition-transform lg:relative lg:z-auto lg:h-full lg:max-h-full lg:shrink-0 lg:translate-x-0',
          widthClass,
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div
          className={cn(
            'flex h-14 items-center border-b border-white/10 px-3',
            sidebarCollapsed && 'lg:justify-center lg:px-2',
          )}
        >

          {!sidebarCollapsed && (<>
          <img src="/favicon.png" alt="Narendra" className="h-5 w-5 rounded-full mr-2" />
            <span className="truncate text-sm font-semibold tracking-tight">nkrider7 space</span>
          </>
          )}
          <button
            type="button"
            className={cn(
              'ml-auto hidden rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white lg:inline-flex',
              sidebarCollapsed && 'ml-0',
            )}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <CollapseIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="ml-auto rounded-lg p-2 text-gray-400 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto overflow-x-hidden p-2">
          <p
            className={cn(
              'px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-500',
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
              cn(
                'flex items-center gap-3 rounded-r-lg py-2 pl-3 pr-2 text-sm font-medium transition',
                isActive ? navActive : navInactive,
                sidebarCollapsed && 'lg:justify-center lg:pl-2',
              )
            }
            title="Home"
          >
            <HomeIcon className="h-5 w-5 shrink-0 text-violet-400" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>Home</span>
          </NavLink>

          <div className="pt-2">
            <button
              type="button"
              className={cn(
                'flex w-full items-center gap-2 rounded-lg py-2 pl-3 pr-2 text-left text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white',
                learningActive && 'text-white',
                sidebarCollapsed && 'lg:justify-center lg:pl-2',
              )}
              aria-expanded={learningNavOpen}
              onClick={() => setLearningNavOpen(!learningNavOpen)}
              title="My Learning"
            >
              <BookIcon className="h-5 w-5 shrink-0 text-violet-400" />
              <span className={cn('flex-1 truncate', sidebarCollapsed && 'lg:sr-only')}>
                My Learning
              </span>
              <ChevronIcon
                open={learningNavOpen}
                className={cn('h-4 w-4 shrink-0', sidebarCollapsed && 'lg:hidden')}
              />
            </button>
            {learningNavOpen && (
              <div className={cn('mt-1 space-y-0.5 border-l border-white/10 pl-2', sidebarCollapsed && 'lg:hidden')}>
                <NavLink
                  to="/learning"
                  end
                  onClick={() => setMobileSidebarOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md py-1.5 pl-3 text-sm',
                      isActive
                        ? 'bg-violet-600/30 font-medium text-white'
                        : 'text-gray-400 hover:text-white',
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
                        'block truncate rounded-md py-1.5 pl-3 text-sm',
                        isActive ? 'bg-violet-600/30 font-medium text-white' : 'text-gray-400 hover:text-white',
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
              cn(
                'flex items-center gap-3 rounded-r-lg py-2 pl-3 pr-2 text-sm font-medium transition',
                isActive ? navActive : navInactive,
                sidebarCollapsed && 'lg:justify-center lg:pl-2',
              )
            }
            title="My Projects"
          >
            <FolderIcon className="h-5 w-5 shrink-0 text-violet-400" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>My Projects</span>
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-r-lg py-2 pl-3 pr-2 text-sm font-medium transition',
                isActive ? navActive : navInactive,
                sidebarCollapsed && 'lg:justify-center lg:pl-2',
              )
            }
            title="My Fav Sites"
          >
            <LinkIcon className="h-5 w-5 shrink-0 text-violet-400" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>My Fav Sites</span>
          </NavLink>

          <NavLink
            to="/calendar"
            onClick={() => setMobileSidebarOpen(false)}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-r-lg py-2 pl-3 pr-2 text-sm font-medium transition',
                isActive ? navActive : navInactive,
                sidebarCollapsed && 'lg:justify-center lg:pl-2',
              )
            }
            title="Calendar"
          >
            <CalendarIcon className="h-5 w-5 shrink-0 text-violet-400" />
            <span className={cn(sidebarCollapsed && 'lg:sr-only')}>Calendar</span>
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
