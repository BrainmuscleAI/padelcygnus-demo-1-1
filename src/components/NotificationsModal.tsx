import { X, Bell } from 'lucide-react'

interface NotificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

const notifications = [
  {
    id: 1,
    title: 'Nueva Reserva Confirmada',
    message: 'Tu reserva para la Pista 3 ha sido confirmada.',
    time: 'Hace 5 minutos',
    unread: true,
  },
  {
    id: 2,
    title: 'Recordatorio de Clase',
    message: 'Tu clase de pádel comienza en 1 hora.',
    time: 'Hace 30 minutos',
    unread: true,
  },
  {
    id: 3,
    title: 'Nuevo Torneo',
    message: 'Se ha abierto la inscripción para el Torneo de Primavera.',
    time: 'Hace 2 horas',
    unread: true,
  },
]

export function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
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
                <Bell className="w-5 h-5 neumorph-icon" />
              </div>
              <h2 className="text-xl font-semibold">Notificaciones</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 neumorph-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 neumorph relative"
              >
                {notification.unread && (
                  <span className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full" />
                )}
                <h3 className="font-medium mb-1">{notification.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  {notification.message}
                </p>
                <span className="text-xs text-[var(--text-secondary)]">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}