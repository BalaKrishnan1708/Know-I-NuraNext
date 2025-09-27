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
      title: "Quantum Machine Learning for Drug Discovery",
      category: "Quantum Computing & Biomedical AI",
      icon: Heart,
      description:
        "Develop a quantum machine learning algorithm to accelerate drug discovery by predicting molecular properties and interactions. The solution should leverage quantum computing principles to solve complex optimization problems in pharmaceutical research.",
    },
    {
      id: 2,
      title: "AI-Powered Financial Risk Assessment",
      category: "FinTech",
      icon: Shield,
      description:
        "Create an intelligent system that uses machine learning to assess financial risks in real-time, including credit scoring, fraud detection, and market volatility prediction. The system should integrate with existing financial databases and provide actionable insights.",
    },
    {
      id: 3,
      title: "Biomedical Image Analysis for Disease Detection",
      category: "Biomedical AI",
      icon: Brain,
      description:
        "Build a deep learning model that can analyze medical images (X-rays, MRIs, CT scans) to detect diseases and abnormalities. The solution should provide high accuracy, explainable results, and integrate with hospital management systems.",
    },
    {
      id: 4,
      title: "Quantum-Enhanced Portfolio Optimization",
      category: "Quantum Computing & FinTech",
      icon: Leaf,
      description:
        "Design a quantum algorithm for portfolio optimization that considers multiple risk factors, market conditions, and investment constraints. The solution should outperform classical optimization methods and provide real-time portfolio recommendations.",
    },
    {
      id: 5,
      title: "AI-Driven Personalized Medicine",
      category: "Biomedical AI",
      icon: GraduationCap,
      description:
        "Develop a machine learning system that personalizes treatment plans based on patient genetics, medical history, and lifestyle factors. The solution should predict drug responses and recommend optimal treatment strategies.",
    },
    {
      id: 6,
      title: "Quantum Cryptography for Financial Security",
      category: "Quantum Computing & FinTech",
      icon: ShoppingCart,
      description:
        "Create a quantum cryptography system for secure financial transactions and data protection. The solution should implement quantum key distribution and quantum-resistant encryption for banking and fintech applications.",
    },
    {
      id: 7,
      title: "AI-Powered Drug Interaction Predictor",
      category: "Biomedical AI",
      icon: Brain,
      description:
        "Build an AI system that predicts drug-drug interactions and adverse effects by analyzing molecular structures, patient data, and clinical outcomes. The solution should help healthcare providers make safer prescription decisions.",
    },
    {
      id: 8,
      title: "Quantum Machine Learning for Market Prediction",
      category: "Quantum Computing & FinTech",
      icon: Building,
      description:
        "Develop a quantum machine learning model for predicting financial market trends and stock prices. The solution should leverage quantum algorithms to process large-scale financial data and provide accurate predictions.",
    },
    {
      id: 9,
      title: "AI-Enhanced Medical Diagnosis Assistant",
      category: "Biomedical AI",
      icon: Gamepad2,
      description:
        "Create an AI-powered diagnostic assistant that helps doctors analyze symptoms, medical history, and test results to suggest possible diagnoses. The system should provide confidence scores and reasoning for its recommendations.",
    },
    {
      id: 10,
      title: "Quantum-Enhanced Fraud Detection",
      category: "Quantum Computing & FinTech",
      icon: Smartphone,
      description:
        "Develop a quantum-enhanced fraud detection system for financial transactions that can identify complex fraud patterns and anomalies in real-time. The solution should use quantum algorithms to process large datasets efficiently.",
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
