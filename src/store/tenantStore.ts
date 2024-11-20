import { create } from 'zustand'

interface TenantState {
  currentTenant: string | null
  theme: {
    primary: string
    secondary: string
    accent: string
  }
  setCurrentTenant: (tenant: string) => void
  setTheme: (theme: { primary: string; secondary: string; accent: string }) => void
}

export const useTenantStore = create<TenantState>((set) => ({
  currentTenant: null,
  theme: {
    primary: '#3B82F6',
    secondary: '#F3F4F6',
    accent: '#60A5FA',
  },
  setCurrentTenant: (tenant) => set({ currentTenant: tenant }),
  setTheme: (theme) => set({ theme }),
}))