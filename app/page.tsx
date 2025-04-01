import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import GithubProfile from "@/components/github-profile"
import Certificates from "@/components/certificates"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Section } from "@/components/ui/section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Section>
          <Hero />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Section>
          <Projects />
        </Section>

        <Section>
          <GithubProfile />
        </Section>

        <Section>
          <Certificates />
        </Section>

        <Section>
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

