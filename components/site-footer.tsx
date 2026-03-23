import Link from "next/link"

function GradientRule() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-linear-to-r from-transparent via-brand/30 to-transparent"
    />
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10">
      <GradientRule />
      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">© {new Date().getFullYear()} Vox Dei Studio</p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/25 dark:text-white/25">Africa · Europe</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35">
          <Link href="/#studio" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Studio</Link>
          <Link href="/work" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Work</Link>
          <Link href="/#approach" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Approach</Link>
          <a href="https://www.voxdei.io/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Thoughts</a>
          <Link href="/#contact" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Contact</Link>
        </nav>
        <a
          href="https://www.linkedin.com/in/tsepo-ntsaba-50a691133/"
          target="_blank"
          rel="noreferrer"
          className="text-[10px] uppercase tracking-[0.25em] text-black/30 dark:text-white/30 transition-colors hover:text-black/70 dark:hover:text-white/70"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
