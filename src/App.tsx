import { AppShell } from '@/components/layout/AppShell'
import { CalendarPage } from '@/pages/CalendarPage'
import { FavoritesPage } from '@/pages/FavoritesPage'
import { HomePage } from '@/pages/HomePage'
import { LearningDocPage } from '@/pages/LearningDocPage'
import { LearningIndexPage } from '@/pages/LearningIndexPage'
import { LogDocPage } from '@/pages/LogDocPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const FISHMAN_URL = 'https://nkrider7.github.io/fishman-web/'

function FishmanRedirect() {
  useEffect(() => {
    window.location.replace(FISHMAN_URL)
  }, [])

  return (
    <p className="p-8 text-center text-[14px] text-steel">
      Redirecting to{' '}
      <a href={FISHMAN_URL} className="font-medium text-obsidian underline">
        Fishman
      </a>
      …
    </p>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/fishman" element={<FishmanRedirect />} />
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<LearningIndexPage />} />
        <Route path="/learning/:slug" element={<LearningDocPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/logs/:slug" element={<LogDocPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
