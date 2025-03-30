import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    description: "A responsive portfolio website with modern design and contact functionality.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    features: [
      "Fully responsive UI",
      "Integrated contact form with email notification functionality",
      "Modern and minimal design",
    ],
    githubLink: "https://rak-code.github.io/rakportfolio/",
    image: "./Portfolio_project.png?height=200&width=400",
  },
  {
    title: "Admin Dashboard ",
    description: "A system for managing and providing feedback on assignments.",
    technologies: ["Spring Boot", "React", "MySQL"],
    features: [
      "Feedback mechanism for both admins and users",
      "RESTful API endpoints for managing topics and feedback",
      "Clean and straightforward user interface",
    ],
    githubLink: "https://github.com/Rak-Code/customerfeedbackfront",
    image: "./AThena.png?height=200&width=400",
  },
  {
    title: "AI-Powered Chatbot Platform",
    description: "A chatbot application using Google Gemini AI with a scalable backend, interactive UI, and persistent conversation storage.",
    technologies: ["Spring Boot", "React", "MongoDB"],
    features: [
      "AI Chatbot Integration with Google Gemini AI for intelligent responsess",
      "Spring Boot Backend with WebFlux for non-blocking API calls",
      "MongoDB Storage for persistent chat history",
    ],
    githubLink: "https://github.com/Rak-Code/GeminiChatBot",
    image: "./Chatbot.png?height=200&width=400",
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
  {
    title: "Authetication and Authorization System",
    description: "A secure authentication and authorization system using Spring Security and JWT.",
    technologies: ["Spring Boot", "MySQL", "Thymeleaf"],
    features: [
      "User registration and login with JWT",
      "Role-based access control",
      "Secure password storage and encryption",
    ],
    githubLink: "https://github.com/Rak-Code/SpringSecurity",
    image: "./placeholder-logo.png?height=200&width=400",
  },
    
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden"
        >
          <div className="relative h-48 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <CardHeader className="text-white z-10 pb-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
            </div>
          </div>
          <CardContent className="flex-grow pt-4">
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
      ))}
    </div>
  )
}

