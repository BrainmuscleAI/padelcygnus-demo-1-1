import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
    const from = location.state?.from?.pathname || '/'
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen bg-[var(--surface-color)] flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 neumorph">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 neumorph-avatar flex items-center justify-center mb-6">
            <Lock className="w-10 h-10 neumorph-icon" />
          </div>
          <h2 className="text-2xl font-semibold gradient-text">Padel Cygnus</h2>
          <p className="text-[var(--text-secondary)] mt-2">Inicia sesión en tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 neumorph-inset focus:outline-none"
              placeholder="Introduce tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 neumorph-button font-medium"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}