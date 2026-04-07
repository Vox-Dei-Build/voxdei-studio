"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm animate-in slide-in-from-bottom-4 duration-500">
      <div className="border border-black/8 dark:border-white/8 bg-stone-50 dark:bg-neutral-950 backdrop-blur-md p-5 shadow-lg shadow-black/5 dark:shadow-black/30">
        <p className="text-[12px] leading-[1.7] text-black/50 dark:text-white/45">
          This site uses cookies for analytics.{" "}
          <Link
            href="/privacy"
            className="text-black/70 dark:text-white/60 underline underline-offset-2 transition-colors hover:text-black dark:hover:text-white"
          >
            Privacy
          </Link>
        </p>
        <div className="flex gap-3 mt-4">
          <button
            onClick={decline}
            className="text-[10px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30 transition-colors hover:text-black dark:hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="border border-black/15 dark:border-white/15 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-black/70 dark:text-white/70 transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
