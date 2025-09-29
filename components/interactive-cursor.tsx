"use client"

import { useEffect, useRef } from "react"

export function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      cursor.style.left = `${cursorX}px`
      cursor.style.top = `${cursorY}px`

      requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = "1"
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"
    }

    const handleMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
    }

    const handleMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    updateCursor()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-3 h-3 bg-white rounded-full opacity-0 transition-all duration-200 shadow-lg"
      style={{ transform: "translate(-50%, -50%)", border: '1px solid rgba(255, 255, 255, 0.3)' }}
    />
  )
}
