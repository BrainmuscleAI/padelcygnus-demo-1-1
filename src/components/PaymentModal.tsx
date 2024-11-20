import { X, CreditCard, User } from 'lucide-react'
import { useState } from 'react'
import { useMembershipStore } from '../store/membershipStore'

export function PaymentModal() {
  const { showPaymentModal, setShowPaymentModal, selectedPlan } = useMembershipStore()
  const [step, setStep] = useState<'account' | 'payment'>('account')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })

  if (!showPaymentModal) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'account') {
      setStep('payment')
    } else {
      // Handle payment submission
      setShowPaymentModal(false)
    }
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50 transition-all duration-300">
      <div className="w-full max-w-md p-8 neumorph bg-white/60 relative backdrop-blur-md">
        <button
          onClick={() => setShowPaymentModal(false)}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 neumorph-avatar flex items-center justify-center">
            {step === 'account' ? (
              <User className="w-8 h-8 neumorph-icon" />
            ) : (
              <CreditCard className="w-8 h-8 neumorph-icon" />
            )}
          </div>
        </div>

        <h2 className="text-2xl font-semibold gradient-text text-center mb-6">
          {step === 'account' ? 'Crear Cuenta' : 'Método de Pago'}
        </h2>
        <p className="text-center text-[var(--text-secondary)] mb-6">
          {selectedPlan === 'basic' ? 'Membresía Básica - €49.99/mes' : 'Membresía Premium - €79.99/mes'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 'account' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 neumorph-inset focus:outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 neumorph-inset focus:outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-4 neumorph-inset focus:outline-none"
                  placeholder="Contraseña"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 neumorph-inset focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Fecha de Expiración
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="w-full p-4 neumorph-inset focus:outline-none"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="w-full p-4 neumorph-inset focus:outline-none"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-4 neumorph-button font-medium hover:translate-y-[-2px] transition-transform"
          >
            {step === 'account' ? 'Continuar' : 'Confirmar Pago'}
          </button>
        </form>
      </div>
    </div>
  )
}