import { useEffect } from 'react'

// Fades in every .reveal element as it scrolls into view.
// Runs again when the page changes, so pass the current path.
export function useReveal(path: string) {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-visible')
            observer.unobserve(el)
            // Drop the stagger delay once shown, so hover effects are not delayed
            setTimeout(() => { el.style.transitionDelay = '' }, 1200)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [path])
}
