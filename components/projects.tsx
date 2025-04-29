"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Full Stack Ecommerce Clothing Platform",
    description:
      "An ecommerce platform with secure authentication, admin dashboard, AI chatbot, and payment integration.",
    technologies: ["Spring Boot", "React", "MySQL"],
    features: [
      "Secure authentication with role-based access control",
      "Admin dashboard for managing products",
      "Integrated AI Chatbot to enhance user experience",
      "Payment integration via Razorpay and automated email notifications",
    ],
    githubLink: "https://github.com/Rak-Code/Athena",
    image: "/Athena2.png?height=200&width=400",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive, SEO-optimized portfolio website showcasing projects, skills, and freelance work with integrated email communication support.",
    technologies: ["React.js", "Next.js", "Tailwind CSS",  "Nodemailer"],
    features: [
      
      "Mobile-first responsive and performance-optimized design",
      "Dynamic contact form integration with SMTP email functionality",
      "SEO best practices and fast-loading deployment via Vercel and Google Search Console"
    ],
    githubLink: "https://rakesh-gupta-portfolio-next-js-six.vercel.app/",
    image: "./image.png?height=200&width=400",
  },
  
  
  {
    title: "Quiz Application using Spring Boot",
    description: "A quiz application with user authentication, question management, and score tracking.",
    technologies: ["Spring Boot",  "MySQL", "Thymeleaf"],
    features: [
      "User authentication and role management",
      "Admin dashboard for managing quiz questions and categories",
      "Real-time score tracking and leaderboard",
    ],
    githubLink: "https://github.com/Rak-Code/QuizAppSpringBoot",
    image: "./Quiz.png?height=200&width=400",
  },
]

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 * idx, ease: "easeOut" }}
        >
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <CardHeader className="text-white z-10 pb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
              </div>
            </div>

            <CardContent className="flex-grow pt-4">
              {/* Mobile View: Show expand/collapse button */}
              <button 
                className="md:hidden w-full flex items-center justify-between text-sm text-muted-foreground mb-2"
                onClick={() => toggleCard(idx)}
              >
                <span>Show {expandedCards.includes(idx) ? 'less' : 'more'}</span>
                {expandedCards.includes(idx) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {/* Description and features - hidden by default on mobile */}
              <div className={`${expandedCards.includes(idx) ? 'block' : 'hidden'} md:block`}>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="transition-all duration-300 hover:scale-105">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Link href={project.githubLink} target="_blank" className="w-full">
                <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
