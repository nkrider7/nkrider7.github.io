import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell() {
  return (
    <div className="flex h-[100dvh] max-h-[100dvh] min-h-0 w-full overflow-hidden bg-paper text-graphite dark:bg-surface-dark dark:text-cloud">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-4 lg:px-8 lg:py-4">
          <div className="mx-auto w-full max-w-page">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
