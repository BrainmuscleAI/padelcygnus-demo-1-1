import { X, Users } from 'lucide-react'
import { useState } from 'react'
import { useReservationStore } from '../store/reservationStore'

const CLASSES = [
  { name: 'Padel Iniciación', time: '10:00', instructor: 'Carlos M.' },
  { name: 'Padel Intermedio', time: '12:00', instructor: 'Ana R.' },
  { name: 'Padel Avanzado', time: '16:00', instructor: 'Miguel S.' },
  { name: 'Clínica de Técnica', time: '18:00', instructor: 'Laura P.' },
]

export function ClassReservationModal() {
  const { showClassModal, setShowClassModal } = useReservationStore()
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  if (!showClassModal) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle class reservation
    setShowClassModal(false)
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl p-8 neumorph bg-white/60 relative">
        <button
          onClick={() => setShowClassModal(false)}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
            <Users className="w-6 h-6 neumorph-icon" />
          </div>
          <h2 className="text-2xl font-semibold gradient-text">Reservar Clase</h2>
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

          <div className="space-y-4">
            {CLASSES.map((classItem) => (
              <button
                key={classItem.name}
                type="button"
                onClick={() => setSelectedClass(classItem.name)}
                className={`w-full p-6 text-left ${
                  selectedClass === classItem.name ? 'neumorph-pressed' : 'neumorph'
                }`}
              >
                <h3 className="font-semibold">{classItem.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {classItem.time} - Instructor: {classItem.instructor}
                </p>
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-4 neumorph-button font-medium hover:translate-y-[-2px] transition-transform"
          >
            Confirmar Clase
          </button>
        </form>
      </div>
    </div>
  )
}