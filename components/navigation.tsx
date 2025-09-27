"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-primary logo-transparent">
              NeuroNexus
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/problems"
                className="text-foreground hover:text-primary px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Problem Statements
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact & Timeline
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild className="animate-glow text-sm px-3 lg:px-4">
              <a
                href="https://forms.gle/Hx4WotZesxX5mgZH6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md border-b border-border">
            <Link
              href="/"
              className="text-foreground hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/problems"
              className="text-foreground hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Problem Statements
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact & Timeline
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full animate-glow">
                <a
                  href="https://forms.gle/Hx4WotZesxX5mgZH6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
