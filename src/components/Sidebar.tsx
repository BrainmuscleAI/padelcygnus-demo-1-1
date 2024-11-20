import { Home, Calendar, Trophy, Dumbbell, Settings, LogOut, Globe } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const navigation = [
  { name: 'Inicio', icon: Home, href: '/' },
  { name: 'Reservas', icon: Calendar, href: '/reservas' },
  { name: 'Pádel', icon: Trophy, href: '/padel' },
  { name: 'Wellness', icon: Dumbbell, href: '/wellness' },
  { name: 'Marketing', icon: Globe, href: '/marketing' },
  { name: 'Ajustes', icon: Settings, href: '/ajustes' },
]

export function Sidebar() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate('/marketing')
  }

  return (
    <aside className="w-72 min-h-[calc(100vh-7rem)] mx-6 p-6 neumorph">
      <nav className="space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center gap-3 p-4 neumorph-button"
          >
            <item.icon className="w-5 h-5 neumorph-icon" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              {item.name}
            </span>
          </Link>
        ))}
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 p-4 text-red-500 neumorph-button"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </button>
      </nav>
    </aside>
  )
}