import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 py-4 md:py-8">
      <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Hi, I&apos;m a <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Java Developer</span></h1>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto md:mx-0">
          Passionate about building robust backend systems and scalable web applications. With expertise in Java, Spring
          Boot, and modern frontend technologies, I strive to deliver clean and maintainable code.
        </p>
        <div className="pt-2">
          <Link href="./Rakesh_Gupta_CV.pdf" target="_blank">
            <Button size="lg" className="font-medium transition-all duration-300 hover:scale-105">
              <FileText className="mr-2 h-5 w-5" />
              View My CV
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 hidden md:flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 hover:scale-[1.02] animate-pulse-glow">
            <Image
              src="./Profile.png?height=320&width=320"
              alt="Rakesh Gupta"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-card p-3 rounded-full border border-border">
            <div className="bg-primary h-6 w-6 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

