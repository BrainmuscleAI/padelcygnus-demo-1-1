import { X, Calendar } from 'lucide-react'
import { useState } from 'react'
import { useReservationStore } from '../store/reservationStore'

const COURTS = ['Pista 1', 'Pista 2', 'Pista 3', 'Pista 4', 'Pista 5', 'Pista 6']
const HOURS = ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00']

export function CourtReservationModal() {
  const { showCourtModal, setShowCourtModal } = useReservationStore()
  const [selectedCourt, setSelectedCourt] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  if (!showCourtModal) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle reservation submission
    setShowCourtModal(false)
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl p-8 neumorph bg-white/60 relative">
        <button
          onClick={() => setShowCourtModal(false)}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
            <Calendar className="w-6 h-6 neumorph-icon" />
          </div>
          <h2 className="text-2xl font-semibold gradient-text">Reservar Pista</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Fecha
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-4 neumorph-inset focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Pista
            </label>
            <div className="grid grid-cols-3 gap-3">
              {COURTS.map((court) => (
                <button
                  key={court}
                  type="button"
                  onClick={() => setSelectedCourt(court)}
                  className={`p-3 ${
                    selectedCourt === court ? 'neumorph-pressed' : 'neumorph-button'
                  }`}
                >
                  {court}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Hora
            </label>
            <div className="grid grid-cols-3 gap-3">
              {HOURS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 ${
                    selectedTime === time ? 'neumorph-pressed' : 'neumorph-button'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 neumorph-button font-medium hover:translate-y-[-2px] transition-transform"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  )
}