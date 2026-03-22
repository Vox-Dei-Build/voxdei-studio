import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"
import { SiteFooter } from "@/components/site-footer"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)
  if (!study) return {}
  return {
    title: study.name,
    description: study.summary,
  }
}

function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-full bg-linear-to-r from-transparent via-brand/30 to-transparent ${className}`}
    />
  )
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) notFound()

  const currentIndex = caseStudies.indexOf(study)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  const baseUrl = "https://studio.voxdei.io"
  const pageUrl = `${baseUrl}/work/${study.slug}`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${baseUrl}/work` },
      { "@type": "ListItem", position: 3, name: study.name, item: pageUrl },
    ],
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.name} — Vox Dei Studio`,
    description: study.summary,
    url: pageUrl,
    author: { "@type": "Organization", name: "Vox Dei Studio", url: baseUrl },
    publisher: { "@type": "Organization", name: "Vox Dei Studio", url: baseUrl, logo: `${baseUrl}/logo-vd.png` },
    image: `${baseUrl}${study.image}`,
    about: { "@type": "Thing", name: study.name, description: study.challenge },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white">

      {/* Page-level radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-220 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(181,96,58,0.06),transparent)] dark:bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(212,128,90,0.07),transparent)]"
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

            <div className="flex items-center gap-6">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-black/50 dark:text-white/50 transition-colors hover:text-black dark:hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All work
              </Link>
              <ThemeToggle />
              <Link
                href="/#contact"
                className="hidden border border-black/25 dark:border-white/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/80 dark:text-white/80 transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black sm:inline-flex"
              >
                Start here
              </Link>
            </div>

          </div>
        </header>

        {/* ─── Hero image ─────────────────────────────────────── */}
        <div className="mt-10 sm:mt-14" data-aos="fade-up">
          <div className="relative aspect-video overflow-hidden border border-black/10 dark:border-white/10 sm:aspect-21/9">
            <Image
              src={study.image}
              alt={study.name}
              fill
              className="object-cover grayscale brightness-75"
              priority
            />
            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

            {/* Title at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                {study.category}
              </p>
              <h1 className="mt-4 text-[2.8rem] font-medium leading-none tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[6rem]">
                {study.name}
              </h1>
            </div>
          </div>
        </div>

        {/* ─── Overview ───────────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-24">

            <div data-aos="fade-up">
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Overview</p>
              <p className="mt-8 text-[1.45rem] font-medium leading-[1.32] tracking-[-0.035em] sm:text-[1.75rem] lg:text-[2.1rem]">
                {study.summary}
              </p>
            </div>

            <div
              className="flex flex-col justify-center border-l-0 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-16"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <GradientRule className="mb-8 lg:hidden" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Signal</p>
              <blockquote className="mt-5 text-base italic leading-[1.85] text-black/55 dark:text-white/55 sm:text-lg">
                &ldquo;{study.proof}&rdquo;
              </blockquote>

              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-10 inline-flex items-center gap-2.5 border border-black/25 dark:border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                >
                  {study.liveLabel ?? "View live"}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

          </div>
        </section>

        {/* ─── Breakdown ──────────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 py-20 sm:py-28">
          <GradientRule className="mb-16" />

          <div className="grid gap-14 lg:grid-cols-3 lg:gap-10">

            {/* Challenge */}
            <div data-aos="fade-up">
              <div className="mb-8 flex items-baseline gap-5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-brand">01</span>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Challenge</p>
              </div>
              <p className="text-sm leading-[1.95] text-black/60 dark:text-white/60 sm:text-base">
                {study.challenge}
              </p>
            </div>

            {/* What we did */}
            <div data-aos="fade-up" data-aos-delay="60">
              <div className="mb-8 flex items-baseline gap-5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-brand">02</span>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">What we did</p>
              </div>
              <ul className="space-y-0">
                {study.work.map((item, i) => (
                  <li
                    key={i}
                    className="border-t border-black/10 dark:border-white/10 py-5 text-sm leading-[1.85] text-black/60 dark:text-white/60 first:border-t-0 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div data-aos="fade-up" data-aos-delay="120">
              <div className="mb-8 flex items-baseline gap-5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-brand">03</span>
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Outcome</p>
              </div>
              <ul className="space-y-0">
                {study.outcome.map((item, i) => (
                  <li
                    key={i}
                    className="border-t border-black/10 dark:border-white/10 py-5 text-sm leading-[1.85] text-black/60 dark:text-white/60 first:border-t-0 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ─── Next case study ────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 py-20 sm:py-28" data-aos="fade-up">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Next</p>

          <Link
            href={`/work/${nextStudy.slug}`}
            className="group mt-8 block overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-300 hover:border-black/25 dark:hover:border-white/25"
          >
            <div className="relative aspect-video overflow-hidden sm:aspect-21/9">
              <Image
                src={nextStudy.image}
                alt={nextStudy.name}
                fill
                className="object-cover grayscale brightness-75 transition-all duration-700 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-8 sm:p-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    {nextStudy.category}
                  </p>
                  <h2 className="mt-3 text-[1.8rem] font-medium leading-none tracking-[-0.04em] text-white sm:text-[2.5rem]">
                    {nextStudy.name}
                  </h2>
                </div>
                <div className="shrink-0 pb-1">
                  <ArrowRight className="h-6 w-6 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="border-t border-black/10 dark:border-white/10 py-20 sm:py-28" data-aos="fade-up">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
            <div>
              <h2 className="text-[2.5rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[3.5rem]">
                Ready to make yours
                <span className="mt-1 block font-serif font-normal italic text-black/50 dark:text-white/50">
                  real?
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <GradientRule className="hidden sm:block" />
              <p className="text-sm leading-[1.85] text-black/55 dark:text-white/55 sm:text-right">
                Bring the project that matters. We will tell you honestly whether we are the right fit.
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
    </>
  )
}
