"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"  
import React from "react"
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 py-4 md:py-8">
      {/* LEFT SECTION */}
      <motion.div
        className="flex-1 space-y-4 md:space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I&apos;m Rakesh, <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <TypedWrapper
                strings={[
                  "Java Full Stack Developer",
                  "Spring Boot Rest API Development",
                  "React Enthusiast",
                  "Backend Engineer",
                  "Freelance Web Developer",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </span>
          </h1>
        </div>
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto md:mx-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Passionate about building robust backend systems and scalable web applications. With expertise in Java, Spring Boot, and modern frontend technologies, I strive to deliver clean and maintainable code.
        </motion.p>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-base md:text-lg text-muted-foreground">
            <strong>Location:</strong> Mumbai, Bandra
          </p>
        </motion.div>
        <motion.div
          className="pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="./Rakesh_Gupta_CV.pdf" target="_blank">
            <Button size="lg" className="font-medium transition-all duration-300 hover:scale-105">
              <FileText className="mr-2 h-5 w-5" />
              View My CV
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      {/* RIGHT SECTION */}
      <motion.div
        className="flex-1 hidden md:flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 hover:scale-[1.02] animate-pulse-glow">
            <Image
              src="./Fabiconlogo.png?height=320&width=320"
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
      </motion.div>
    </div>
  );
}

function TypedWrapper({
  strings,
  typeSpeed,
  backSpeed,
  backDelay,
  loop,
}: {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  backDelay: number;
  loop: boolean;
}) {
  React.useEffect(() => {
    const typed = new Typed("#typed-element", {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span id="typed-element"></span>;
}
