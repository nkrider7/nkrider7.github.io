import { Button } from '@/components/ui/Button'
import { useUiStore } from '@/store/uiStore'
import { NavLink } from 'react-router-dom'

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <title>Open menu</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <title>Light mode</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <title>Dark mode</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}

export function Topbar() {
  const theme = useUiStore((s) => s.theme)
  const toggleTheme = useUiStore((s) => s.toggleTheme)
  const setMobileSidebarOpen = useUiStore((s) => s.setMobileSidebarOpen)

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 bg-snow/90 px-4 backdrop-blur-md dark:bg-surface-dark/90 lg:px-6">
      <button
        type="button"
        className="rounded-button p-2 text-steel transition hover:bg-paper hover:text-obsidian dark:hover:bg-ink-slate lg:hidden"
        aria-label="Open sidebar"
        onClick={() => setMobileSidebarOpen(true)}
      >
        <MenuIcon />
      </button>

      <NavLink
        to="/"
        className="flex min-w-0 items-center gap-3"
        onClick={() => setMobileSidebarOpen(false)}
      >
        <img
          src="/skull.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 block md:hidden shrink-0 object-contain [image-rendering:pixelated]"
          draggable={false}
        />
        <div className="flex block md:hidden  min-w-0 flex-col justify-center gap-1">
          <span className="truncate text-[14px] font-bold leading-none tracking-tight text-obsidian dark:text-snow sm:text-[15px]">
            Narendra Nishad
          </span>
          <span className="flex items-center gap-1.5 text-[12px] leading-none text-fog">
            <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-45" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
        </div>
      </NavLink>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="rounded-button border border-cloud p-2 text-steel transition hover:bg-paper hover:text-obsidian dark:border-white/10 dark:hover:bg-ink-slate dark:hover:text-snow"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={() => toggleTheme()}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <Button
          href="https://github.com/nkrider7"
          variant="primary"
          className="!hidden !px-4 !py-2.5 sm:!inline-flex"
        >
          GitHub
        </Button>
      </div>
    </header>
  )
}
