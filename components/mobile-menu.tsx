"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, AlignRight } from "lucide-react"

const links = [
  { href: "#studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "https://www.voxdei.io/", label: "Thoughts", external: true },
  { href: "#contact", label: "Contact" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const overlay = open ? (
    <div className="mobile-menu-overlay fixed inset-0 z-9999 flex flex-col">
      <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 px-6 py-5 sm:px-10">
        <a href="#top" onClick={() => setOpen(false)} className="text-[11px] uppercase tracking-[0.28em] text-black dark:text-white">
          Vox Dei Studio
        </a>
        <button
          onClick={() => setOpen(false)}
          className="flex items-center justify-center text-black/40 dark:text-white/40 transition-colors hover:text-black dark:hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-0 px-8 sm:px-12">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between border-b border-black/8 dark:border-white/8 py-7 text-[2rem] font-medium tracking-[-0.03em] text-black/70 dark:text-white/70 transition-colors hover:text-black dark:hover:text-white sm:text-[2.5rem]"
          >
            {link.label}
            <span className="text-[11px] uppercase tracking-[0.25em] text-brand/50 transition-colors group-hover:text-brand">
              0{i + 1}
            </span>
          </a>
        ))}
      </nav>

      <div className="border-t border-black/10 dark:border-white/10 px-8 py-8 sm:px-12">
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-3 border border-black/20 dark:border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-black dark:text-white transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
        >
          Start here
        </a>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center text-black/50 dark:text-white/50 transition-colors hover:text-black dark:hover:text-white md:hidden"
        aria-label="Open menu"
      >
        <AlignRight className="h-5 w-5" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  )
}
