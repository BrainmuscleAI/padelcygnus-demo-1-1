import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const isAdmin = useAuthStore((state) => state.isAdmin)
  const location = useLocation()

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <>{children}</>
}