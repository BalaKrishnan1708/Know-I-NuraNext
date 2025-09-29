"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { FloatingActionButton } from "@/components/floating-action-button"
import { TextParticle } from "@/components/ui/text-particle"
import { DottedSurface } from "@/components/dotted-surface"
import { Timeline } from "@/components/timeline"
import { Calendar, MapPin, Trophy, Users, Target, Brain, Clock, Sparkles, Zap, Award, BookOpen, Lightbulb, GitBranch, Presentation, Scale, Rocket, GraduationCap, Building2, Network, Shield, Heart, Smartphone, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const sponsors = [
    { name: "TechCorp", logo: "/tech-company-logo.jpg" },
    { name: "InnovateLab", logo: "/innovation-lab-logo.png" },
    { name: "CodeMasters", logo: "/coding-company-logo.jpg" },
    { name: "FutureTech", logo: "/future-technology-logo.jpg" },
  ]

  return (
    <React.Fragment>
      <DottedSurface className="fixed inset-0 z-0" />
      <div className="min-h-screen relative z-10">
        <Navigation />
        <FloatingActionButton />

        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
          {/* Radial gradient glow effect */}
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute inset-0 flex items-center justify-center',
            )}
          >
            <div
              className={cn(
                'absolute size-full',
                'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_50%)]',
                'blur-[120px]',
              )}
            />
          </div>
          <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/logo-kowni.png" 
                alt="NeuroNexus Logo" 
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-6 brightness-0 invert"
              />
<div className="mx-auto w-full max-w-5xl h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px]">
                <TextParticle
                  text="NeuroNexus '25"
                  fontSize={150}
                  fontFamily="Inter, system-ui, sans-serif"
                  particleSize={2}
                  particleColor="#ffffff"
                  particleDensity={6}
                  backgroundColor="transparent"
                />
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-balance px-4">
                <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/90">
                  Where Infinity Meets Innovation
                </span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-balance px-4">
                <span className="inline-block px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80">
                  A 24-hour machine learning intercollege hackathon
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 px-4">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-sm sm:text-base w-full sm:w-auto">
                <Calendar className="w-4 h-4" />
                <span>October 11-12, 2025</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-sm sm:text-base w-full sm:w-auto">
                <MapPin className="w-4 h-4" />
                <a 
                  href="https://maps.app.goo.gl/RzsztAzGNu4ZjX6W8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Yuniq, TICEL Park, Tharamani
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="https://forms.gle/Hx4WotZesxX5mgZH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 transition-all hover:gap-3 group w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base font-medium">Register Now</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="/problems"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 transition-all hover:gap-3 group w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base font-medium">View Challenges</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          </div>
        </section>

      {/* Know I Club Promotion */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Label with icon */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo-kowni.png" 
                alt="Know I Club" 
                className="h-8 sm:h-10 w-auto opacity-80"
              />
              <p className="text-sm sm:text-base text-white/60 tracking-wide uppercase">Know I Club</p>
            </div>
            
            {/* Main content with animation */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight animate-fade-in">
                Unleash your potential in Machine Learning.
                <br />
                <span className="text-white/70">Join the ultimate 24-hour hackathon and transform innovation into reality.</span>
              </h2>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://knowi-2025.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 transition-all hover:gap-3 group"
              >
                <span className="text-sm sm:text-base font-medium">Visit Know I Club</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Details - Bento Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm text-white/50 uppercase tracking-wider">Overview</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              About NeuroNexus
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-4xl leading-relaxed">
              A 24-hour Machine Learning Hackathon where innovation meets execution. 
              Collaborate with brilliant minds, solve real-world challenges, and push the boundaries of AI.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-fr">
            {/* Machine Learning - Large */}
            <div className="md:col-span-3 md:row-span-2 border border-white/25 bg-gradient-to-br from-white/[0.08] to-black/40 p-3 group hover:border-white/50 transition-all">
              <Brain className="w-6 h-6 mb-1.5 text-white/90" />
              <h3 className="text-lg font-bold text-white mb-1">Machine Learning</h3>
              <p className="text-sm text-white/70">
                Dive deep into ML algorithms and create intelligent solutions that push the boundaries of AI.
              </p>
            </div>

            {/* 24-Hour Sprint */}
            <div className="md:col-span-3 border border-white/25 bg-gradient-to-br from-black/40 to-white/[0.08] p-3 group hover:border-white/50 transition-all">
              <Clock className="w-6 h-6 mb-1.5 text-white/90" />
              <h3 className="text-base font-bold text-white mb-1">24-Hour Sprint</h3>
              <p className="text-sm text-white/70">
                Intensive hackathon where teams collaborate to build innovative ML solutions.
              </p>
            </div>

            {/* Cash Prizes */}
            <div className="md:col-span-3 border border-white/25 bg-gradient-to-br from-white/[0.08] to-black/40 p-3 group hover:border-white/50 transition-all">
              <Trophy className="w-6 h-6 mb-1.5 text-white/90" />
              <h3 className="text-base font-bold text-white mb-1">Cash Prizes</h3>
              <p className="text-sm text-white/70">
                Compete for exciting cash prizes and recognition for the most innovative teams.
              </p>
            </div>

            {/* What to Expect - Expanded Layout */}
            <div className="md:col-span-6 border-2 border-white/20 bg-gradient-to-r from-white/[0.07] via-black/30 to-white/[0.07] p-4 hover:border-white/35 transition-all">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-white/90" />
                    <h3 className="text-base font-bold text-white">What to Expect</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Experience an immersive hackathon with cutting-edge challenges, expert guidance, and endless opportunities to innovate.
                  </p>
                </div>
                <div className="md:col-span-8 grid sm:grid-cols-2 gap-3">
                  <div className="space-y-2.5">
                    <div className="bg-white/[0.03] border border-white/10 p-2.5 hover:border-white/25 transition-all rounded">
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Real-World Challenges</h4>
                          <p className="text-xs text-white/60 mt-0.5">Tackle industry problems</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 p-2.5 hover:border-white/25 transition-all rounded">
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">24-Hour Sprint</h4>
                          <p className="text-xs text-white/60 mt-0.5">Non-stop intensive hacking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="bg-white/[0.03] border border-white/10 p-2.5 hover:border-white/25 transition-all rounded">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Expert Mentorship</h4>
                          <p className="text-xs text-white/60 mt-0.5">Guidance from ML pros</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 p-2.5 hover:border-white/25 transition-all rounded">
                      <div className="flex items-start gap-2">
                        <Network className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Networking</h4>
                          <p className="text-xs text-white/60 mt-0.5">Connect with AI enthusiasts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition Format - Expanded Layout */}
            <div className="md:col-span-3 border border-white/20 bg-gradient-to-tl from-black/35 via-white/[0.05] to-black/35 p-3 hover:border-white/35 transition-all">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-white/90" />
                  <h3 className="text-base font-bold text-white">Format</h3>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-black/20 border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Users className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Team Structure</h4>
                    <p className="text-xs text-white/60 mt-0.5">4 members</p>
                  </div>
                  <div className="bg-black/20 border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Brain className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Development</h4>
                    <p className="text-xs text-white/60 mt-0.5">Build & train</p>
                  </div>
                  <div className="bg-black/20 border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Presentation className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Presentation</h4>
                    <p className="text-xs text-white/60 mt-0.5">Pitch solution</p>
                  </div>
                  <div className="bg-black/20 border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Scale className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Evaluation</h4>
                    <p className="text-xs text-white/60 mt-0.5">Expert judging</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why NeuroNexus - Expanded Layout */}
            <div className="md:col-span-3 border border-white/20 bg-gradient-to-tr from-white/[0.06] via-black/30 to-white/[0.06] p-3 hover:border-white/35 transition-all">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-white/90" />
                  <h3 className="text-base font-bold text-white">Why Join?</h3>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-white/[0.04] border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Rocket className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Cutting-Edge</h4>
                    <p className="text-xs text-white/60 mt-0.5">Quantum, Bio-AI</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Award className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Rewards</h4>
                    <p className="text-xs text-white/60 mt-0.5">Prizes & swags</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <Target className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Real Problems</h4>
                    <p className="text-xs text-white/60 mt-0.5">Industry-level</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2 rounded hover:border-white/25 transition-all">
                    <GraduationCap className="w-4 h-4 text-white/80 mb-1" />
                    <h4 className="text-xs font-semibold text-white">Career Growth</h4>
                    <p className="text-xs text-white/60 mt-0.5">Networking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm text-white/50 uppercase tracking-wider">Timeline</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Event Schedule
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-4xl leading-relaxed">
              Stay updated with important dates and milestones for NeuroNexus 2025
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Challenge Domains */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm text-white/50 uppercase tracking-wider">Challenges</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Problem Domains
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-4xl leading-relaxed">
              Explore cutting-edge challenges across six major domains. Choose your battlefield and innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Quantum Computing */}
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-3 hover:border-white/40 transition-all group">
              <Gamepad2 className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">Quantum Computing</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                QRNG analysis, quantum-ML for particle physics
              </p>
              <div className="text-xs text-white/50">2 Problem Statements</div>
            </div>

            {/* Bio-Medical */}
            <div className="border border-white/20 bg-gradient-to-br from-black/30 to-white/[0.06] p-3 hover:border-white/40 transition-all group">
              <Heart className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">Bio-Medical AI</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                Drug interaction discovery, gene analysis with ML
              </p>
              <div className="text-xs text-white/50">2 Problem Statements</div>
            </div>

            {/* Finance */}
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-3 hover:border-white/40 transition-all group">
              <Shield className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">FinTech & Trading</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                Market execution optimization, proactive money management
              </p>
              <div className="text-xs text-white/50">2 Problem Statements</div>
            </div>

            {/* Aerospace & Defense */}
            <div className="border border-white/20 bg-gradient-to-br from-black/30 to-white/[0.06] p-3 hover:border-white/40 transition-all group">
              <Building2 className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">Aerospace & Defense</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                AI-enhanced autonomous spacecraft navigation
              </p>
              <div className="text-xs text-white/50">1 Problem Statement</div>
            </div>

            {/* Cybersecurity */}
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.06] to-black/30 p-3 hover:border-white/40 transition-all group">
              <Brain className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">Cybersecurity</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                Adaptive ML for insider threat detection
              </p>
              <div className="text-xs text-white/50">1 Problem Statement</div>
            </div>

            {/* Business & Operations */}
            <div className="border border-white/20 bg-gradient-to-br from-black/30 to-white/[0.06] p-3 hover:border-white/40 transition-all group">
              <Smartphone className="w-6 h-6 mb-1.5 text-white/85 group-hover:text-white transition-colors" />
              <h3 className="text-base font-bold text-white mb-1">Business & Operations</h3>
              <p className="text-sm text-white/70 mb-2 leading-relaxed">
                Multi-agent AI planning, fashion platform optimization
              </p>
              <div className="text-xs text-white/50">2 Problem Statements</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/problems"
              className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 transition-all hover:gap-3 group"
            >
              <span className="text-sm font-medium">Explore All Problem Statements</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Sponsors & Partners
            </h2>
            <p className="text-sm text-white/60">Powered by industry leaders who believe in innovation</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="p-6 flex items-center justify-center h-24">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="border-t border-white/10 p-3 text-center">
                  <p className="text-sm font-semibold text-white/80">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-40 sm:pb-48 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-sm text-white/50 uppercase tracking-wider">FAQ</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-4xl leading-relaxed">
              Get answers to common questions about NeuroNexus
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">Can I participate individually?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  No, this is a team-based competition. Teams must have 4 members to encourage collaboration and diverse skill sets.
                </p>
              </div>
            </div>
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">What if my team can't complete the solution in time?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Partial solutions are accepted. Focus on demonstrating your approach, problem-solving skills, and what you've accomplished within the timeframe.
                </p>
              </div>
            </div>
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">Are there any restrictions on technology stack?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  No restrictions! Use any programming languages, frameworks, or tools that best suit your solution. However, ensure your solution can be demonstrated during the presentation.
                </p>
              </div>
            </div>
            <div className="border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">What are the prizes?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Cash prizes, certificates, and internship opportunities with our sponsor companies. Detailed prize structure will be announced during the opening ceremony.
                </p>
              </div>
            </div>
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
                Ready to Join the Challenge?
              </h2>
              <p className="text-base sm:text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                Register now and be part of this incredible 24-hour ML hackathon experience.
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
    </React.Fragment>
  )
}
