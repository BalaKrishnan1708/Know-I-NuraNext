"use client"

import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { Mail, Phone, MapPin, Sparkles } from "lucide-react"

export default function ContactPage() {
  const contacts = [
    {
      name: "Arunima",
      role: "President",
      email: "2022ad0589@svce.ac.in",
      phone: "+91 98400 73069",
    },
    {
      name: "Adithi",
      role: "Vice President - Planning and Operations",
      email: "2023cs0869@svce.ac.in",
      phone: "+91 99949 02039",
    },
    {
      name: "Ajay",
      role: "Vice President - Research",
      email: "2022ad0823@svce.ac.in",
      phone: "+91 75300 54065",
    },
    {
      name: "Clarinda Susan",
      role: "Secretary",
      email: "2022ad0599@svce.ac.in",
      phone: "+91 94441 04800",
    },
  ]

  const faqs = [
    {
      question: "Can I participate individually?",
      answer:
        "No, this is a team-based competition. Teams must have 4 members to encourage collaboration and diverse skill sets.",
    },
    {
      question: "What if my team can't complete the solution in time?",
      answer:
        "Partial solutions are accepted. Focus on demonstrating your approach, problem-solving skills, and what you've accomplished within the timeframe.",
    },
    {
      question: "Are there any restrictions on technology stack?",
      answer:
        "No restrictions! Use any programming languages, frameworks, or tools that best suit your solution. However, ensure your solution can be demonstrated during the presentation.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Cash prizes, certificates, and internship opportunities with our sponsor companies. Detailed prize structure will be announced during the opening ceremony.",
    },
  ]

  return (
    <div className="min-h-screen relative bg-black">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-white/[0.02] via-black to-white/[0.01]" />
      <div className="relative z-10">
      <Navigation />

      {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/70 uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Timeline & Contact
          </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Stay updated with important dates and reach out to our team for any queries
              </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Event Timeline
          </h2>
              <p className="text-base sm:text-lg text-white/60">
                Mark your calendars for these important dates
              </p>
            </div>
            <Timeline />
        </div>
      </section>

        {/* Venue Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Venue
          </h2>
            </div>
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white/80" />
                  </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Yuniq</h3>
                    <p className="text-base text-white/70">TICEL Park, Tharamani, Chennai</p>
                  <a 
                    href="https://maps.app.goo.gl/RzsztAzGNu4ZjX6W8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white px-4 py-2 mt-4 transition-all text-sm"
                  >
                      View on Google Maps →
                  </a>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="text-sm text-white/50 uppercase tracking-wider mb-2">Facilities</h4>
                    <div className="space-y-1">
                      <p className="text-sm text-white/70">• High-speed Internet</p>
                      <p className="text-sm text-white/70">• Food & Refreshments</p>
                      <p className="text-sm text-white/70">• Power Outlets</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/50 uppercase tracking-wider mb-2">Timing</h4>
                    <p className="text-sm text-white/70">24 hours (Oct 11, 10 AM - Oct 12, 10 AM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Contact Us
              </h2>
              <p className="text-base sm:text-lg text-white/60">
                Have questions? Reach out to our team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
                <div
                key={index}
                  className="border border-white/20 bg-gradient-to-br from-black/30 to-white/[0.05] hover:border-white/40 transition-all"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                      <p className="text-sm text-white/50 uppercase tracking-wider">{contact.role}</p>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-white/50 flex-shrink-0" />
                    <a
                      href={`mailto:${contact.email}`}
                          className="text-sm text-white/70 hover:text-white transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-white/50 flex-shrink-0" />
                    <a
                      href={`tel:${contact.phone}`}
                          className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {contact.phone}
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <section className="pt-16 pb-40 sm:pb-48 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                FAQ
          </h2>
              <p className="text-base sm:text-lg text-white/60">
                Frequently asked questions
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Overlaid CTA */}
        <footer className="relative pt-64 sm:pt-72 pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-visible">
          {/* Large Watermark Text */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden px-4">
            <h2 
              className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-transparent whitespace-nowrap select-none"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',
                letterSpacing: '-0.05em',
              }}
            >
              NEURONEXUS
            </h2>
          </div>

          {/* Overlaid CTA Section */}
          <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="border border-white/30 bg-black/90 backdrop-blur-xl p-8 sm:p-12 text-center shadow-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Join Us?
                </h2>
                <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                  Register now and be part of this amazing ML hackathon
                </p>
                <a
                  href="https://forms.gle/Hx4WotZesxX5mgZH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white hover:bg-white/5 px-8 py-4 transition-all hover:gap-3 group text-base font-medium"
                >
                  <span>Register Your Team Now</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Club Logo and Name */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src="/logo-kowni.png" 
                alt="Know I Club" 
                className="h-12 sm:h-16 w-auto opacity-90"
              />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-bold text-white">KNOW I CLUB</h3>
                <p className="text-xs sm:text-sm text-white/60">Sri Venkateswara College of Engineering</p>
          </div>
        </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-white/60">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/problems" className="hover:text-white transition-colors">Problems</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a 
                href="https://knowi-2025.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Know I Club
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-white/40">
              <p>© 2025 NeuroNexus. All rights reserved.</p>
            </div>
        </div>
      </footer>
      </div>
    </div>
  )
}