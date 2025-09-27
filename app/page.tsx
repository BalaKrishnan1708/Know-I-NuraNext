import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingActionButton } from "@/components/floating-action-button"
import { Calendar, MapPin, Trophy, Users, Target, Brain, Clock } from "lucide-react"

export default function HomePage() {
  const sponsors = [
    { name: "TechCorp", logo: "/tech-company-logo.jpg" },
    { name: "InnovateLab", logo: "/innovation-lab-logo.png" },
    { name: "CodeMasters", logo: "/coding-company-logo.jpg" },
    { name: "FutureTech", logo: "/future-technology-logo.jpg" },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <FloatingActionButton />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="animate-float">
              <img 
                src="/logo-kowni.png" 
                alt="NeuroNexus Logo" 
                className="h-12 sm:h-16 w-auto mx-auto mb-4"
              />
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-balance mb-6 text-primary leading-tight">
                NeuroNexus 2025
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 text-balance relative px-4">
              <span className="glow-dot text-accent absolute -top-2 -left-2 sm:-left-4"></span>
              Where Infinity Meets Innovation
              <span className="glow-dot text-secondary absolute -bottom-2 -right-2 sm:-right-4"></span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-accent mb-8 text-balance px-4">A 24-hour machine learning intercollege hackathon</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 px-4">
              <Badge variant="secondary" className="text-sm sm:text-lg px-3 sm:px-4 py-2 w-full sm:w-auto">
                <Calendar className="w-4 h-4 mr-2" />
                October 11-12, 2025
              </Badge>
              <Badge variant="outline" className="text-sm sm:text-lg px-3 sm:px-4 py-2 w-full sm:w-auto">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href="https://maps.app.goo.gl/RzsztAzGNu4ZjX6W8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Yuniq, TICEL Park, Tharamani
                </a>
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-glow glow-button w-full sm:w-auto" asChild>
                <a
                  href="https://forms.gle/Hx4WotZesxX5mgZH6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  Register Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto" asChild>
                <a href="/problems">
                  <Target className="w-5 h-5 mr-2" />
                  View Challenges
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Know I Club Promotion */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <img 
                src="/logo-kowni.png" 
                alt="Know I Club" 
                className="h-10 sm:h-12 w-auto"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
                Organized by <span className="text-primary">Know I Club</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 px-4">
              Your chance to solve real-world problems and win big.
            </p>
            <div className="flex justify-center px-4">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 glow-button w-full sm:w-auto" asChild>
                <a
                  href="https://knowi-2025.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Know I Club
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              About <span className="text-primary">NeuroNexus</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-4xl mx-auto">
              We're thrilled to announce NeuroNexus: Our 24-hour Machine Learning Hackathon! Get ready to unleash your
              skills, collaborate, and compete for exciting cash prizes and surprises awaiting you. Infinite
              Possibilities. 24 Hours. One NeuroNexus. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <Card className="animate-pulse-border border-2 gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Dive deep into ML algorithms and create intelligent solutions that push the boundaries of AI.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-pulse-border border-2 gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-secondary" />
                  24-Hour Sprint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Intensive 24-hour hackathon where teams collaborate to build innovative ML solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-pulse-border border-2 gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-accent" />
                  Cash Prizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Compete for exciting cash prizes and surprises that await the most innovative teams.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Event Highlights */}
          <Card className="mb-16 gradient-card">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Event Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary">What to Expect 💡</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>🚀 Real-World ML Challenges</li>
                    <li>⏱️ 24 Hours of Nonstop Hacking</li>
                    <li>👨‍🏫 Mentorship from seasoned ML Experts</li>
                    <li>🤝 Networking with fellow AI Enthusiasts</li>
                    <li>🏆 Exciting Cash Prizes & Recognition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-secondary">Competition Format 🔮</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>👥 Teams of 4</li>
                    <li>⚙️ Develop and Training Models</li>
                    <li>🎤 Pitch your ideas</li>
                    <li>🧑‍💻 Judging by Industry Professionals</li>
                    <li>🌍 Awards for Innovation & Impact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-accent">Why NeuroNexus? ♾️</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>🌟 Cutting-edge domains: Quantum Computing, Biomedical AI, FinTech</li>
                    <li>🎁 Certificates & Swags for Participants</li>
                    <li>🏅 Exposure to Industry-Level Problems</li>
                    <li>🔗 Gateway to Networking, Internships & Future Opportunities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Sponsors</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Powered by industry leaders who believe in innovation</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <Card
                key={index}
                className="p-6 hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain mix-blend-screen"
                  />
                </div>
                <p className="text-center mt-4 font-semibold">{sponsor.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to <span className="text-primary">Innovate</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
            Join talented ML enthusiasts and data scientists in this epic 24-hour hackathon.
          </p>
          <Button size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 animate-glow w-full sm:w-auto" asChild>
            <a
              href="https://forms.gle/Hx4WotZesxX5mgZH6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Your Team Now
            </a>
          </Button>
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
