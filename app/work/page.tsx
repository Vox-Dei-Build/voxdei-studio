import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { portfolioItems } from "@/lib/portfolio"
import { SiteFooter } from "@/components/site-footer"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
  description:
    "A full view of the products, platforms, and ventures Vox Dei Studio has shaped — across South Africa, Europe, and beyond.",
}

function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-full bg-linear-to-r from-transparent via-black/20 dark:via-white/20 to-transparent ${className}`}
    />
  )
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white">

      {/* Page-level radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-220 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(0,0,0,0.04),transparent)] dark:bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(255,255,255,0.055),transparent)]"
      />

      <div className="relative mx-auto max-w-336 px-6 sm:px-10 lg:px-16">

        {/* ─── Header ─────────────────────────────────────────── */}
        <header className="sticky top-0 z-40 bg-white/96 dark:bg-black/96 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 py-5">

            <Link href="/" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-black dark:text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center border border-black/30 dark:border-white/30 text-[10px] font-medium tracking-[0.32em]">
                VD
              </span>
              Vox Dei Studio
            </Link>

            <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50 md:flex">
              <Link href="/#studio" className="transition-colors hover:text-black dark:hover:text-white">Studio</Link>
              <Link href="/work" className="text-black dark:text-white">Work</Link>
              <Link href="/#approach" className="transition-colors hover:text-black dark:hover:text-white">Approach</Link>
              <a href="https://www.voxdei.io/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black dark:hover:text-white">Thoughts</a>
              <Link href="/#contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/#contact"
                className="hidden border border-black/25 dark:border-white/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/80 dark:text-white/80 transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black md:inline-flex"
              >
                Start here
              </Link>
            </div>

          </div>
        </header>

        {/* ─── Hero ───────────────────────────────────────────── */}
        <section className="pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div data-aos="fade-up">
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/50 dark:text-white/50">
              Selected work
            </p>
            <h1 className="mt-7 text-[3.5rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[5.5rem] lg:text-[7rem]">
              Products shaped
              <span className="mt-1 block font-serif font-normal italic tracking-[-0.02em] text-black/55 dark:text-white/55">
                with purpose.
              </span>
            </h1>
            <GradientRule className="mt-10 max-w-sm" />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-black/65 dark:text-white/65">
              {portfolioItems.length} projects across enterprise platforms, AI workspaces, mobile commerce,
              healthcare, hospitality, and brand — in South Africa, Europe, and beyond.
            </p>
          </div>
        </section>

        {/* ─── Grid ───────────────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 pb-28 pt-16">
          <div className="grid gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative flex flex-col bg-white dark:bg-black transition-all duration-300 hover:bg-black/3 dark:hover:bg-white/3">

                {/* Full-card link overlay for case studies (sits below interactive elements) */}
                {item.slug && (
                  <Link href={`/work/${item.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${item.name} case study`} />
                )}

                {/* Screenshot */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale brightness-70 transition-all duration-500 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Logo badge */}
                  {item.logo && (
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/60 p-2 backdrop-blur-sm">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="max-h-6 w-auto object-contain brightness-0 invert"
                      />
                    </div>
                  )}

                  {/* Case study badge */}
                  {item.slug && (
                    <div className="absolute right-5 top-5">
                      <span className="border border-white/20 bg-black/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-sm">
                        Case study
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">{item.category}</p>
                    <h2 className="mt-2 text-base font-medium tracking-[-0.02em] sm:text-lg">{item.name}</h2>
                    <p className="mt-3 text-sm leading-[1.75] text-black/50 dark:text-white/50">{item.summary}</p>
                  </div>
                  {(item.slug || item.liveUrl) && (
                    <div className="flex items-center justify-between gap-4">
                      {item.slug && (
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35 transition-colors duration-300 group-hover:text-black/60 dark:group-hover:text-white/60">
                          Read case study
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      )}
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="relative z-20 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35 transition-colors hover:text-black/70 dark:hover:text-white/70"
                        >
                          {item.liveLabel ?? "View live"}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 py-20 sm:py-28" data-aos="fade-up">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
            <div>
              <h2 className="text-[2.5rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[3.5rem]">
                Bring the product
                <span className="mt-1 block font-serif font-normal italic text-black/50 dark:text-white/50">
                  that actually matters.
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <GradientRule className="hidden sm:block" />
              <p className="text-sm leading-[1.85] text-black/55 dark:text-white/55 sm:text-right">
                We work with a small number of clients at any given time. Tell us what you are building.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 border border-black/25 dark:border-white/25 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />

      </div>
    </main>
  )
}
