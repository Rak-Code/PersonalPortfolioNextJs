"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-semibold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent tracking-wide">
              Portfolio 
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="transition-all duration-300 hover:scale-105"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Projects
          </Link>
          <Link href="#certificates" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Certificates
          </Link>
          <Link
            href="https://github.com/Rak-Code"
            target="_blank"
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            GitHub Profile
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Social icons and theme toggle */}
        <div className="hidden md:flex items-center gap-4">
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
          <Link href="#" target="_blank" aria-label="Twitter" className="transition-all duration-300 hover:scale-105">
            <Twitter className="h-5 w-5 hover:text-primary transition-colors duration-200" />
          </Link>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#skills" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#certificates" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  Certificates
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://github.com/Rak-Code" target="_blank" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  GitHub Profile
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="text-sm font-medium hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <div className="flex items-center gap-4 pt-2">
                <Link href="https://github.com/Rak-Code" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5 hover:text-primary transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/rakesh-gupta-developer/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 hover:text-primary transition-colors duration-200" />
                </Link>
                <Link href="https://x.com/RakeshG33139449" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5 hover:text-primary transition-colors duration-200" />
                </Link>
                <ModeToggle />
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  )
}
