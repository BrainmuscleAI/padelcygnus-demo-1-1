import { X } from 'lucide-react'
import { useMembershipStore } from '../store/membershipStore'
import { PaymentModal } from './PaymentModal'

export function MembershipModal() {
  const { 
    showMembershipModal, 
    setShowMembershipModal, 
    setShowPaymentModal,
    setSelectedPlan 
  } = useMembershipStore()

  if (!showMembershipModal) return null

  const handleSelectPlan = (plan: 'basic' | 'premium') => {
    setSelectedPlan(plan)
    setShowPaymentModal(true)
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50 transition-all duration-300">
      <div className="w-full max-w-2xl p-8 neumorph bg-white/60 relative backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <button
          onClick={() => setShowMembershipModal(false)}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold gradient-text mb-6">Planes de Membresía</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 neumorph hover-lift bg-white">
            <h3 className="text-xl font-semibold mb-2">Membresía Básica</h3>
            <p className="text-3xl font-bold gradient-text mb-4">€49.99<span className="text-sm text-gray-600">/mes</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Acceso a pistas de pádel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Reservas con descuento
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Acceso a piscina
              </li>
            </ul>
            <button 
              onClick={() => handleSelectPlan('basic')}
              className="w-full py-3 neumorph-button hover:translate-y-[-2px] transition-transform"
            >
              Seleccionar Plan
            </button>
          </div>

          <div className="p-6 neumorph hover-lift bg-white">
            <h3 className="text-xl font-semibold mb-2">Membresía Premium</h3>
            <p className="text-3xl font-bold gradient-text mb-4">€79.99<span className="text-sm text-gray-600">/mes</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Todo lo de Básica
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Acceso ilimitado al área Wellness
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Clases grupales incluidas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Reserva prioritaria
              </li>
            </ul>
            <button 
              onClick={() => handleSelectPlan('premium')}
              className="w-full py-3 neumorph-button hover:translate-y-[-2px] transition-transform"
            >
              Seleccionar Plan
            </button>
          </div>
        </div>
      </div>
      <PaymentModal />
    </div>
  )
}