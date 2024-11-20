import { Trophy, Users, Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { TournamentDetailsModal } from '../components/TournamentDetailsModal'

const TOURNAMENTS = [
  {
    name: 'Torneo de Primavera',
    date: '15-17 Abril',
    category: 'Mixto',
    status: 'Inscripción Abierta',
    description: 'Torneo abierto a todas las categorías con formato round-robin seguido de eliminatorias directas.',
    participants: 32,
    prize: 'Trofeos y material deportivo valorado en 1000€'
  },
  {
    name: 'Liga Local',
    date: 'Todo el año',
    category: 'Masculino/Femenino',
    status: 'En Curso',
    description: 'Liga regular con partidos semanales organizados por niveles.',
    participants: 64
  },
  {
    name: 'Torneo Nocturno',
    date: '5 Mayo',
    category: 'Todas',
    status: 'Próximamente',
    description: 'Torneo especial con partidos nocturnos y formato express.',
    participants: 16,
    prize: 'Premio en metálico de 500€ para los ganadores'
  },
]

// ... rest of the imports and constants remain the same ...

export function Padel() {
  const [selectedTournament, setSelectedTournament] = useState<typeof TOURNAMENTS[0] | null>(null)

  return (
    <div className="space-y-8">
      {/* ... previous stats section remains the same ... */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tournaments */}
        <div className="card-container">
          <div className="p-8 neumorph">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold gradient-text">Torneos</h3>
              <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                <Trophy className="w-5 h-5 neumorph-icon" />
              </div>
            </div>
            <div className="space-y-4">
              {TOURNAMENTS.map((tournament) => (
                <div key={tournament.name} className="p-6 neumorph-pressed">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{tournament.name}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{tournament.date}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{tournament.category}</p>
                    </div>
                    <span className="text-sm px-3 py-1 neumorph-button">
                      {tournament.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedTournament(tournament)}
                    className="w-full mt-4 p-3 neumorph-button text-sm"
                  >
                    Ver Detalles
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ... rest of the component remains the same ... */}
      </div>

      {selectedTournament && (
        <TournamentDetailsModal
          isOpen={!!selectedTournament}
          onClose={() => setSelectedTournament(null)}
          tournament={selectedTournament}
        />
      )}
    </div>
  )
}