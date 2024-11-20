import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <footer className="bg-[var(--surface-color)] py-16">
      <div className="container mx-auto px-4">
        <div className="card-container p-8">
          <div className="neumorph p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold gradient-text">Padel Cygnus</h3>
                <p className="text-[var(--text-secondary)]">
                  Tu destino premium para pádel y bienestar en el corazón de la ciudad.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: '#' },
                    { icon: Facebook, href: '#' },
                    { icon: Twitter, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 neumorph-avatar flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <social.icon className="w-5 h-5 neumorph-icon" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                  {[
                    'Reservas',
                    'Membresías',
                    'Clases',
                    'Área Wellness',
                    'Eventos',
                  ].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Contacto</h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li>+34 912 345 678</li>
                  <li>info@padelcygnus.com</li>
                  <li>Calle Principal 123</li>
                  <li>28001 Madrid, España</li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Newsletter</h4>
                <p className="text-[var(--text-secondary)]">
                  Suscríbete para recibir noticias y ofertas especiales.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="card-container p-1">
                    <div className="relative neumorph-inset flex items-center">
                      <Mail className="absolute left-3 w-5 h-5 text-[var(--text-secondary)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu email"
                        className="w-full pl-12 pr-4 py-3 bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 neumorph-button hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Suscribirse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-[var(--text-secondary)]">
          <p>© {new Date().getFullYear()} Padel Cygnus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}