import { Calendar, Users, Trophy, Dumbbell, TrendingUp, Activity } from 'lucide-react'
import { useMembershipStore } from '../store/membershipStore'
import { useReservationStore } from '../store/reservationStore'
import { useNavigate } from 'react-router-dom'

const stats = [
  {
    name: 'Pistas Disponibles',
    value: '4/6',
    icon: Trophy,
    change: '2 ocupadas',
    changeType: 'positive',
    link: '/padel'
  },
  {
    name: 'Próxima Clase',
    value: '16:00',
    icon: Calendar,
    change: 'En 2 horas',
    changeType: 'positive',
    link: '/reservas'
  },
  {
    name: 'Área Wellness',
    value: '12',
    icon: Dumbbell,
    change: 'personas activas',
    changeType: 'positive',
    link: '/wellness'
  },
  {
    name: 'Socios Activos',
    value: '234',
    icon: Users,
    change: '+12 este mes',
    changeType: 'positive',
    link: '/padel'
  },
]

const activities = [
  { name: 'Reserva de Pista', time: '16:00', type: 'court', duration: '1.5h', link: '/reservas' },
  { name: 'Clase Grupal', time: '18:00', type: 'class', duration: '1h', link: '/reservas' },
  { name: 'Entrenamiento', time: '19:30', type: 'gym', duration: '1h', link: '/wellness' },
]

export function Dashboard() {
  const navigate = useNavigate()
  const { setShowMembershipModal } = useMembershipStore()
  const { setShowCourtModal, setShowClassModal } = useReservationStore()

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Grid */}
      <div className="card-container">
        <div className="p-6 neumorph">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="p-6 neumorph hover-lift cursor-pointer"
                onClick={() => navigate(stat.link)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-secondary)]">{stat.name}</p>
                    <p className="text-2xl font-semibold gradient-text mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                    <stat.icon className="w-6 h-6 neumorph-icon" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-[var(--text-secondary)]">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Timeline */}
        <div className="lg:col-span-2">
          <div className="card-container h-full">
            <div className="p-8 neumorph h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold gradient-text">Actividad Reciente</h3>
                <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                  <Activity className="w-5 h-5 neumorph-icon" />
                </div>
              </div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="p-4 neumorph-pressed animate-slide-up cursor-pointer hover:scale-[1.02] transition-transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => navigate(activity.link)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                        {activity.type === 'court' && <Trophy className="w-5 h-5 neumorph-icon" />}
                        {activity.type === 'class' && <Users className="w-5 h-5 neumorph-icon" />}
                        {activity.type === 'gym' && <Dumbbell className="w-5 h-5 neumorph-icon" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-[var(--text-primary)]">{activity.name}</p>
                          <span className="text-sm text-[var(--text-secondary)]">{activity.duration}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">Hoy a las {activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card-container">
          <div className="p-8 neumorph h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold gradient-text">Acciones Rápidas</h3>
              <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                <TrendingUp className="w-5 h-5 neumorph-icon" />
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setShowMembershipModal(true)}
                className="w-full p-4 neumorph-button group"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 neumorph-icon" />
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                    Ver Membresías
                  </span>
                </div>
              </button>
              <button
                onClick={() => setShowCourtModal(true)}
                className="w-full p-4 neumorph-button group"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 neumorph-icon" />
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                    Reservar Pista
                  </span>
                </div>
              </button>
              <button
                onClick={() => setShowClassModal(true)}
                className="w-full p-4 neumorph-button group"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 neumorph-icon" />
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                    Reservar Clase
                  </span>
                </div>
              </button>
              <button
                onClick={() => navigate('/wellness')}
                className="w-full p-4 neumorph-button group"
              >
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-5 h-5 neumorph-icon" />
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                    Área Wellness
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}