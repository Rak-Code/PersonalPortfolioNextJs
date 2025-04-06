import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, Calendar, Link as LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "April 2024 – Present",
    description: [
      "Designed and developed responsive portfolio websites",
      "Integrated dynamic contact forms with email functionality via Next.js API routes and nodemailer module",
      "Implemented modern UI/UX with smooth animations and responsive layouts",
      "Deployed websites using Vercel for optimal performance and scalability",
    ],
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vercel", "Firebase"],
    projects: [
      {
        name: "Modern Modeling Portfolio",
        url: "https://v0-modern-modeling-portfolio.vercel.app/",
        description: "A sleek portfolio website for professional models"
      },
      {
        name: "Investment Banker Portfolio",
        url: "https://v0-portfolio-website-design-73mcvz.vercel.app/",
        description: "A dynamic portfolio for creative professionals"
      }
    ]
  }
]

export default function Experience() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card 
          key={index} 
          className="group transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
        >
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-primary">Responsibilities & Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-primary">Client Projects</h4>
                    <div className="space-y-3">
                      {exp.projects.map((project, i) => (
                        <Link 
                          href={project.url} 
                          target="_blank" 
                          key={i}
                          className="block p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{project.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}