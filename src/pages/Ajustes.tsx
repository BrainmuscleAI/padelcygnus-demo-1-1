import { User, Bell, Lock, Palette, CreditCard, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const SECTIONS = [
  {
    icon: User,
    title: 'Perfil',
    description: 'Gestiona tu información personal',
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Configura tus preferencias de notificación',
  },
  {
    icon: Lock,
    title: 'Seguridad',
    description: 'Actualiza tu contraseña y seguridad',
  },
  {
    icon: Palette,
    title: 'Apariencia',
    description: 'Personaliza la apariencia de la aplicación',
  },
  {
    icon: CreditCard,
    title: 'Facturación',
    description: 'Gestiona tus métodos de pago y facturas',
  },
  {
    icon: HelpCircle,
    title: 'Ayuda',
    description: 'Centro de ayuda y soporte',
  },
]

export function Ajustes() {
  const [activeSection, setActiveSection] = useState('Perfil')

  return (
    <div className="space-y-8">
      <div className="card-container">
        <div className="p-8 neumorph">
          <h2 className="text-2xl font-semibold gradient-text mb-8">Ajustes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.map((section) => (
              <button
                key={section.title}
                onClick={() => setActiveSection(section.title)}
                className={`p-6 text-left transition-all duration-300 ${
                  activeSection === section.title
                    ? 'neumorph-pressed'
                    : 'neumorph hover:translate-y-[-4px]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                    <section.icon className="w-6 h-6 neumorph-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{section.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {section.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeSection === 'Perfil' && (
              <div className="space-y-6">
                <div className="p-6 neumorph">
                  <h3 className="text-lg font-semibold mb-4">Información Personal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full p-4 neumorph-inset focus:outline-none"
                        defaultValue="Usuario Demo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-4 neumorph-inset focus:outline-none"
                        defaultValue="usuario@demo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full p-4 neumorph-inset focus:outline-none"
                        defaultValue="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Nivel de Juego
                      </label>
                      <select className="w-full p-4 neumorph-inset focus:outline-none">
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-3 neumorph-button">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}