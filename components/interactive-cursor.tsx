"use client"

import { useEffect, useRef } from "react"

export function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const trail: HTMLDivElement[] = []

    // Create trail elements
    for (let i = 0; i < 6; i++) {
      const trailElement = document.createElement("div")
      trailElement.className = `fixed pointer-events-none z-50 w-2 h-2 rounded-full transition-all duration-300 opacity-${Math.max(10, 60 - i * 10)}`
      trailElement.style.background = `hsl(${280 + i * 10}, 70%, ${60 + i * 5}%)`
      document.body.appendChild(trailElement)
      trail.push(trailElement)
    }

    trailRef.current = trail

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      cursor.style.left = `${cursorX}px`
      cursor.style.top = `${cursorY}px`

      // Update trail
      trail.forEach((element, index) => {
        const delay = (index + 1) * 0.02
        const trailX = cursorX - (mouseX - cursorX) * delay
        const trailY = cursorY - (mouseY - cursorY) * delay

        element.style.left = `${trailX}px`
        element.style.top = `${trailY}px`
      })

      requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = "1"
      trail.forEach((element) => (element.style.opacity = "0.6"))
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"
      trail.forEach((element) => (element.style.opacity = "0"))
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

      trail.forEach((element) => {
        if (element.parentNode === document.body) {
          document.body.removeChild(element)
        }
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-4 h-4 bg-primary rounded-full opacity-0 transition-all duration-200"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  )
}
