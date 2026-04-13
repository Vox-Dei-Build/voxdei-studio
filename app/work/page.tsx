import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { portfolioItems } from "@/lib/portfolio"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import type { PortfolioItem } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "Work",
  description:
    "A full view of the strategy, AI orchestration, product, and engineering work Vox Dei Studio has delivered — across South Africa, Europe, and beyond.",
}

/* ── Shared image treatment ─────────────────────────────────────── */
const imgGrayscale =
  "object-cover grayscale brightness-95 dark:brightness-[0.65] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-[0.85]"

/* ── Index label ────────────────────────────────────────────────── */
function Idx({ n }: { n: number }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.3em] text-brand/50">
      {String(n).padStart(2, "0")}
    </span>
  )
}

/* ── Card variants ──────────────────────────────────────────────── */

function FeaturedCard({
  item,
  index,
  reverse = false,
}: {
  item: PortfolioItem
  index: number
  reverse?: boolean
}) {
  const href = item.slug ? `/work/${item.slug}` : (item.liveUrl ?? "#")

  return (
    <div className="group relative overflow-hidden border border-black/6 dark:border-white/6 transition-all duration-300 hover:border-black/12 dark:hover:border-white/12">
      {/* Full-card link overlay */}
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${item.name}`} />

      <div className="grid lg:grid-cols-[1.3fr_1fr]">
        <div
          className={`relative aspect-video lg:aspect-auto lg:min-h-[28rem] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={imgGrayscale}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent lg:hidden" />
        </div>
        <div
          className={`flex flex-col justify-between p-7 sm:p-9 lg:p-14 ${reverse ? "lg:order-1 lg:text-right" : ""}`}
        >
          <div>
            <div className={`flex items-center gap-4 ${reverse ? "lg:flex-row-reverse" : ""}`}>
              <Idx n={index + 1} />
              <p className="text-[10px] uppercase tracking-[0.25em] text-brand">
                {item.category}
              </p>
            </div>
            <h2 className="mt-6 text-[1.8rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[2.4rem] lg:text-[2.8rem]">
              {item.name}
            </h2>
            <p className="mt-6 text-[14px] leading-[1.9] text-black/60 dark:text-white/60 max-w-md">
              {item.summary}
            </p>
          </div>
          <div
            className={`mt-10 flex items-center gap-6 pt-6 border-t border-black/6 dark:border-white/6 ${reverse ? "lg:flex-row-reverse" : ""}`}
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50 transition-colors group-hover:text-black dark:group-hover:text-white">
              {item.slug ? "Read case study" : "View project"}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
            {item.liveUrl && item.slug && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-black/35 dark:text-white/35 transition-colors hover:text-black/60 dark:hover:text-white/60"
              >
                Live
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MediumCard({ item, index }: { item: PortfolioItem; index: number }) {
  const href = item.slug ? `/work/${item.slug}` : (item.liveUrl ?? "#")

  return (
    <div className="group relative overflow-hidden border border-black/6 dark:border-white/6 transition-all duration-300 hover:border-black/12 dark:hover:border-white/12">
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${item.name}`} />

      <div className="relative aspect-video overflow-hidden">
        <Image src={item.image} alt={item.name} fill className={imgGrayscale} />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <Idx n={index + 1} />
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand">
            {item.category}
          </p>
        </div>
        <h2 className="mt-3 text-lg font-medium tracking-[-0.025em] sm:text-xl">
          {item.name}
        </h2>
        <p className="mt-3 text-[13px] leading-[1.85] text-black/60 dark:text-white/60 line-clamp-2">
          {item.summary}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/6 dark:border-white/6 pt-5">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45 transition-colors group-hover:text-black dark:group-hover:text-white">
            {item.slug ? "Case study" : "View"}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30 transition-colors hover:text-black/60 dark:hover:text-white/60"
            >
              Live
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function CompactCard({ item, index }: { item: PortfolioItem; index: number }) {
  const href = item.slug ? `/work/${item.slug}` : (item.liveUrl ?? "#")

  return (
    <div className="group relative overflow-hidden border border-black/6 dark:border-white/6 transition-all duration-300 hover:border-black/12 dark:hover:border-white/12">
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${item.name}`} />

      <div className="relative aspect-video overflow-hidden">
        <Image src={item.image} alt={item.name} fill className={imgGrayscale} />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Idx n={index + 1} />
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand">
            {item.category}
          </p>
        </div>
        <h2 className="mt-2.5 text-[15px] font-medium tracking-[-0.02em] sm:text-base">
          {item.name}
        </h2>
        <p className="mt-2 text-[12px] leading-[1.8] text-black/55 dark:text-white/55 line-clamp-2">
          {item.summary}
        </p>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────────── */

export default function WorkPage() {
  /* Group items into editorial rhythm */
  const hero1 = portfolioItems[0]
  const pairA = portfolioItems.slice(1, 3)
  const tripleA = portfolioItems.slice(3, 6)
  const pairB = portfolioItems.slice(6, 8)
  const hero2 = portfolioItems[8]
  const tripleB = portfolioItems.slice(9, 12)
  const tripleC = portfolioItems.slice(12, 15)
  const tripleD = portfolioItems.slice(15, 18)

  return (
    <main className="relative min-h-screen overflow-hidden bg-stone-50 dark:bg-neutral-950 text-black dark:text-white">

      {/* Page-level radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-220 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(181,96,58,0.06),transparent)] dark:bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(212,128,90,0.07),transparent)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* ─── Header ─────────────────────────────────────────── */}
        <SiteHeader />

        {/* ─── Hero ───────────────────────────────────────────── */}
        <section className="pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pt-36">
          <div data-aos="fade-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand">
              Selected work
            </p>
            <h1 className="mt-7 text-[3.5rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[5.5rem] lg:text-[7rem]">
              Products shaped
              <span className="mt-1 block font-display-serif font-light italic tracking-[-0.02em] text-black/40 dark:text-white/40">
                with purpose.
              </span>
            </h1>
            <div className="mt-10 h-px w-full max-w-sm bg-linear-to-r from-transparent via-brand/30 to-transparent" aria-hidden="true" />
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-black/65 dark:text-white/65">
              A selection of the work we&rsquo;re proud to talk about — across enterprise platforms, strategy-led product work, AI workspaces, mobile commerce, healthcare, hospitality, and brand. South Africa, Europe, and beyond.
            </p>
          </div>
        </section>

        {/* ─── Editorial grid ─────────────────────────────────── */}
        <section className="border-t border-black/6 dark:border-white/6 pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pt-24">

          {/* 01 — Featured hero */}
          <div data-aos="fade-up">
            <FeaturedCard item={hero1} index={0} />
          </div>

          {/* 02–03 — Equal pair */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2" data-aos="fade-up">
            {pairA.map((item, i) => (
              <MediumCard key={item.name} item={item} index={i + 1} />
            ))}
          </div>

          {/* 04–06 — Triple */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {tripleA.map((item, i) => (
              <MediumCard key={item.name} item={item} index={i + 3} />
            ))}
          </div>

          {/* ── Editorial interlude ──────────────────────────── */}
          <div className="py-16 sm:py-20 lg:py-24" data-aos="fade-up">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-brand/20 to-transparent" aria-hidden="true" />
            </div>
            <p className="mt-8 text-center font-display-serif text-[1.1rem] italic leading-[1.6] text-black/35 dark:text-white/35 sm:text-[1.3rem]">
              Selected work — across Africa, Europe &amp; beyond.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-brand/20 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* 07–08 — Equal pair */}
          <div className="grid gap-5 sm:grid-cols-2" data-aos="fade-up">
            {pairB.map((item, i) => (
              <MediumCard key={item.name} item={item} index={i + 6} />
            ))}
          </div>

          {/* 09 — Featured hero (reversed) */}
          <div className="mt-5" data-aos="fade-up">
            <FeaturedCard item={hero2} index={8} reverse />
          </div>

          {/* 10–12 — Triple compact */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {tripleB.map((item, i) => (
              <CompactCard key={item.name} item={item} index={i + 9} />
            ))}
          </div>

          {/* 13–15 — Triple medium */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {tripleC.map((item, i) => (
              <MediumCard key={item.name} item={item} index={i + 12} />
            ))}
          </div>

          {/* 16–18 — Triple compact */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {tripleD.map((item, i) => (
              <CompactCard key={item.name} item={item} index={i + 15} />
            ))}
          </div>

        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="border-t border-black/6 dark:border-white/6 py-20 sm:py-28" data-aos="fade-up">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
            <div>
              <h2 className="text-[2.5rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[3.5rem]">
                Bring the product
                <span className="mt-1 block font-display-serif font-light italic text-black/35 dark:text-white/35">
                  that actually matters.
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <div className="hidden h-px w-full bg-linear-to-r from-transparent via-brand/30 to-transparent sm:block" aria-hidden="true" />
              <p className="text-sm leading-[1.85] text-black/65 dark:text-white/65 sm:text-right">
                We work with a small number of clients at any given time. Tell us what you are building.
              </p>
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-between gap-2.5 border border-black/15 dark:border-white/15 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black sm:w-auto sm:justify-start sm:py-3"
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
