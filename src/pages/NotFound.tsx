import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 neumorph-sm p-8">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-3 neumorph hover-lift inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  )
}