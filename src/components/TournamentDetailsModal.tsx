import { X, Trophy, Users, Calendar } from 'lucide-react'

interface TournamentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  tournament: {
    name: string
    date: string
    category: string
    status: string
    description?: string
    participants?: number
    prize?: string
  }
}

export function TournamentDetailsModal({ isOpen, onClose, tournament }: TournamentDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl p-8 neumorph bg-white/60 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
            <Trophy className="w-6 h-6 neumorph-icon" />
          </div>
          <h2 className="text-2xl font-semibold gradient-text">{tournament.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 neumorph">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 neumorph-icon" />
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Fecha</p>
                  <p className="font-medium">{tournament.date}</p>
                </div>
              </div>
            </div>

            <div className="p-4 neumorph">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 neumorph-icon" />
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Categoría</p>
                  <p className="font-medium">{tournament.category}</p>
                </div>
              </div>
            </div>

            {tournament.participants && (
              <div className="p-4 neumorph">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 neumorph-icon" />
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Participantes</p>
                    <p className="font-medium">{tournament.participants} equipos</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 neumorph">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-[var(--text-secondary)]">
              {tournament.description || 'Información detallada próximamente.'}
            </p>
            {tournament.prize && (
              <div className="mt-4">
                <h4 className="font-medium mb-1">Premio</h4>
                <p className="text-[var(--text-secondary)]">{tournament.prize}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 py-3 neumorph-button">
            Inscribirse
          </button>
          <button className="flex-1 py-3 neumorph-button">
            Descargar Bases
          </button>
        </div>
      </div>
    </div>
  )
}