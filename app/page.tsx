import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import GithubProfile from "@/components/github-profile"
import Certificates from "@/components/certificates"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Section } from "@/components/ui/section"
import { Code2, FolderKanban, Award, GraduationCap, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Section>
          <Hero />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            Skills & Technologies
          </h2>
          <Skills />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <FolderKanban className="h-6 w-6 text-primary" />
            Featured Projects
          </h2>
          <Projects />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            GitHub Activity
          </h2>
          <GithubProfile />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h2>
          <Certificates />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Contact Me
          </h2>
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

