import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { MobileMenu } from "@/components/mobile-menu"
import { StructuredData } from "@/components/structured-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { caseStudies, partnerLogos } from "@/lib/case-studies"

const principles = [
  {
    number: "01",
    title: "Senior judgment",
    body: "A smaller senior team for product decisions that cannot afford drift, dilution, or theatre.",
  },
  {
    number: "02",
    title: "Design under pressure",
    body: "Interfaces, systems, and journeys shaped for real operators, real rollout constraints, and real customer behavior.",
  },
  {
    number: "03",
    title: "Execution that holds up",
    body: "Strategy, product design, and engineering kept close enough that the right ideas survive implementation.",
  },
]

const engagements = [
  {
    name: "Studio Sprint",
    duration: "4–8 weeks",
    body: "For repositioning, validation, focused product slices, and high-stakes resets.",
  },
  {
    name: "Launch Partner",
    duration: "8–16 weeks",
    body: "For teams that need a senior partner driving quality and momentum through go-live.",
  },
  {
    name: "Technical Partner",
    duration: "Ongoing",
    body: "For continued judgment across architecture, delivery pressure, and product evolution.",
  },
]

const logoRow = [...partnerLogos, ...partnerLogos]
const [featuredStudy, ...secondaryStudies] = caseStudies

function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-full bg-linear-to-r from-transparent via-brand/30 to-transparent ${className}`}
    />
  )
}

function CaseStudyImage({ src, alt, top = false }: { src: string; alt: string; top?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover grayscale brightness-75 ${top ? "object-top" : "object-center"}`}
    />
  )
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white">

        {/* Page-level radial glow — barely visible, adds depth at top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-220 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(181,96,58,0.06),transparent)] dark:bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(212,128,90,0.07),transparent)]"
        />

        <div className="relative mx-auto max-w-336 px-6 sm:px-10 lg:px-16">

          {/* ─── Header ─────────────────────────────────────────── */}
          <header className="sticky top-0 z-40 bg-white/96 dark:bg-black/96 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 py-5">

              <a href="#top" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-black dark:text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center border border-black/30 dark:border-white/30 text-[10px] font-medium tracking-[0.32em]">
                  VD
                </span>
                Vox Dei Studio
              </a>

              <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50 md:flex">
                <a href="#studio" className="transition-colors hover:text-black dark:hover:text-white">Studio</a>
                <Link href="/work" className="transition-colors hover:text-black dark:hover:text-white">Work</Link>
                <a href="#approach" className="transition-colors hover:text-black dark:hover:text-white">Approach</a>
                <a href="https://www.voxdei.io/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black dark:hover:text-white">Thoughts</a>
                <a href="#contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</a>
              </nav>

              <div className="flex items-center gap-4">
                <ThemeToggle />
                <a
                  href="#contact"
                  className="hidden border border-black/25 dark:border-white/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/80 dark:text-white/80 transition-all hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black md:inline-flex"
                >
                  Start here
                </a>
                <MobileMenu />
              </div>

            </div>
          </header>

          {/* ─── Hero ───────────────────────────────────────────── */}
          <section id="top" className="scroll-mt-20 pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pt-36">
            <div data-aos="fade-up">
              <p className="text-[11px] uppercase tracking-[0.35em] text-brand">
                Venture studio · product partner · technical direction
              </p>
              <h1 className="mt-7 text-[4rem] font-medium leading-[0.86] tracking-[-0.055em] sm:text-[6.5rem] lg:text-[8.5rem]">
                Beautifully judged
                <span className="mt-1 block font-serif font-normal italic tracking-[-0.02em] text-black/55 dark:text-white/55">
                  digital products.
                </span>
              </h1>

              {/* Gradient accent line below headline */}
              <GradientRule className="mt-10 max-w-sm" />

              <p className="mt-8 max-w-lg text-base leading-[1.9] text-black/65 dark:text-white/65 sm:text-lg">
                Vox Dei Studio works with founders and operators shaping products, systems, and AI-native workflows where the standard is not just speed — it is taste, clarity, and execution that holds up.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2.5 border border-black/35 dark:border-white/35 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-all duration-200 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                >
                  Explore work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-2 text-[11px] uppercase tracking-[0.22em] text-black/55 dark:text-white/55 transition-colors hover:text-black dark:hover:text-white"
                >
                  Start a conversation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Descriptor strip */}
            <dl
              className="mt-14 grid grid-cols-2 gap-px border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 sm:grid-cols-4"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              {[
                { term: "What we are", desc: "Product, design, and engineering — one senior team" },
                { term: "Who we serve", desc: "Founders and operators with real stakes" },
                { term: "The standard", desc: "Taste, clarity, and execution that holds" },
                { term: "Operating in", desc: "South Africa · Europe" },
              ].map((item) => (
                <div key={item.term} className="bg-white dark:bg-black px-5 py-5 sm:px-6">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand">{item.term}</dt>
                  <dd className="mt-2 text-sm text-black/80 dark:text-white/80">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ─── Partners ───────────────────────────────────────── */}
          <div className="border-t border-black/10 dark:border-white/10 py-10" data-aos="fade-up">
            <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-brand">Selected partners</p>
            <div className="overflow-hidden">
              <div className="animate-marquee flex min-w-max items-center gap-14 sm:gap-18">
                {logoRow.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex h-10 w-24 items-center justify-center opacity-35 transition-opacity duration-300 hover:opacity-70"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={96}
                      height={40}
                      className="max-h-8 w-auto object-contain brightness-0 dark:invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Studio ─────────────────────────────────────────── */}
          <section id="studio" className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">The studio</p>
              </div>

              <div>
                <div data-aos="fade-up" data-aos-delay="60">
                  <h2 className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[3rem]">
                    Taste, product judgment, and engineering discipline kept in one loop.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-[1.9] text-black/65 dark:text-white/65 sm:text-lg">
                    The value is not capability breadth on paper. It is the ability to decide well, design clearly, and execute under real operating pressure without losing the essence of the product.
                  </p>
                </div>

                {/* Editorial principles list */}
                <div className="mt-16">
                  <GradientRule />
                  {principles.map((item, index) => (
                    <div
                      key={item.title}
                      className="grid gap-4 border-b border-black/10 dark:border-white/10 py-8 sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline sm:gap-8"
                      data-aos="fade-up"
                      data-aos-delay={60 + index * 50}
                    >
                      <span className="text-[10px] uppercase tracking-[0.35em] text-brand">{item.number}</span>
                      <h3 className="text-base font-medium tracking-[-0.015em] sm:text-lg">{item.title}</h3>
                      <p className="text-sm leading-[1.85] text-black/60 dark:text-white/60">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ─── Testimonials ───────────────────────────────────── */}
          <section className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">What they say</p>
              </div>

              <div className="grid gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2">
                {[
                  {
                    quote: "Vox Dei rebuilt our legacy platform with modern architecture and AI capabilities in record time. Their ability to navigate complex enterprise requirements while maintaining velocity is exceptional. They're true partners who understand both the technical and business challenges.",
                    name: "Dhiroshen Padayachee",
                    role: "Development Manager",
                    company: "Discovery",
                    linkedin: "https://za.linkedin.com/in/dhiroshan-padayachee-21101723",
                  },
                  {
                    quote: "Working with Vox Dei on Andrual AI has been transformative. Their technical depth in AI and ability to ship production-grade features rapidly gave us the velocity we needed. They don't just code — they think like product owners and help shape the vision.",
                    name: "Sourabh Raj",
                    role: "CTO",
                    company: "Andrual AI",
                    linkedin: "https://de.linkedin.com/in/sraj1006",
                  },
                  {
                    quote: "Vox Dei helped our organisation embrace AI in a practical, impactful way. They didn't just deliver technology — they empowered our team to leverage AI capabilities that make a real difference in our clients' lives. The transformation has been remarkable.",
                    name: "Palesa Tlholoe",
                    role: "Co Director",
                    company: "IWS",
                    linkedin: "https://za.linkedin.com/in/palesa-tlholoe-cfp%C2%AE-99000b3b",
                  },
                  {
                    quote: "Partnering with Vox Dei on our venture building initiatives opened our eyes to what's possible when you combine corporate resources with startup velocity. They helped us navigate the innovation process and build products that actually ship, not just PowerPoints.",
                    name: "Mzwandile Mathebula",
                    role: "Innovation Manager",
                    company: "Old Mutual",
                    linkedin: "https://za.linkedin.com/in/mzwandile-m-69925064",
                  },
                ].map((item, index) => (
                  <article
                    key={item.name}
                    className="flex flex-col justify-between gap-10 bg-white dark:bg-black p-8 sm:p-10"
                    data-aos="fade-up"
                    data-aos-delay={60 + index * 50}
                  >
                    <blockquote className="text-sm leading-[1.95] text-black/65 dark:text-white/65">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3"
                    >
                      <div>
                        <p className="text-[11px] font-medium tracking-[-0.01em] transition-colors group-hover:text-black/60 dark:group-hover:text-white/60">{item.name}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">{item.role} · {item.company}</p>
                      </div>
                    </a>
                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* ─── Work ───────────────────────────────────────────── */}
          <section id="work" className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Selected work</p>
              </div>

              <div>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up" data-aos-delay="60">
                  <h2 className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[3rem]">
                    Case studies, not name-dropping.
                  </h2>
                  <Link
                    href="/work"
                    className="group inline-flex shrink-0 items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-black/45 dark:text-white/45 transition-colors hover:text-black dark:hover:text-white"
                  >
                    View all work
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Featured case study */}
                <div className="mt-12" data-aos="fade-up" data-aos-delay="80">
                  <GradientRule className="mb-4" />
                  <article className="overflow-hidden border border-black/10 dark:border-white/10">

                    {/* Full-width landscape image */}
                    <div className="relative aspect-video overflow-hidden sm:aspect-21/9">
                      <CaseStudyImage src={featuredStudy.image} alt={featuredStudy.name} />
                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">{featuredStudy.category}</p>
                        <h3 className="mt-3 text-[2.2rem] font-medium leading-none tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.75rem]">
                          {featuredStudy.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="grid border-t border-black/10 dark:border-white/10 lg:grid-cols-2">
                      <div className="border-b border-black/10 dark:border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-black/45 dark:text-white/45">
                          Challenge · Approach · Outcome
                        </p>
                        <p className="mt-7 text-[1.05rem] leading-[1.9] text-black/70 dark:text-white/70">{featuredStudy.summary}</p>
                        <p className="mt-5 text-sm italic leading-[1.85] text-black/50 dark:text-white/50">{featuredStudy.proof}</p>
                      </div>

                      <div className="flex flex-col justify-between p-8 sm:p-10">
                        <p className="text-sm leading-[1.85] text-black/60 dark:text-white/60">{featuredStudy.challenge}</p>
                        <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-8">
                          <Link
                            href={`/work/${featuredStudy.slug}`}
                            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-black dark:text-white transition-opacity hover:opacity-50"
                          >
                            Read case study
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>

                  </article>
                </div>

                {/* Secondary case studies */}
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  {secondaryStudies.slice(0, 2).map((item, index) => (
                    <article
                      key={item.slug}
                      className="group overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-300 hover:border-black/25 dark:hover:border-white/25"
                      data-aos="fade-up"
                      data-aos-delay={80 + index * 70}
                    >
                      <div className="relative aspect-16/10 overflow-hidden">
                        <CaseStudyImage src={item.image} alt={item.name} />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                      </div>
                      <div className="p-7 sm:p-8">
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-black/45 dark:text-white/45">{item.category}</p>
                          <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">{item.name}</h3>
                        </div>
                        <p className="mt-4 text-sm leading-[1.85] text-black/60 dark:text-white/60">{item.summary}</p>
                        <div className="mt-7 flex items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                          <p className="text-xs italic text-black/45 dark:text-white/45">{item.proof}</p>
                          <Link
                            href={`/work/${item.slug}`}
                            className="group/link inline-flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-black dark:text-white transition-opacity hover:opacity-50"
                          >
                            Read
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* ─── Partners ───────────────────────────────────────── */}
          <section className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Strategic partners</p>
              </div>

              <div>
                <div data-aos="fade-up" data-aos-delay="60">
                  <p className="max-w-xl text-base leading-[1.9] text-black/65 dark:text-white/65">
                    Collaborating with ecosystem leaders to support founders building things that matter.
                  </p>
                </div>

                <div className="mt-12 grid gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2">
                  {[
                    {
                      logo: "/logos/darkiesintech.svg",
                      name: "Darkies in Tech",
                      description: "A vetted community of POC founders, investors, and ecosystem builders operating within the South African tech ecosystem.",
                      url: "https://www.darkiesintech.com/",
                    },
                    {
                      logo: "/logos/thedelta.svg",
                      name: "The Delta",
                      description: "A venture platform building launchpads for generational companies and nurturing transformational enterprises.",
                      url: "https://www.thedelta.co/",
                    },
                  ].map((partner, index) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col gap-8 bg-white dark:bg-black p-8 transition-colors hover:bg-black/3 dark:hover:bg-white/3 sm:p-10"
                      data-aos="fade-up"
                      data-aos-delay={60 + index * 60}
                    >
                      <div className="flex h-10 items-center">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={120}
                          height={40}
                          className="max-h-8 w-auto object-contain brightness-0 dark:invert opacity-60 transition-opacity group-hover:opacity-100"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium tracking-[-0.01em]">{partner.name}</p>
                        <p className="mt-2 text-sm leading-[1.85] text-black/55 dark:text-white/55">{partner.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ─── Approach ───────────────────────────────────────── */}
          <section id="approach" className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Why Vox Dei</p>
              </div>

              <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">

                <div data-aos="fade-up" data-aos-delay="60">
                  <GradientRule className="mb-10" />
                  <blockquote className="text-[2.2rem] font-medium leading-[1.08] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
                    A smaller, senior team built to turn important bets into products that actually hold up.
                  </blockquote>
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                  {engagements.map((item) => (
                    <article
                      key={item.name}
                      className="border-b border-black/10 dark:border-white/10 py-7 first:border-t first:border-black/10 dark:first:border-white/10"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-base font-medium tracking-[-0.02em] sm:text-lg">{item.name}</h3>
                        <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-brand">{item.duration}</span>
                      </div>
                      <p className="mt-3 text-sm leading-[1.85] text-black/60 dark:text-white/60">{item.body}</p>
                    </article>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* ─── Contact ────────────────────────────────────────── */}
          <section id="contact" className="scroll-mt-20 border-t border-black/10 dark:border-white/10 py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">

              <div className="lg:sticky lg:top-24 lg:self-start" data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand">Start here</p>
              </div>

              <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

                <div data-aos="fade-up" data-aos-delay="60">
                  <h2 className="text-[3rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[4rem] lg:text-[5rem]">
                    Bring the product
                    <span className="mt-1 block font-serif font-normal italic text-black/50 dark:text-white/50">
                      that actually matters.
                    </span>
                  </h2>
                  <GradientRule className="my-8" />
                  <p className="max-w-xs text-sm leading-[1.9] text-black/60 dark:text-white/60 sm:text-base">
                    Use the form to open a ready-to-send inquiry with your details already structured.
                  </p>
                  <a
                    href="https://www.voxdei.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-7 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-black/45 dark:text-white/45 transition-colors hover:text-black dark:hover:text-white"
                  >
                    Read our thoughts
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                  <ContactForm />
                </div>

              </div>
            </div>
          </section>

          {/* ─── Footer ─────────────────────────────────────────── */}
          <footer className="border-t border-black/10 dark:border-white/10 py-10">
            <GradientRule className="mb-10" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">© {new Date().getFullYear()} Vox Dei Studio</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/25 dark:text-white/25">South Africa · Europe</p>
              </div>
              <nav className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.25em] text-black/35 dark:text-white/35">
                <a href="#studio" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Studio</a>
                <Link href="/work" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Work</Link>
                <a href="#approach" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Approach</a>
                <a href="https://www.voxdei.io/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Thoughts</a>
                <a href="#contact" className="transition-colors hover:text-black/70 dark:hover:text-white/70">Contact</a>
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

        </div>
      </main>
    </>
  )
}
