import { Calendar, Clock, Trophy } from 'lucide-react'
import { useState } from 'react'
import { useReservationStore } from '../store/reservationStore'
import { CourtReservationModal } from '../components/CourtReservationModal'

const WEEK_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const TIME_SLOTS = ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00']
const COURTS = ['Pista 1', 'Pista 2', 'Pista 3', 'Pista 4', 'Pista 5', 'Pista 6']

export function Reservas() {
  const [selectedDay, setSelectedDay] = useState(WEEK_DAYS[0])
  const { setShowCourtModal } = useReservationStore()

  return (
    <div className="space-y-8">
      <div className="card-container">
        <div className="p-8 neumorph">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold gradient-text">Reservas</h2>
            <div className="flex gap-4">
              <div className="p-4 neumorph flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Disponible</span>
              </div>
              <div className="p-4 neumorph flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm">Ocupado</span>
              </div>
            </div>
          </div>

          {/* Week selector */}
          <div className="grid grid-cols-7 gap-4 mb-8">
            {WEEK_DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`p-4 ${
                  selectedDay === day ? 'neumorph-pressed' : 'neumorph-button'
                }`}
              >
                <span className="text-sm font-medium">{day}</span>
              </button>
            ))}
          </div>

          {/* Timetable */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4"></th>
                  {COURTS.map((court) => (
                    <th key={court} className="p-4">
                      <div className="neumorph p-4 text-center">
                        <Trophy className="w-5 h-5 neumorph-icon mx-auto mb-2" />
                        {court}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map((time) => (
                  <tr key={time}>
                    <td className="p-4">
                      <div className="neumorph p-4 text-center">
                        <Clock className="w-4 h-4 neumorph-icon mx-auto mb-1" />
                        {time}
                      </div>
                    </td>
                    {COURTS.map((court) => (
                      <td key={`${court}-${time}`} className="p-4">
                        <button 
                          onClick={() => setShowCourtModal(true)}
                          className="w-full neumorph-button p-4 hover:scale-105 transition-transform"
                        >
                          <span className="text-sm">Reservar</span>
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CourtReservationModal />
    </div>
  )
}