"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    let ticking = false
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledUpdate, { passive: true })
    updateScrollProgress() // Initial call
    return () => window.removeEventListener("scroll", throttledUpdate)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translateX(${scrollProgress - 100}%)`,
          width: "100%",
        }}
      />
    </div>
  )
}
