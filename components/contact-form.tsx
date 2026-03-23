"use client"

import { useMemo, useState } from "react"
import Script from "next/script"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

declare global {
  interface Window {
    hcaptcha?: { reset: () => void }
  }
}

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [captchaError, setCaptchaError] = useState(false)

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.project.trim()
  }, [form])

  const update = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit || status === "submitting") return

    const formEl = event.currentTarget
    const captchaToken = formEl.querySelector<HTMLTextAreaElement>(
      'textarea[name="h-captcha-response"]'
    )?.value

    if (!captchaToken) {
      setCaptchaError(true)
      return
    }

    setCaptchaError(false)
    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Vox Dei Studio Inquiry — ${form.company.trim() || form.name.trim()}`,
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || "—",
          message: form.project.trim(),
          botcheck: "",
          "h-captcha-response": captchaToken,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus("success")
      } else {
        setStatus("error")
        window.hcaptcha?.reset()
      }
    } catch {
      setStatus("error")
      window.hcaptcha?.reset()
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-5 border border-black/10 dark:border-white/10 p-8 sm:p-10">
        <CheckCircle className="h-6 w-6 text-black/60 dark:text-white/60" />
        <div>
          <p className="text-base font-medium tracking-[-0.02em]">Inquiry received.</p>
          <p className="mt-2 text-sm leading-[1.85] text-black/55 dark:text-white/55">
            We read every message and will come back to you within a couple of days if there is a fit.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script src="https://web3forms.com/client/script.js" async />

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Honeypot — invisible to humans, filled by bots */}
        <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

        <div className="grid gap-7 sm:grid-cols-2">
          <label className="block">
            <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Name</span>
            <Input
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Your name"
              className="h-11 rounded-none border-x-0 border-b border-t-0 border-black/15 dark:border-white/15 bg-transparent px-0 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus-visible:border-black/40 dark:focus-visible:border-white/40 focus-visible:ring-0"
            />
          </label>

          <label className="block">
            <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Email</span>
            <Input
              type="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@company.com"
              className="h-11 rounded-none border-x-0 border-b border-t-0 border-black/15 dark:border-white/15 bg-transparent px-0 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus-visible:border-black/40 dark:focus-visible:border-white/40 focus-visible:ring-0"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">Company</span>
          <Input
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            placeholder="Company or venture"
            className="h-11 rounded-none border-x-0 border-b border-t-0 border-black/15 dark:border-white/15 bg-transparent px-0 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus-visible:border-black/40 dark:focus-visible:border-white/40 focus-visible:ring-0"
          />
        </label>

        <label className="block">
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-black/55 dark:text-white/55">What needs to become real?</span>
          <Textarea
            value={form.project}
            onChange={(event) => update("project", event.target.value)}
            placeholder="Tell us what you're building, where the pressure is, and what needs to happen next."
            rows={5}
            className="rounded-none border-x-0 border-b border-t-0 border-black/15 dark:border-white/15 bg-transparent px-0 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus-visible:border-black/40 dark:focus-visible:border-white/40 focus-visible:ring-0"
          />
        </label>

        {/* hCaptcha — rendered automatically by web3forms script */}
        <div className="h-captcha" data-captcha="true" />
        {captchaError && (
          <p className="text-xs text-black/50 dark:text-white/50">Please complete the captcha before sending.</p>
        )}

        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          {status === "error" ? (
            <p className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              Something went wrong. Email us directly at{" "}
              <a href="mailto:hello@voxdei.io" className="text-black/70 dark:text-white/70 underline underline-offset-2">
                hello@voxdei.io
              </a>
            </p>
          ) : (
            <p className="text-xs leading-[1.8] text-black/40 dark:text-white/40">
              We respond within a few days if there is a fit.
            </p>
          )}

          <button
            type="submit"
            disabled={!canSubmit || status === "submitting"}
            className="inline-flex w-full items-center justify-between gap-2.5 border border-black/25 dark:border-white/25 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-all duration-200 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black disabled:cursor-not-allowed disabled:opacity-30 sm:w-auto sm:justify-start sm:py-3"
          >
            {status === "submitting" ? "Sending…" : "Send inquiry"}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </form>
    </>
  )
}
