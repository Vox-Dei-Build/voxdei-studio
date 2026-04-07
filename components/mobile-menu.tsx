"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { usePathname } from "next/navigation"
import { X, AlignRight } from "lucide-react"

function useLinks() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const prefix = isHome ? "" : "/"

  return [
    { href: isHome ? "#work" : "/work", label: "Work" },
    { href: `${prefix}#studio`, label: "Studio" },
    { href: `${prefix}#approach`, label: "Approach" },
    { href: "https://www.voxdei.io/", label: "Journal", external: true },
    { href: `${prefix}#contact`, label: "Contact" },
  ]
}

export function MobileMenu() {
  const links = useLinks()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      // Focus close button on open
      requestAnimationFrame(() => closeRef.current?.focus())
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Escape to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false)
      triggerRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, handleKeyDown])

  // Focus trap
  const handleTab = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !overlayRef.current) return
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  const close = () => {
    setOpen(false)
    triggerRef.current?.focus()
  }

  const overlay = open ? (
    <div
      ref={overlayRef}
      className="mobile-menu-overlay fixed inset-0 z-[9999] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      onKeyDown={handleTab}
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" onClick={close} className="text-[11px] uppercase tracking-[0.28em] text-black dark:text-white">
          Vox Dei Studio
        </a>
        <button
          ref={closeRef}
          onClick={close}
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
            onClick={close}
            className="group flex items-center justify-between border-b border-black/6 dark:border-white/6 py-7 text-[2rem] font-medium tracking-[-0.03em] text-black/65 dark:text-white/65 transition-colors hover:text-black dark:hover:text-white sm:text-[2.5rem]"
          >
            {link.label}
            <span className="text-[11px] uppercase tracking-[0.25em] text-brand/40 transition-colors group-hover:text-brand">
              0{i + 1}
            </span>
          </a>
        ))}
      </nav>

      <div className="px-8 py-8 sm:px-12">
        <a
          href={links[4].href}
          onClick={close}
          className="inline-flex items-center gap-3 border border-black/15 dark:border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-black dark:text-white transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
        >
          Start here
        </a>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="flex items-center justify-center text-black/40 dark:text-white/40 transition-colors hover:text-black dark:hover:text-white md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <AlignRight className="h-5 w-5" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  )
}
