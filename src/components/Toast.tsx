import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="rounded-xl border-4 border-blue-400/30 bg-white/60 backdrop-blur-[60px] shadow-xl p-4 pr-12 min-w-[300px]">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 p-1.5 neumorph-button hover:scale-105 transition-transform"
            >
              <X className="w-4 h-4" />
            </button>
            <p className={cn(
              "text-sm",
              type === 'success' && "text-green-600",
              type === 'error' && "text-red-600",
              type === 'info' && "text-blue-600"
            )}>
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}