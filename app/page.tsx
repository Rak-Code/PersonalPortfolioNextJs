import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import GithubProfile from "@/components/github-profile"
import Certificates from "@/components/certificates"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="home" className="py-10">
          <Hero />
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <Projects />
        </section>

        <section id="github" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">GitHub Profile</h2>
          <GithubProfile />
        </section>

        <section id="certificates" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
          <Certificates />
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

