"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Calendar, Users, CheckCircle, Trophy } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  status: "completed" | "upcoming"
  icon: React.ElementType
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "27th September",
    title: "Problem Statements Release & Registration Opening",
    description: "Problem statements released and registration opens for NeuroNexus 2025",
    status: "completed",
    icon: FileText,
  },
  {
    date: "5th October",
    title: "Abstract Submission Deadline",
    description: "Last day to submit your abstract for the hackathon",
    status: "upcoming",
    icon: Calendar,
  },
  {
    date: "7th October",
    title: "Shortlisting Results",
    description: "Announcement of shortlisted teams for the hackathon",
    status: "upcoming",
    icon: Users,
  },
  {
    date: "9th October",
    title: "Closure of Registration for Shortlisted Teams",
    description: "Last day for shortlisted teams to confirm registration and payment",
    status: "upcoming",
    icon: CheckCircle,
  },
  {
    date: "11th-12th October",
    title: "NeuroNexus Hackathon",
    description: "24-hour Machine Learning hackathon at Yuniq, TICEL Park, Tharamani",
    status: "upcoming",
    icon: Trophy,
  },
]

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => new Set(prev).add(index))
              }
            })
          },
          { threshold: 0.3 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const IconComponent = event.icon
          const isVisible = visibleItems.has(index)

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`relative pl-20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
              <div className="absolute left-0 top-0">
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    event.status === "completed"
                      ? "bg-green-500/20 border-green-500"
                      : "bg-white/10 border-white/30"
                  } ${isVisible ? "scale-100" : "scale-0"}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <IconComponent
                    className={`w-6 h-6 ${
                      event.status === "completed" ? "text-green-400" : "text-white/80"
                    }`}
                  />
                </div>
              </div>

              {/* Content Card */}
              <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mb-2">
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    {event.status === "completed" && (
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs uppercase tracking-wider">
                        Completed
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
