"use client"

import type React from "react"

import { useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

// Extend Window type for hCaptcha
declare global {
  interface Window {
    hcaptcha?: {
      reset: () => void
    }
  }
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate hCaptcha
    const form = e.currentTarget
    const hCaptchaResponse = form.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]')?.value

    if (!hCaptchaResponse) {
      setStatus("error")
      setErrorMessage("Please complete the captcha verification.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          "h-captcha-response": hCaptchaResponse,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })

        // Reset hCaptcha
        if (window.hcaptcha) {
          window.hcaptcha.reset()
        }

        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again or email us directly.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Web3Forms hCaptcha Script */}
      <Script src="https://web3forms.com/client/script.js" async defer />

      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Let's Build Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to ship production-grade software? Get in touch and let's discuss your project.
              </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Card className="lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* hCaptcha */}
                  <div className="h-captcha" data-captcha="true"></div>

                  {status === "success" && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full group" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a
                        href="mailto:hello@voxdei.io"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@voxdei.io
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Response Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond within 30 minutes on business days. For urgent inquiries, please mention it in
                    your message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
