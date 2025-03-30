import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const certificates = [
  {
    title: "Java Full Stack Developer",
    issuer: "IT Vedant",
    date: "2025",
    link: "https://itv-uploads.s3.ap-south-1.amazonaws.com/certificates/cce_certificate19695_.jpg",
    image: "./FullStack.jpg?height=200&width=400",
  },
  {
    title: "IBM Certification",
    issuer: "IBM",
    date: "2025",
    // status: "Pending",
    link: "https://courses.itvedant.skillsnetwork.site/certificates/091437fb0b4a41199453433843fb399f#",
    image: "/IBM.png?height=200&width=400",
  },
  {
    title: "NSDC Certification",
    issuer: "NSDC",
    date: "2023",
    status: "Pending",
    link: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Certificates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <Card key={index} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden">
          <div className="relative h-40 w-full">
            <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>
                  {cert.issuer} • {cert.date}
                </CardDescription>
              </div>
              <div className="p-2 bg-accent rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {cert.status && (
              <div className="mb-4">
                <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 text-xs rounded-full border border-yellow-700">
                  {cert.status}
                </span>
              </div>
            )}
            <Link href={cert.link} target="_blank">
              <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

