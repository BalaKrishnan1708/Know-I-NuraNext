"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              NeuroNexus
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/problems"
              className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Problems
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <div className="ml-4 pl-4 border-l border-white/10">
              <a
                href="https://forms.gle/Hx4WotZesxX5mgZH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white border border-white/30 hover:border-white px-4 py-2 text-xs font-medium transition-all hover:gap-2 group"
              >
                <span>Register</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white p-2 transition-colors">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 space-y-1">
            <Link
              href="/"
              className="text-white/70 hover:text-white block px-3 py-2.5 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/problems"
              className="text-white/70 hover:text-white block px-3 py-2.5 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Problems
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white block px-3 py-2.5 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 mt-3 border-t border-white/10">
              <a
                href="https://forms.gle/Hx4WotZesxX5mgZH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white px-4 py-2.5 text-sm font-medium transition-all hover:gap-3 group w-full"
              >
                <span>Register Now</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
