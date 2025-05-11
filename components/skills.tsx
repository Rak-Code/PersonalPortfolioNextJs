import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Database,
  FileCode,
  Github,
  Globe,
  Server,
  Coffee,
  Layers,
  GitBranch,
  Boxes,
  MonitorSmartphone,
  LayoutGrid,
  Rocket,
  Cloud,
  Flame,
  Cable,
  DatabaseZap,
} from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "Java", icon: <Coffee className="h-5 w-5" /> },
      { name: "Spring Boot", icon: <Layers className="h-5 w-5" /> },
      // { name: "RabbitMQ", icon: <Flame className="h-5 w-5" /> },
      { name: "Firebase", icon: <Flame className="h-5 w-5" /> },
    ],
    icon: <Server className="h-6 w-6" />, 
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: <FileCode className="h-5 w-5" /> },
      { name: "CSS3", icon: <LayoutGrid className="h-5 w-5" /> },
      { name: "JavaScript(ES6+)", icon: <Code2 className="h-5 w-5" /> },
      { name: "ReactJs", icon: <Boxes className="h-5 w-5" /> },
    
    ],
    icon: <Globe className="h-6 w-6" />, 
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: <Database className="h-5 w-5" /> },
      { name: "MongoDB", icon: <Database  className="h-5 w-5" /> },
      { name: "PostgreSQL", icon: <Cable className="h-5 w-5" /> },
    ],
    icon: <Database className="h-6 w-6" />, 
  },
  {
    name: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
      { name: "GitHub", icon: <Github className="h-5 w-5" /> },
      { name: "Docker", icon: <Cloud className="h-5 w-5" />},
      { name: "Vercel", icon: <Rocket className="h-5 w-5" /> },
      { name: "AWS", icon: <Cloud className="h-5 w-5" />},
      
    ],
    icon: <GitBranch className="h-6 w-6" />, 
  },
]

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 * idx, ease: "easeOut" }}
          >
            <Card
              className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent rounded-lg">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-105"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
