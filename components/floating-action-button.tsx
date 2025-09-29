"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 border border-white/30 bg-black/50 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 group flex items-center justify-center"
      title="Scroll to Top"
    >
      <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
    </button>
  )
}