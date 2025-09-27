import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ParticleBackground } from "@/components/particle-background"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

export const metadata: Metadata = {
  title: "NeuroNexus 2025 - Powerpacked Tech Competition",
  description: "Join the ultimate tech competition by Know I Club of SVCE on October 11-12, 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ParticleBackground />
        <ScrollProgress />
        <InteractiveCursor />
        <div className="relative z-10">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
