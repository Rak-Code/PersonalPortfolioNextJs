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
      "Integrated dynamic contact forms with email functionality",
      "Deployed websites using Vercel and Firebase",
      "Collaborated with clients to understand their needs and deliver tailored solutions",
    ],
    skills: ["React.js",  "Tailwind CSS", "Vercel", "Firebase"],
    projects: [
      {
        name: "Modern Modeling Portfolio",
        url: "https://v0-modern-modeling-portfolio.vercel.app/",
        description: "Sleek portfolio for professional models"
      },
      {
        name: "Investment Banker Portfolio",
        url: "https://v0-portfolio-website-design-73mcvz.vercel.app/",
        description: "Dynamic portfolio for creative professionals"
      }
    ]
  }
]

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card 
          key={index} 
          className="group transition-all duration-300 hover:shadow-lg"
        >
          <CardContent className="p-4 md:p-6">
            {/* Mobile-first header */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-start gap-4 md:block">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BriefcaseIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                
                {/* Mobile period */}
                <div className="md:hidden flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    {/* Desktop period */}
                    <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Changed to side-by-side layout for desktop */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-primary">Responsibilities</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-primary">Client Projects</h4>
                    <div className="space-y-2">
                      {exp.projects.map((project, i) => (
                        <Link 
                          href={project.url} 
                          target="_blank" 
                          key={i}
                          className="block p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm md:text-base">{project.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">{project.description}</p>
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
                      className="text-xs md:text-sm transition-all duration-300 hover:scale-105"
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