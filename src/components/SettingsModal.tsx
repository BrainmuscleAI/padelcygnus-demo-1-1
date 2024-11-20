import { X, Settings, Moon, Sun, Bell, Globe } from 'lucide-react'
import { useThemeStore } from '../store/themeStore'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { isDark, toggleTheme } = useThemeStore()

  if (!isOpen) return null

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
                <Settings className="w-5 h-5 neumorph-icon" />
              </div>
              <h2 className="text-xl font-semibold">Ajustes Rápidos</h2>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <span>Modo Oscuro</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-12 h-6 rounded-full neumorph-button relative"
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-blue-500 transition-transform ${
                      isDark ? 'left-6' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="p-4 neumorph">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5" />
                  <span>Notificaciones</span>
                </div>
                <button className="w-12 h-6 rounded-full neumorph-button relative">
                  <span className="absolute top-1 left-6 w-4 h-4 rounded-full bg-blue-500" />
                </button>
              </div>
            </div>

            <div className="p-4 neumorph">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>Idioma</span>
                </div>
                <select className="p-2 neumorph-button">
                  <option>Español</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}