import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

// Enriched metadata with additional keywords
export const metadata: Metadata = {
  title: "Rakesh Gupta | Java Developer",
  description:
    "Portfolio website of Rakesh Gupta, a Java Developer specializing in Spring Boot, Next.js, and full-stack web development using modern web technologies.",
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Next.js",
    "Full Stack Developer",
    "Web Development",
    "Modern Web Technologies",
    "Java",
    "Portfolio",
    "Software Developer",
    "Tech Portfolio"
  ],
  generator: 'v0.dev'
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Search Console Verification Meta Tag */}
        <meta name="google-site-verification" content="-EWmRWoiBgHjFIWOiTMOYRrT9Ga09mN4qHnfSLuU7Zc" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
