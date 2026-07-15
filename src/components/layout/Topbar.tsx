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
        className="flex items-center gap-2.5 lg:hidden"
        onClick={() => setMobileSidebarOpen(false)}
      >
        <img src="/favicon.png" alt="" className="h-7 w-7 rounded-[10px] object-cover" />
        <span className="text-[14px] font-semibold text-obsidian dark:text-snow">Narendra</span>
      </NavLink>

      <div className="hidden flex-1 lg:block" />

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
