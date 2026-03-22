import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark'

interface UiState {
  theme: Theme
  toggleTheme: () => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (value: boolean) => void
  learningNavOpen: boolean
  setLearningNavOpen: (value: boolean) => void
  mobileSidebarOpen: boolean
  setMobileSidebarOpen: (value: boolean) => void
}

export const useUiStore = create<UiState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () =>
        set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
      sidebarCollapsed: false,
      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
      learningNavOpen: true,
      setLearningNavOpen: (learningNavOpen) => set({ learningNavOpen }),
      mobileSidebarOpen: false,
      setMobileSidebarOpen: (mobileSidebarOpen) => set({ mobileSidebarOpen }),
    }),
    {
      name: 'portfolio-ui',
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        learningNavOpen: state.learningNavOpen,
      }),
    },
  ),
)
