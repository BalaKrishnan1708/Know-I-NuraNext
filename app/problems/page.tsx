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
      title: "AI-Powered Healthcare Assistant",
      category: "Healthcare",
      icon: Heart,
      description:
        "Develop an AI system that can analyze medical symptoms, provide preliminary diagnosis suggestions, and connect patients with appropriate healthcare providers. The system should handle multiple languages and integrate with existing healthcare databases.",
    },
    {
      id: 2,
      title: "Smart City Traffic Management",
      category: "IoT & Smart Cities",
      icon: Car,
      description:
        "Create an intelligent traffic management system that uses real-time data from sensors, cameras, and mobile devices to optimize traffic flow, reduce congestion, and minimize environmental impact in urban areas.",
    },
    {
      id: 3,
      title: "Cybersecurity Threat Detection",
      category: "Security",
      icon: Shield,
      description:
        "Build a comprehensive cybersecurity platform that can detect, analyze, and respond to various types of cyber threats in real-time. Include features for threat intelligence, incident response, and security awareness training.",
    },
    {
      id: 4,
      title: "Sustainable Energy Optimizer",
      category: "Environment",
      icon: Leaf,
      description:
        "Design a system that optimizes energy consumption in buildings by analyzing usage patterns, weather data, and occupancy levels. Include renewable energy integration and carbon footprint tracking.",
    },
    {
      id: 5,
      title: "Personalized Learning Platform",
      category: "Education",
      icon: GraduationCap,
      description:
        "Create an adaptive learning platform that personalizes educational content based on individual learning styles, progress, and preferences. Include gamification elements and progress tracking.",
    },
    {
      id: 6,
      title: "AR Shopping Experience",
      category: "E-commerce",
      icon: ShoppingCart,
      description:
        "Develop an augmented reality application that allows customers to visualize products in their real environment before purchasing. Include features for size comparison, color variations, and social sharing.",
    },
    {
      id: 7,
      title: "Mental Health Support Bot",
      category: "Healthcare",
      icon: Brain,
      description:
        "Build an empathetic chatbot that provides mental health support, mood tracking, and connects users with professional resources. Ensure privacy, security, and crisis intervention capabilities.",
    },
    {
      id: 8,
      title: "Smart Home Automation",
      category: "IoT",
      icon: Building,
      description:
        "Create a comprehensive smart home system that automates lighting, temperature, security, and entertainment systems based on user preferences and occupancy patterns.",
    },
    {
      id: 9,
      title: "Fitness Gamification App",
      category: "Health & Fitness",
      icon: Gamepad2,
      description:
        "Design a mobile application that gamifies fitness activities, includes social challenges, progress tracking, and integrates with wearable devices to encourage healthy lifestyle habits.",
    },
    {
      id: 10,
      title: "Voice-Controlled Assistant",
      category: "AI & Voice",
      icon: Smartphone,
      description:
        "Develop a voice-controlled assistant that can perform various tasks like setting reminders, answering questions, controlling smart devices, and providing personalized recommendations.",
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSevEijnOQU5k8mACTZ-GFKO7cM0Zxq90fe0yby2qPrb49PYvw/viewform?usp=header"
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
                <p>• Teams must consist of 3-4 members</p>
                <p>• Cross-disciplinary teams are encouraged</p>
                <p>• Each team can choose only ONE problem statement</p>
                <p>• Team registration closes 24 hours before the event</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Working prototype/demo is mandatory</p>
                <p>• PPT presentation (max 10 slides)</p>
                <p>• Source code must be submitted</p>
                <p>• Documentation and setup instructions required</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Judging Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Innovation and Creativity (30%)</p>
                <p>• Technical Implementation (25%)</p>
                <p>• Problem Solving Approach (20%)</p>
                <p>• Presentation and Demo (15%)</p>
                <p>• User Experience (10%)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Registration: Until Oct 9, 2025</p>
                <p>• Competition: Oct 10-11, 2025</p>
                <p>• Submission Deadline: Oct 11, 6:00 PM</p>
                <p>• Final Presentations: Oct 11, 7:00 PM</p>
                <p>• Results Announcement: Oct 11, 9:00 PM</p>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSevEijnOQU5k8mACTZ-GFKO7cM0Zxq90fe0yby2qPrb49PYvw/viewform?usp=header"
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
            © 2025 NuraNext - Organized by Know I Club, SVCE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
