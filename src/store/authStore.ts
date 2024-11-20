import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  isAdmin: boolean
  user: {
    name: string
    email: string
    role: 'user' | 'admin'
  } | null
  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isAdmin: false,
      user: null,
      login: (email, password) => {
        // In a real app, this would validate credentials with a backend
        // For demo purposes, we'll make admin@padelcygnus.com the admin account
        const isAdmin = email === 'admin@padelcygnus.com'
        set({ 
          isAuthenticated: true,
          isAdmin,
          user: {
            name: isAdmin ? 'Administrador' : 'Usuario Demo',
            email,
            role: isAdmin ? 'admin' : 'user'
          }
        })
      },
      logout: () => set({ isAuthenticated: false, isAdmin: false, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)