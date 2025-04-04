"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <Card className="max-w-lg mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-accent rounded-lg">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              Send me a message and I'll get back to you soon
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-accent/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-accent/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-accent/50"
              required
            />
          </div>

          <Button type="submit" className="w-full transition-all duration-300 hover:scale-105" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 text-green-500 text-sm mt-2 p-2 bg-green-500/10 rounded-md">
              <CheckCircle className="h-4 w-4" />
              <span>Message sent successfully!</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm mt-2 p-2 bg-red-500/10 rounded-md">
              <AlertCircle className="h-4 w-4" />
              <span>Failed to send message. Please try again.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
