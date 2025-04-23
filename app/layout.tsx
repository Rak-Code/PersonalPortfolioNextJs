import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/scroll-to-top";

// ✅ Corrected favicon path
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
    "Tech Portfolio",
  ],
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // ✅ Use root-relative path and standard name
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Search Console Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="-EWmRWoiBgHjFIWOiTMOYRrT9Ga09mN4qHnfSLuU7Zc"
        />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
