import { Dumbbell, Users, Clock, Calendar, User } from 'lucide-react'
import { useReservationStore } from '../store/reservationStore'
import { ClassReservationModal } from '../components/ClassReservationModal'

const ACTIVITIES = [
  {
    name: 'Yoga Flow',
    schedule: 'Lunes y Miércoles 10:00 - 11:00',
    instructor: 'Laura García',
    capacity: '15 personas',
    description: 'Clase de yoga dinámica para todos los niveles'
  },
  {
    name: 'Pilates Mat',
    schedule: 'Martes y Jueves 09:00 - 10:00',
    instructor: 'Carlos Ruiz',
    capacity: '12 personas',
    description: 'Fortalecimiento corporal y flexibilidad'
  },
  {
    name: 'Entrenamiento Funcional',
    schedule: 'Lunes, Miércoles y Viernes 18:00 - 19:00',
    instructor: 'Miguel Ángel Torres',
    capacity: '20 personas',
    description: 'Ejercicios funcionales de alta intensidad'
  },
  {
    name: 'Meditación',
    schedule: 'Viernes 11:00 - 12:00',
    instructor: 'Ana Martínez',
    capacity: '20 personas',
    description: 'Sesiones de mindfulness y relajación'
  }
]

export function Wellness() {
  const { setShowClassModal } = useReservationStore()

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Clases Hoy', value: '8', icon: Calendar },
          { label: 'Participantes', value: '45', icon: Users },
          { label: 'Instructores', value: '6', icon: Dumbbell },
          { label: 'Próxima Clase', value: '10:00', icon: Clock },
        ].map((stat) => (
          <div key={stat.label} className="p-6 neumorph hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                <stat.icon className="w-6 h-6 neumorph-icon" />
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
            <p className="text-2xl font-semibold gradient-text mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activities Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold gradient-text">Actividades</h3>
          {ACTIVITIES.map((activity) => (
            <div key={activity.name} className="p-6 neumorph">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{activity.name}</h4>
                <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 neumorph-icon" />
                </div>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {activity.schedule}
                </p>
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Instructor: {activity.instructor}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Capacidad: {activity.capacity}
                </p>
                <p className="mt-2">{activity.description}</p>
              </div>
              <button 
                onClick={() => setShowClassModal(true)}
                className="mt-4 w-full p-3 neumorph-button text-sm hover:translate-y-[-2px] transition-transform"
              >
                Reservar Plaza
              </button>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold gradient-text">Instalaciones</h3>
          <div className="p-6 neumorph">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Sala de Fitness</h4>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Abierto</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Equipamiento completo para entrenamiento cardiovascular y de fuerza
              </p>
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>Horario: 07:00 - 22:00</span>
                <span>Capacidad: 30 personas</span>
              </div>
            </div>
          </div>

          <div className="p-6 neumorph">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Sala de Yoga</h4>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Abierto</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Espacio tranquilo y acondicionado para prácticas de yoga y meditación
              </p>
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>Horario: 08:00 - 21:00</span>
                <span>Capacidad: 20 personas</span>
              </div>
            </div>
          </div>

          <div className="p-6 neumorph">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Piscina Climatizada</h4>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Abierto</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Piscina climatizada para natación y actividades acuáticas
              </p>
              <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                <span>Horario: 07:00 - 22:00</span>
                <span>Capacidad: 25 personas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClassReservationModal />
    </div>
  )
}