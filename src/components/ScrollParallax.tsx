import { useEffect, useRef } from 'react'

export function useParallax() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrolled = window.scrollY
      parallaxRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0) scale(1.1)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return parallaxRef
}