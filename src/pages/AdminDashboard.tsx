import { Users, Calendar, CreditCard, TrendingUp, Settings, AlertCircle, Search, Filter, Download, Trash2 } from 'lucide-react'
import { useState } from 'react'

const USERS = [
  { id: 1, name: 'Ana Martínez', email: 'ana@example.com', membership: 'Premium', status: 'Activo' },
  { id: 2, name: 'Carlos López', email: 'carlos@example.com', membership: 'Básico', status: 'Pendiente' },
  { id: 3, name: 'María García', email: 'maria@example.com', membership: 'Premium', status: 'Activo' },
]

const RECENT_ACTIVITIES = [
  { type: 'user', message: 'Nuevo usuario registrado: Ana Martínez', time: 'Hace 5 minutos', action: 'approve' },
  { type: 'booking', message: 'Conflicto de reserva: Pista 3', time: 'Hace 15 minutos', action: 'resolve' },
  { type: 'payment', message: 'Pago fallido: Membresía Premium', time: 'Hace 1 hora', action: 'review' },
  { type: 'maintenance', message: 'Mantenimiento programado: Pista 2', time: 'Hace 2 horas', action: 'schedule' },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'bookings' | 'maintenance'>('overview')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold gradient-text">Panel de Administración</h1>
        <div className="flex gap-4">
          <button className="p-3 neumorph-button">
            <Download className="w-5 h-5 neumorph-icon" />
          </button>
          <button className="p-3 neumorph-button">
            <Settings className="w-5 h-5 neumorph-icon" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4">
        {[
          { id: 'overview', label: 'Vista General' },
          { id: 'users', label: 'Usuarios' },
          { id: 'bookings', label: 'Reservas' },
          { id: 'maintenance', label: 'Mantenimiento' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 ${
              activeTab === tab.id ? 'neumorph-pressed' : 'neumorph-button'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Usuarios Activos', value: '234', icon: Users, change: '+12% este mes' },
              { label: 'Tasa de Ocupación', value: '78%', icon: Calendar, change: '+5% vs ayer' },
              { label: 'Ingresos Mensuales', value: '€12,450', icon: CreditCard, change: '+8% vs mes anterior' },
              { label: 'Cancelaciones', value: '2.3%', icon: TrendingUp, change: '-1.5% esta semana' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 neumorph hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                    <stat.icon className="w-6 h-6 neumorph-icon" />
                  </div>
                  <span className={`text-sm ${
                    stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>{stat.change}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                <p className="text-2xl font-semibold gradient-text mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="p-6 neumorph">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold gradient-text">Actividad Reciente</h2>
                  <div className="w-10 h-10 neumorph-avatar flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 neumorph-icon" />
                  </div>
                </div>
                <div className="space-y-4">
                  {RECENT_ACTIVITIES.map((activity, index) => (
                    <div
                      key={index}
                      className="p-4 neumorph-pressed"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {activity.type === 'user' && <Users className="w-5 h-5 neumorph-icon" />}
                          {activity.type === 'booking' && <Calendar className="w-5 h-5 neumorph-icon" />}
                          {activity.type === 'payment' && <CreditCard className="w-5 h-5 neumorph-icon" />}
                          <div>
                            <p className="font-medium">{activity.message}</p>
                            <p className="text-sm text-[var(--text-secondary)]">{activity.time}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 neumorph-button text-sm">
                          {activity.action === 'approve' && 'Aprobar'}
                          {activity.action === 'resolve' && 'Resolver'}
                          {activity.action === 'review' && 'Revisar'}
                          {activity.action === 'schedule' && 'Programar'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 neumorph">
              <h2 className="text-xl font-semibold gradient-text mb-6">Acciones Administrativas</h2>
              <div className="space-y-4">
                <button className="w-full p-4 neumorph-button flex items-center gap-3">
                  <Users className="w-5 h-5 neumorph-icon" />
                  <span>Aprobar Usuarios Pendientes (3)</span>
                </button>
                <button className="w-full p-4 neumorph-button flex items-center gap-3">
                  <Calendar className="w-5 h-5 neumorph-icon" />
                  <span>Gestionar Horarios</span>
                </button>
                <button className="w-full p-4 neumorph-button flex items-center gap-3">
                  <CreditCard className="w-5 h-5 neumorph-icon" />
                  <span>Revisar Pagos Pendientes</span>
                </button>
                <button className="w-full p-4 neumorph-button flex items-center gap-3 text-red-500">
                  <AlertCircle className="w-5 h-5" />
                  <span>Incidencias (2)</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'users' && (
        <div className="p-6 neumorph">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
              <input
                type="text"
                placeholder="Buscar usuarios..."
                className="w-full pl-12 p-4 neumorph-inset focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button className="p-3 neumorph-button">
                <Filter className="w-5 h-5 neumorph-icon" />
              </button>
              <button className="px-4 py-2 neumorph-button">
                Exportar Lista
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {USERS.map((user) => (
              <div key={user.id} className="p-4 neumorph flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                    <User className="w-6 h-6 neumorph-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    user.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {user.status}
                  </span>
                  <span className="px-3 py-1 neumorph text-sm">{user.membership}</span>
                  <button className="p-2 neumorph-button text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 neumorph">
            <h3 className="text-xl font-semibold gradient-text mb-6">Mantenimiento Programado</h3>
            <div className="space-y-4">
              <div className="p-4 neumorph-pressed">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Pista 2</h4>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pendiente</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Cambio de red y limpieza general</p>
                <p className="text-sm text-[var(--text-secondary)]">Programado: 15/04/2024</p>
              </div>
              <div className="p-4 neumorph-pressed">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Área Wellness</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completado</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Mantenimiento equipos</p>
                <p className="text-sm text-[var(--text-secondary)]">Realizado: 10/04/2024</p>
              </div>
            </div>
          </div>

          <div className="p-6 neumorph">
            <h3 className="text-xl font-semibold gradient-text mb-6">Reportes de Incidencias</h3>
            <div className="space-y-4">
              <div className="p-4 neumorph-pressed">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Iluminación Pista 4</h4>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Urgente</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Fallo en sistema de iluminación</p>
                <p className="text-sm text-[var(--text-secondary)]">Reportado: Hace 2 horas</p>
                <button className="mt-2 px-4 py-2 neumorph-button text-sm">
                  Asignar Técnico
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}