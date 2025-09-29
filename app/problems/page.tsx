"use client"

import { Navigation } from "@/components/navigation"
import {
  Brain,
  Smartphone,
  Shield,
  Heart,
  GraduationCap,
  ShoppingCart,
  Gamepad2,
  Building,
  Users,
  Calendar,
  FileText,
  Target,
  Sparkles,
} from "lucide-react"

export default function ProblemsPage() {
  const problemStatements = [
    {
      id: 1,
      title: "AI-Enhanced Autonomous Navigation for Space Missions",
      category: "Aerospace & Defense",
      icon: Building,
      description:
        "Lockheed Martin Space Systems requires an AI pipeline for autonomous spacecraft navigation using multi-sensor data, integrating machine learning with physics-based simulations for real-time path planning, obstacle avoidance, and decision-making under uncertainty, prioritizing efficiency, accuracy, and robustness.",
    },
    {
      id: 2,
      title: "Market Impact Modelling with ML-Augmented Almgren-Chriss Execution",
      category: "Finance",
      icon: Shield,
      description:
        "Goldman Sachs aims to enhance market execution using machine learning to address complex, non-linear market impact functions and adapt to liquidity changes. By treating execution as a data-driven optimization problem under uncertainty, they seek to dynamically balance cost and risk. This initiative could save tens to hundreds of millions annually.",
    },
    {
      id: 3,
      title: "FinSight - AI for Proactive Money Management",
      category: "Finance",
      icon: Heart,
      description:
        "Build an AI system that analyzes transaction history along with contextual signals — such as calendar events, location, mood, or shared group expenses — to predict risky spending moments, suggest proactive savings strategies, and recommend fair adjustments for collaborative finances. The solution should empower users to make smarter, context-aware financial decisions.",
    },
    {
      id: 4,
      title: "Multi-Agent AI for Planning",
      category: "Business & Operations Management",
      icon: Users,
      description:
        "Design a multi-agent AI system to solve a complex planning problem. Create at least three agents with distinct personas and constraints (e.g., 'Budget Bot,' 'Marketing Maven,' 'Logistics Lead') that must negotiate with each other to produce a valid and optimal plan for a given scenario, such as launching a product.",
    },
    {
      id: 5,
      title: "AI-Powered Fashion Platform: Personalized Styling & Outfit Optimization",
      category: "Business & Operations Management",
      icon: ShoppingCart,
      description:
        "Develop an AI-powered SaaS fashion platform for personalized styling and outfit optimization. This platform will analyze body proportions, predict evolving style preferences, evaluate fabric comfort, and adapt to real-time trends. It will uniquely score outfit combinations to generate mix-and-match recommendations that optimize aesthetics, comfort, and social acceptance.",
    },
    {
      id: 6,
      title: "Adaptive ML for Insider Threat Detection",
      category: "Cybersecurity",
      icon: Brain,
      description:
        "Build an adaptive machine learning system that proactively detects and predicts insider threats. The system must analyze anomalous patterns in employee behavior across diverse data sources—including structured logs, communications, and system metadata—to generate real-time risk scores.",
    },
    {
      id: 7,
      title: "Federated Causal Discovery for Drug Interaction Safety in Polypharmacy",
      category: "Bio-Medical",
      icon: Heart,
      description:
        "Pfizer: Develop a privacy-preserving Federated Causal Discovery (FCD) ML framework that accurately identifies causal Drug-Drug Interactions (DDIs) leading to adverse events in polypharmacy patients. This framework must enable multiple independent hospitals to collaboratively train a global causal model on decentralized patient data without exchanging sensitive raw patient information.",
    },
    {
      id: 8,
      title: "Classical ML for Gene Analysis",
      category: "Bio-Medical",
      icon: GraduationCap,
      description:
        "Develop an evolutionary classical machine learning (ML) software platform to rapidly and cost-effectively identify faulty genes and predict gene expression/variant detection from massive human genomic datasets. The core challenge is designing efficient and scalable classical ML models capable of processing and extracting complex genetic features at a significantly faster rate than current analytical methods.",
    },
    {
      id: 9,
      title: "QuantumGuard - AI for QRNG Analysis",
      category: "Quantum Computing",
      icon: Gamepad2,
      description:
        "True randomness is essential for cryptography, simulations, and secure systems, but subtle biases or patterns in quantum random number generators (QRNGs) can compromise reliability. Build an AI that analyzes QRNG outputs in near real-time, detects anomalies or hidden correlations, and provides actionable insights to ensure high-quality, trustworthy randomness.",
    },
    {
      id: 10,
      title: "End-to-End Quantum-ML for Sparse Particle Track Reconstruction",
      category: "Quantum Computing",
      icon: Smartphone,
      description:
        "CERN is developing an end-to-end Quantum-ML approach for the challenging task of sparse particle track reconstruction. This innovative method aims to leverage quantum machine learning techniques to process the sparse data generated in particle detectors. The goal is to improve the efficiency and accuracy of identifying and reconstructing particle trajectories in high-energy physics experiments.",
    },
  ]

  const rules = [
    {
      icon: Users,
      title: "Team Formation",
      items: [
        "Teams of 4 members",
        "Interdepartment teams from 2nd-4th years",
        "Each team can choose only one problem statement",
        "Shortlisted teams pay ₹200 per head to confirm registration",
      ],
    },
    {
      icon: FileText,
      title: "Abstract Submission",
      items: [
        "Abstracts must be between 150-300 words",
        "Submit through the registration forms",
        "Teams shortlisted based on abstracts",
        "Evaluated on relevance, innovation, and technical feasibility",
      ],
    },
    {
      icon: Target,
      title: "Judging Criteria",
      items: [
        "Relevance to Problem Statement",
        "Innovation & Creativity",
        "Technical Feasibility",
        "Clarity of Abstract",
        "Impact & Applicability",
      ],
    },
    {
      icon: Calendar,
      title: "Important Dates",
      items: [
        "Registration and abstract submission until Oct 5, 2025",
        "Results for shortlisted teams Oct 7, 2025",
        "Closure of registration for shortlisted teams Oct 9, 2025",
        "Competition Oct 11-12, 2025",
      ],
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
                <span className="text-sm text-white/70 uppercase tracking-wider">10 Challenges</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Problem Statements
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Choose your challenge and showcase your innovative solutions. Each problem is designed to push the boundaries of AI and machine learning.
              </p>
            </div>
          </div>
        </section>

        {/* Problems Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6">
              {problemStatements.map((problem) => {
                const IconComponent = problem.icon
                return (
                  <div
                    key={problem.id}
                    className="group relative border border-white/20 bg-gradient-to-br from-white/[0.05] to-black/30 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="grid md:grid-cols-[auto_1fr] gap-6">
                        {/* Left side: Number, Icon and Category */}
                        <div className="flex md:flex-col items-start gap-4">
                          {/* Number Badge */}
                          <div className="w-12 h-12 border-2 border-white/30 bg-black flex items-center justify-center group-hover:border-white/60 transition-all flex-shrink-0">
                            <span className="text-xl font-bold text-white/80">{problem.id.toString().padStart(2, '0')}</span>
                          </div>
                          
                          {/* Icon */}
                          <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white/80" />
                          </div>
                        </div>

                        {/* Right side: Content */}
                        <div className="space-y-3">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-white/50 uppercase tracking-wider">
                              {problem.category}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white/90 transition-colors leading-tight">
                              {problem.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="pt-20 pb-40 sm:pb-48 px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Competition Rules
              </h2>
              <p className="text-base sm:text-lg text-white/60">
                Everything you need to know before participating
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule, index) => {
                const IconComponent = rule.icon
                return (
                  <div
                    key={index}
                    className="border border-white/20 bg-gradient-to-br from-black/30 to-white/[0.05] hover:border-white/40 transition-all group"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 p-6 border-b border-white/10">
                      <div className="w-12 h-12 border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all">
                        <IconComponent className="w-6 h-6 text-white/80" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{rule.title}</h3>
                    </div>

                    {/* Items */}
                    <div className="p-6 space-y-4">
                      {rule.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                          <p className="text-sm text-white/70 leading-relaxed flex-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
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
                  Ready to Take on the Challenge?
                </h2>
                <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                  Pick your problem statement, assemble your team, and start building the future of AI.
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