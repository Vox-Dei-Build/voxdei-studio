"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const href = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`)
  const workHref = isHome ? "#work" : "/work"
  const isWorkPage = pathname.startsWith("/work")

  return (
    <header
      className="sticky top-0 z-40 bg-stone-50/95 dark:bg-neutral-950/95 backdrop-blur-sm"
      role="banner"
    >
      <div className="flex items-center justify-between py-5 lg:py-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.25em] text-black dark:text-white font-medium"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center border border-black/20 dark:border-white/20 text-[9px] font-semibold tracking-[0.3em]">
            VD
          </span>
          Vox Dei Studio
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-[10.5px] uppercase tracking-[0.18em] text-black/50 dark:text-white/50 md:flex"
        >
          <Link
            href={workHref}
            className={`transition-colors hover:text-black dark:hover:text-white ${isWorkPage ? "text-black dark:text-white" : ""}`}
          >
            Work
          </Link>
          <a
            href={href("studio")}
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Studio
          </a>
          <a
            href={href("approach")}
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Approach
          </a>
          <a
            href="https://www.voxdei.io/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Journal
          </a>
          <a
            href={href("contact")}
            className="ml-4 border border-black/15 dark:border-white/15 px-4 py-2 text-[10px] text-black/60 dark:text-white/60 transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            Start here
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
