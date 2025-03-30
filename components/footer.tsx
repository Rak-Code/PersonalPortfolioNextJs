import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rakesh Gupta. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Rak-Code"
            target="_blank"
            aria-label="GitHub"
            className="transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link
            href="http://linkedin.com/in/rakesh-gupta-developer"
            target="_blank"
            aria-label="LinkedIn"
            className="transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link href="#" target="_blank" aria-label="Twitter" className="transition-all duration-300 hover:scale-105">
            <Twitter className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

