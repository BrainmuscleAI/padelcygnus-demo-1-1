import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  icon?: React.ElementType
  className?: string
}

export function Modal({ isOpen, onClose, children, title, icon: Icon, className }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className={cn(
                "w-full max-w-lg rounded-xl border-4 border-blue-400/30 bg-white/60 backdrop-blur-[60px] shadow-xl p-8 relative",
                className
              )}
            >
              {(title || Icon) && (
                <div className="flex items-center gap-4 mb-6">
                  {Icon && (
                    <div className="w-12 h-12 neumorph-avatar flex items-center justify-center">
                      <Icon className="w-6 h-6 neumorph-icon" />
                    </div>
                  )}
                  {title && <h2 className="text-2xl font-semibold gradient-text">{title}</h2>}
                </div>
              )}
              
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 neumorph-button hover:scale-105 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>

              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}