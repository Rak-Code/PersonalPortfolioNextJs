import { FadeInSection } from "../animations/fade-in-section"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <FadeInSection>
      <section className={`py-8 md:py-12 ${className}`}>
        {children}
      </section>
    </FadeInSection>
  )
}
