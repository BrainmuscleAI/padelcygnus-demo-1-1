import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { AdminDashboard } from './pages/AdminDashboard'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Wellness } from './pages/Wellness'
import { Marketing } from './pages/Marketing'
import { Reservas } from './pages/Reservas'
import { Padel } from './pages/Padel'
import { Ajustes } from './pages/Ajustes'
import { useThemeStore } from './store/themeStore'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AdminRoute } from './components/AdminRoute'
import { useEffect } from 'react'
import { ChatBot } from './components/ChatBot'
import { ToastContainer } from './components/ToastContainer'

export default function App() {
  const isDark = useThemeStore((state) => state.isDark)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-[var(--surface-color)] text-[var(--text-primary)] transition-colors duration-200">
      <Router>
        <Routes>
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            <Route path="reservas" element={<Reservas />} />
            <Route path="padel" element={<Padel />} />
            <Route path="wellness" element={<Wellness />} />
            <Route path="ajustes" element={<Ajustes />} />
          </Route>
          <Route path="*" element={<Navigate to="/marketing" replace />} />
        </Routes>
        <ChatBot />
        <ToastContainer />
      </Router>
    </div>
  )
}