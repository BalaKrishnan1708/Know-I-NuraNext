import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Smartphone,
  Shield,
  Leaf,
  Heart,
  GraduationCap,
  ShoppingCart,
  Gamepad2,
  Car,
  Building,
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Hard":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-primary">
            Problem Statements
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Choose your challenge and showcase your innovative solutions. Each problem is designed to test different
            aspects of modern technology development.
          </p>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/logo-kowni.png" 
                alt="Know I Club" 
                className="h-8 w-auto"
              />
              <p className="text-lg text-primary">
                Organized by <span className="font-bold glow-purple">Know I Club</span> of SVCE
              </p>
            </div>
            <Button variant="outline" className="bg-transparent" asChild>
              <a
                href="https://knowi-2025.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Know I Club
              </a>
            </Button>
          </div>
          <Button size="lg" className="text-lg px-8 py-4 animate-glow" asChild>
            <a
              href="https://forms.gle/Hx4WotZesxX5mgZH6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register to Participate
            </a>
          </Button>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {problemStatements.map((problem, index) => {
              const IconComponent = problem.icon
              return (
                <Card
                  key={problem.id}
                  className="group hover:scale-105 transition-all duration-300 animate-float border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          PS #{problem.id.toString().padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {problem.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{problem.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Competition <span className="text-primary">Rules</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Team Formation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Teams of 4 members</p>
                <p>• Interdepartment teams from 2nd-4th years</p>
                <p>• Each team can choose only one problem statement</p>
                <p>• Shortlisted teams are requested to pay ₹200 per head to confirm registration</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Abstract Submission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Abstracts must be between 150-300 words</p>
                <p>• Abstracts are to be submitted through the registration forms</p>
                <p>• Teams will be shortlisted based on their abstracts</p>
                <p>• Evaluation based on relevance, innovation, and technical feasibility</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Judging Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Relevance to Problem Statement</p>
                <p>• Innovation & Creativity</p>
                <p>• Technical Feasibility</p>
                <p>• Clarity of Abstract</p>
                <p>• Impact & Applicability</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Registration and abstract submission until Oct 5, 2025</p>
                <p>• Results for shortlisted teams Oct 7, 2025</p>
                <p>• Closure of registration for shortlisted teams Oct 9, 2025</p>
                <p>• Competition Oct 11-12, 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to <span className="text-primary">Code</span> Your Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Pick your challenge, form your team, and let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-xl px-12 py-6 animate-glow" asChild>
              <a
                href="https://forms.gle/Hx4WotZesxX5mgZH6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Your Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 NeuroNexus - Organized by Know I Club, SVCE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
