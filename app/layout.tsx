import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Rakesh Gupta | Java Developer",
  description:
    "Portfolio website of Rakesh Gupta, Java Developer specializing in Spring Boot and modern web technologies",
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
        <meta name="google-site-verification" content="google3329f3aaef28b607" />
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