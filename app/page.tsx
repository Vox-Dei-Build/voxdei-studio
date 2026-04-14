import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { SiteHeader } from "@/components/site-header"
import { StructuredData } from "@/components/structured-data"
import { caseStudies, partnerLogos } from "@/lib/case-studies"

const logoRow = [...partnerLogos, ...partnerLogos]
const featuredStudies = caseStudies.slice(0, 3)

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="relative min-h-screen overflow-hidden bg-stone-50 dark:bg-neutral-950 text-black dark:text-white">

        {/* Skip to content — accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black focus:px-4 focus:py-2 focus:text-[11px] focus:uppercase focus:tracking-[0.2em]">
          Skip to content
        </a>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

          {/* ─── Header ─────────────────────────────────────────── */}
          <SiteHeader />

          {/* ─── Hero ───────────────────────────────────────────── */}
          <section id="main-content" className="relative scroll-mt-16 pt-16 pb-0 sm:pt-24 lg:pt-32">
            {/* Atmospheric glow — dark mode only */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[600px] rounded-full bg-brand/[0.04] blur-[120px] dark:bg-brand/[0.06] sm:h-[600px] sm:w-[700px]" aria-hidden="true" />

            {/* Main headline — typographic, enormous, authored */}
            <div className="relative pb-12 sm:pb-16 lg:pb-20" data-aos="fade-up">
              <h1 className="text-[2.6rem] font-medium leading-[0.9] tracking-[-0.045em] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
                Senior product
                <br className="hidden sm:block" />
                {" "}judgment,
                <br />
                <span className="font-display-serif font-light italic tracking-[-0.02em] text-black/40 dark:text-white/40">
                  beautifully executed.
                </span>
              </h1>
            </div>

            {/* Supporting — left-aligned, single column */}
            <div className="max-w-lg pb-16 sm:pb-20 lg:pb-28" data-aos="fade-up" data-aos-delay="60">
              <p className="text-[15px] leading-[1.9] text-black/65 dark:text-white/65">
                Strategy, product, design, and engineering — one senior team. For founders
                and operators building things that have to hold.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.22em] text-black dark:text-white transition-opacity hover:opacity-50"
              >
                Start a conversation
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </section>

          {/* ─── Logo strip — quiet credibility signal ─────────── */}
          <div className="border-t border-black/6 dark:border-white/6 py-7 sm:py-8">
            <div className="overflow-hidden">
              <div className="animate-marquee flex min-w-max items-center gap-14 sm:gap-20">
                {logoRow.map((logo, index) => (
                  <Link
                    key={`${logo.name}-${index}`}
                    href={`/work/${logo.slug}`}
                    className="flex h-8 w-20 items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-80 dark:opacity-45 dark:hover:opacity-70"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={80}
                      height={32}
                      className="max-h-6 w-auto object-contain brightness-0 dark:invert"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Work ───────────────────────────────────────────── */}
          <section id="work" className="scroll-mt-16 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">
            <div className="flex items-end justify-between mb-12 sm:mb-16" data-aos="fade-up">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand">Selected work</p>
                <h2 className="mt-4 text-[1.6rem] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[2rem] lg:text-[2.4rem]">
                  Products we&rsquo;ve
                  <span className="font-display-serif font-light italic text-black/40 dark:text-white/40"> shaped.</span>
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-black/35 dark:text-white/35 transition-colors hover:text-black dark:hover:text-white"
              >
                All work
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Featured case study — full width, editorial */}
            <article className="group mb-5" data-aos="fade-up" data-aos-delay="40">
              <Link href={`/work/${featuredStudies[0].slug}`} className="block overflow-hidden transition-all duration-300">
                <div className="grid lg:grid-cols-[1.3fr_1fr]">
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-black/3 dark:bg-white/3">
                    <Image
                      src={featuredStudies[0].image}
                      alt={featuredStudies[0].name}
                      fill
                      className="object-cover grayscale brightness-95 dark:brightness-[0.65] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-[0.85]"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12 border border-t-0 lg:border-t lg:border-l-0 border-black/6 dark:border-white/6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-brand">{featuredStudies[0].category}</p>
                      <h3 className="mt-5 text-[1.8rem] font-medium leading-[1] tracking-[-0.04em] sm:text-[2.4rem] lg:text-[2.8rem]">
                        {featuredStudies[0].name}
                      </h3>
                      <p className="mt-5 text-[14px] leading-[1.9] text-black/60 dark:text-white/60 max-w-md">{featuredStudies[0].summary}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-black/6 dark:border-white/6">
                      <p className="font-display-serif italic text-[13px] text-black/45 dark:text-white/45">{featuredStudies[0].proof}</p>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-black dark:text-white transition-opacity group-hover:opacity-60">
                        View
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            {/* Secondary studies */}
            <div className="grid gap-5 sm:grid-cols-2">
              {featuredStudies.slice(1, 3).map((item, index) => (
                <article key={item.slug} data-aos="fade-up" data-aos-delay={60 + index * 40}>
                  <Link href={`/work/${item.slug}`} className="group/card block overflow-hidden border border-black/6 dark:border-white/6 transition-all duration-300 hover:border-black/12 dark:hover:border-white/12">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/3 dark:bg-white/3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover grayscale brightness-95 dark:brightness-[0.65] transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:brightness-100 dark:group-hover/card:brightness-[0.85]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-brand">{item.category}</p>
                      <h3 className="mt-3 text-lg font-medium tracking-[-0.025em] sm:text-xl">{item.name}</h3>
                      <p className="mt-3 text-[13px] leading-[1.85] text-black/60 dark:text-white/60 line-clamp-2">{item.summary}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/6 dark:border-white/6 pt-5">
                        <p className="font-display-serif italic text-[13px] text-black/40 dark:text-white/40">{item.proof}</p>
                        <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-black dark:text-white">
                          View
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/card:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Explore all work — prominent CTA */}
            <div className="mt-12 sm:mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="100">
              <Link
                href="/work"
                className="group/cta inline-flex items-center gap-3 border border-black/15 dark:border-white/15 px-8 py-4 text-[10.5px] uppercase tracking-[0.22em] text-black/60 dark:text-white/60 transition-all duration-300 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              >
                Explore all work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
              </Link>
            </div>
          </section>

          {/* ─── Pull-quote — full-width rhythm break ──────────── */}
          <section className="py-16 sm:py-24 lg:py-32" data-aos="fade-up">
            <div className="max-w-3xl">
              <blockquote className="font-display-serif text-[1.5rem] leading-[1.45] font-light italic text-black/60 dark:text-white/55 sm:text-[2rem] lg:text-[2.4rem]">
                &ldquo;They don&rsquo;t just code — they think like product owners and help shape the vision.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-brand/40" aria-hidden="true" />
                <div>
                  <p className="text-[12px] font-medium tracking-[-0.01em]">Sourabh Raj</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mt-0.5">CTO · Andrual AI</p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── Studio ─────────────────────────────────────────── */}
          <section id="studio" className="scroll-mt-16 border-t border-black/6 dark:border-white/6 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">
            <div data-aos="fade-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-8 sm:mb-10">The studio</p>
              <h2 className="max-w-3xl text-[1.8rem] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[2.2rem] lg:text-[2.8rem]">
                Taste, product judgment, and engineering discipline
                <span className="font-display-serif font-light italic text-black/40 dark:text-white/40">
                  {" "}— kept in one loop.
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-black/65 dark:text-white/65">
                The value is not breadth on paper. It is the ability to diagnose well, decide well, design clearly, and execute under real pressure without losing the product.
              </p>
            </div>

            {/* Principles — typographic, not tabular */}
            <div className="mt-16 lg:mt-20 grid gap-0">
              {[
                { num: "01", title: "Senior judgment", body: "A smaller senior team for product decisions that cannot afford drift, dilution, or theatre." },
                { num: "02", title: "Strategy in the loop", body: "Positioning, customer friction, and operating reality kept close enough to shape what gets built." },
                { num: "03", title: "Execution that holds", body: "Strategy, AI orchestration, design, and engineering kept close enough that the right ideas survive implementation." },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-black/6 dark:border-white/6 py-7 sm:grid-cols-[3rem_11rem_1fr] sm:items-baseline sm:gap-8 lg:py-9"
                  data-aos="fade-up"
                  data-aos-delay={40 + index * 30}
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand/60">{item.num}</span>
                  <h3 className="text-[15px] font-medium tracking-[-0.01em]">{item.title}</h3>
                  <p className="col-start-2 text-[13px] leading-[1.85] text-black/60 dark:text-white/60 sm:col-start-3">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Proof ──────────────────────────────────────────── */}
          <section className="scroll-mt-16 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20" data-aos="fade-up">
              {/* Primary testimonial */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-8">What partners say</p>
                <blockquote className="font-display-serif text-[1.25rem] leading-[1.55] font-light italic text-black/70 dark:text-white/65 sm:text-[1.45rem]">
                  &ldquo;Vox Dei rebuilt our legacy platform with modern architecture and AI capabilities in record time. Their ability to navigate complex enterprise requirements while maintaining velocity is exceptional.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-8 bg-brand/30" aria-hidden="true" />
                  <div>
                    <a href="https://za.linkedin.com/in/dhiroshan-padayachee-21101723" target="_blank" rel="noreferrer" className="text-[12px] font-medium tracking-[-0.01em] hover:text-brand transition-colors">Dhiroshen Padayachee</a>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mt-0.5">Development Manager · Discovery</p>
                  </div>
                </div>
              </div>

              {/* Secondary testimonials — stacked, compact */}
              <div className="flex flex-col gap-10 lg:pt-16">
                {[
                  {
                    quote: "They empowered our team to leverage AI capabilities that make a real difference in our clients\u2019 lives.",
                    name: "Palesa Tlholoe",
                    role: "Co Director · IWS",
                    linkedin: "https://za.linkedin.com/in/palesa-tlholoe-cfp%C2%AE-99000b3b",
                  },
                  {
                    quote: "They helped us navigate the innovation process and build products that actually ship, not just PowerPoints.",
                    name: "Mzwandile Mathebula",
                    role: "Innovation Manager · Old Mutual",
                    linkedin: "https://za.linkedin.com/in/mzwandile-m-69925064",
                  },
                ].map((item) => (
                  <div key={item.name} className="border-t border-black/6 dark:border-white/6 pt-7">
                    <blockquote className="text-[14px] leading-[1.9] text-black/60 dark:text-white/60 font-display-serif italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <a href={item.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-block">
                      <p className="text-[11px] font-medium tracking-[-0.01em] hover:text-brand transition-colors">{item.name}</p>
                      <p className="text-[9.5px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mt-0.5">{item.role}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Approach ───────────────────────────────────────── */}
          <section id="approach" className="scroll-mt-16 border-t border-black/6 dark:border-white/6 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-start">
              <div data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-8">Working together</p>
                <h2 className="text-[1.8rem] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[2.2rem] lg:text-[2.8rem]">
                  A smaller, senior team
                  <span className="font-display-serif font-light italic text-black/40 dark:text-white/40">
                    {" "}built for products that have to hold up.
                  </span>
                </h2>
              </div>

              <div data-aos="fade-up" data-aos-delay="60">
                {[
                  { name: "Studio Sprint", duration: "4–8 weeks", body: "For repositioning, validation, focused product slices, strategy work, and high-stakes resets." },
                  { name: "Launch Partner", duration: "8–16 weeks", body: "For teams that need a senior partner driving quality, clarity, and momentum through go-live." },
                  { name: "Technical Partner", duration: "Ongoing", body: "For continued judgment across architecture, AI orchestration, delivery pressure, and product evolution." },
                ].map((item) => (
                  <article
                    key={item.name}
                    className="border-t border-black/6 dark:border-white/6 py-7 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-7"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[15px] font-medium tracking-[-0.015em]">{item.name}</h3>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-brand/70">{item.duration}</span>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.85] text-black/60 dark:text-white/60">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Contact ────────────────────────────────────────── */}
          <section id="contact" className="scroll-mt-16 border-t border-black/6 dark:border-white/6 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-start">
              <div data-aos="fade-up">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-6">Start here</p>
                <h2 className="text-[2rem] font-medium leading-[0.95] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[3.2rem]">
                  Bring the product,
                  <span className="block font-display-serif font-light italic text-black/35 dark:text-white/35 mt-1">
                    strategy, or operating problem that actually matters.
                  </span>
                </h2>
              </div>

              <div data-aos="fade-up" data-aos-delay="60">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* ─── Footer ─────────────────────────────────────────── */}
          <footer className="border-t border-black/6 dark:border-white/6 py-10 lg:py-12" role="contentinfo">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">© {new Date().getFullYear()} Vox Dei Studio</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30">Africa · Europe</p>
              </div>
              <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                <a href="#work" className="transition-colors hover:text-black/50 dark:hover:text-white/50">Work</a>
                <a href="#studio" className="transition-colors hover:text-black/50 dark:hover:text-white/50">Studio</a>
                <a href="#approach" className="transition-colors hover:text-black/50 dark:hover:text-white/50">Approach</a>
                <a href="https://www.voxdei.io/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black/50 dark:hover:text-white/50">Journal</a>
                <a href="#contact" className="transition-colors hover:text-black/50 dark:hover:text-white/50">Contact</a>
              </nav>
              <a
                href="https://www.linkedin.com/in/tsepo-ntsaba-50a691133/"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-black/35 dark:text-white/35 transition-colors hover:text-black/60 dark:hover:text-white/60"
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
