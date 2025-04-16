"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience" // new component
import Projects from "@/components/projects"
import Testimonial from "@/components/testimonial" // new component
import GithubProfile from "@/components/github-profile"
import Certificates from "@/components/certificates"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Code2, Briefcase, FolderKanban, Quote, Award, GraduationCap, Mail } from "lucide-react"



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="home">
          <Section>
            <Hero />
          </Section>
        </section>

        <section id="skills">
          <Section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              Skills & Technologies
            </h2>
            <Skills />
          </Section>
        </section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Experience
          </h2>
          <Experience />
        </Section>

        <section id="projects">
          <Section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <FolderKanban className="h-6 w-6 text-primary" />
              Featured Projects
            </h2>
            <Projects />
          </Section>
        </section>
{/* 
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <Quote className="h-6 w-6 text-primary" />
            Testimonials
          </h2>
          <Testimonial />
        </Section> */}

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            GitHub Activity
          </h2>
          <GithubProfile />
        </Section>

        <section id="certificates">
          <Section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h2>
            <Certificates />
          </Section>
        </section>

        <section id="contact">
          <Section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Contact Me
            </h2>
            <ContactForm />
          </Section>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

