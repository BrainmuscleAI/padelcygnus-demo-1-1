import { X, User, Mail, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

interface UserProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  if (!isOpen) return null

  const handleLogout = () => {
    logout()
    onClose()
    navigate('/marketing')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4">
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md mt-16 mr-4 overflow-hidden rounded-xl border-4 border-blue-400/30 bg-white/60 backdrop-blur-[60px] shadow-xl animate-slide-up">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                <User className="w-5 h-5 neumorph-icon" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-sm text-[var(--text-secondary)]">{user?.role === 'admin' ? 'Administrador' : 'Usuario'}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 neumorph-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 neumorph">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 neumorph-icon" />
                <span>{user?.email}</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full p-4 neumorph-button text-red-500 flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}