"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 py-6 md:py-4 items-center">
        {/* Left - Copyright and Stack */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rakesh Gupta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="font-semibold">Next.js</span> & <span className="font-semibold">Tailwind CSS</span>. Deployed on <span className="font-semibold">Vercel</span>.
          </p>
        </div>

        {/* Center - Policy Links */}
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-200">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-primary transition-colors duration-200">
            Terms of Use
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <Link
            href="https://github.com/Rak-Code"
            target="_blank"
            aria-label="GitHub"
            className="transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rakesh-gupta-developer/"
            target="_blank"
            aria-label="LinkedIn"
            className="transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <Link
            href="https://x.com/RakeshG33139449"
            target="_blank"
            aria-label="Twitter"
            className="transition-all duration-300 hover:scale-105"
          >
            <Twitter className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition"
      >
        ↑
      </button>
    </footer>
  )
}
