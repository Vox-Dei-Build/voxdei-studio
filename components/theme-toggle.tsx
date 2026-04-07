"use client"
import { useEffect, useState, useCallback } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  const applyTheme = useCallback((isDark: boolean) => {
    setDark(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem("vd-theme")
    if (stored === "dark") {
      setDark(true)
    } else if (stored === "light") {
      setDark(false)
    } else {
      setDark(document.documentElement.classList.contains("dark"))
    }

    // Listen for OS preference changes — only apply if user hasn't manually chosen
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      const userChoice = localStorage.getItem("vd-theme")
      if (!userChoice) {
        applyTheme(e.matches)
      }
    }
    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [applyTheme])

  const toggle = () => {
    const next = !dark
    applyTheme(next)
    localStorage.setItem("vd-theme", next ? "dark" : "light")
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center text-black/35 dark:text-white/35 transition-colors hover:text-black dark:hover:text-white"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
