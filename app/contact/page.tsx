import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mail, Phone, MapPin, Users, FileText, Trophy, CheckCircle, Calendar, Award } from "lucide-react"

export default function ContactPage() {
  const timeline = [
    {
      date: "25th September",
      title: "Poster 1 Branding",
      description: "Initial event branding and promotional materials release",
      status: "completed",
      icon: Award,
    },
    {
      date: "26th September",
      title: "Problem Statements Release",
      description: "Domains/Problem Statements Release + Abstract Submission Open",
      status: "completed",
      icon: FileText,
    },
    {
      date: "27th September",
      title: "Venue Reveal",
      description: "Official venue announcement and location details",
      status: "completed",
      icon: MapPin,
    },
    {
      date: "29th September",
      title: "Poster 2 Branding",
      description: "Second phase of promotional materials and branding",
      status: "completed",
      icon: Award,
    },
    {
      date: "30th September",
      title: "Jury 1 + Jury 2 Reveal",
      description: "Announcement of judging panel and evaluation criteria",
      status: "completed",
      icon: Users,
    },
    {
      date: "1st October",
      title: "Jury 3 + Jury 4 Reveal",
      description: "Complete judging panel announcement",
      status: "completed",
      icon: Users,
    },
    {
      date: "2nd October",
      title: "Sponsors Branding Poster (Half)",
      description: "First half of sponsor announcements and branding",
      status: "completed",
      icon: Trophy,
    },
    {
      date: "3rd October",
      title: "Abstract Submission Reminder",
      description: "One day left for Abstract Submission Poster",
      status: "completed",
      icon: Clock,
    },
    {
      date: "5th October",
      title: "Date Extension",
      description: "Extended deadline announcement for submissions",
      status: "completed",
      icon: Calendar,
    },
    {
      date: "6th October",
      title: "Abstract Submission Last Day",
      description: "Final day for abstract submissions",
      status: "completed",
      icon: FileText,
    },
    {
      date: "7th October",
      title: "Sponsors Branding Poster (Second Half)",
      description: "Complete sponsor reveal + 3 days to go poster",
      status: "completed",
      icon: Trophy,
    },
    {
      date: "8th October",
      title: "Shortlisted Teams Reveal",
      description: "Announcement of selected teams + 3 days to go poster",
      status: "upcoming",
      icon: Users,
    },
    {
      date: "10th October",
      title: "Final Day Countdown",
      description: "1 day to go poster - final preparations",
      status: "upcoming",
      icon: Clock,
    },
    {
      date: "11th October - 9:00 AM",
      title: "NeuroNexus Begins",
      description: "24-hour ML hackathon officially starts at Yuniq, TIDEL Park",
      status: "upcoming",
      icon: Trophy,
    },
  ]

  const contacts = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Coordinator",
      email: "rajesh.kumar@svce.ac.in",
      phone: "+91 98765 43210",
    },
    {
      name: "Priya Sharma",
      role: "Student Coordinator",
      email: "priya.sharma@student.svce.ac.in",
      phone: "+91 87654 32109",
    },
    {
      name: "Arjun Patel",
      role: "Technical Lead",
      email: "arjun.patel@student.svce.ac.in",
      phone: "+91 76543 21098",
    },
    {
      name: "Sneha Reddy",
      role: "Event Manager",
      email: "sneha.reddy@student.svce.ac.in",
      phone: "+91 65432 10987",
    },
  ]

  const submissionRules = [
    {
      title: "Code Submission",
      items: [
        "Complete source code with proper documentation",
        "README file with setup and installation instructions",
        "Dependencies and requirements clearly listed",
        "Code should be well-commented and organized",
      ],
    },
    {
      title: "Presentation Requirements",
      items: [
        "Maximum 10 slides in PPT format",
        "Problem statement and solution overview",
        "Technical architecture and implementation details",
        "Demo screenshots or video (if applicable)",
        "Future scope and improvements",
      ],
    },
    {
      title: "Demo Guidelines",
      items: [
        "Working prototype must be demonstrated",
        "5-minute presentation + 3-minute Q&A",
        "All team members should participate",
        "Backup plans for technical difficulties",
      ],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary glow-purple">Contact</span>
            <span className="text-secondary glow-teal"> & Timeline</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Get all the information you need about the NeuroNexus timeline, submission guidelines, and how to reach us.
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
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event <span className="text-primary">Timeline</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {timeline.map((event, index) => {
                const IconComponent = event.icon
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                          event.status === "completed"
                            ? "bg-green-500/20 border-green-500 shadow-lg shadow-green-500/30"
                            : "bg-primary/20 border-primary shadow-lg shadow-primary/30"
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${event.status === "completed" ? "text-green-400" : "text-primary"}`}
                        />
                      </div>
                    </div>

                    {/* Timeline content */}
                    <Card
                      className={`flex-1 transition-all duration-300 hover:scale-105 animate-float ${
                        event.status === "completed" ? "border-green-500/50 bg-green-500/5" : "border-primary/50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <Badge variant={event.status === "completed" ? "default" : "secondary"}>
                            {event.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm text-muted-foreground font-medium">
                          {event.date}
                        </CardDescription>
                        <p className="text-foreground mt-2">{event.description}</p>
                      </CardHeader>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Submission Rules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Submission <span className="text-primary">Guidelines</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {submissionRules.map((rule, index) => (
              <Card key={index} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {rule.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Contact <span className="text-primary">Information</span>
          </h2>

          {/* Venue Information */}
          <Card className="mb-12 bg-gradient-to-r from-card to-muted/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center">
                <MapPin className="w-8 h-8 mr-3 text-primary" />
                Venue Details
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Sri Venkateswara College of Engineering</h3>
                  <p className="text-muted-foreground">Sriperumbudur, Tamil Nadu 602117</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Competition Venue</h4>
                    <p className="text-muted-foreground">Main Auditorium & Computer Labs</p>
                    <p className="text-muted-foreground">Block A, Ground Floor</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-accent">Facilities Available</h4>
                    <p className="text-muted-foreground">High-speed Internet, Power outlets</p>
                    <p className="text-muted-foreground">Refreshments, Parking</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{contact.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Can I participate individually?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, this is a team-based competition. Teams must have 3-4 members to encourage collaboration and
                  diverse skill sets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What if my team can't complete the solution in time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partial solutions are accepted. Focus on demonstrating your approach, problem-solving skills, and what
                  you've accomplished within the timeframe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Are there any restrictions on technology stack?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No restrictions! Use any programming languages, frameworks, or tools that best suit your solution.
                  However, ensure your solution can be demonstrated during the presentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What are the prizes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cash prizes, certificates, and internship opportunities with our sponsor companies. Detailed prize
                  structure will be announced during the opening ceremony.
                </p>
              </CardContent>
            </Card>
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
