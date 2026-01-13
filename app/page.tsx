import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { PartnersSection } from "@/components/partners-section"
import { FeaturedPartnersSection } from "@/components/featured-partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FounderSection } from "@/components/founder-section"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <PortfolioHeader />
        <HeroSection />
        <CapabilitiesSection />
        <PortfolioGrid />
        <PartnersSection />
        <FeaturedPartnersSection />
        <TestimonialsSection />
        <AboutSection />
        <FounderSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
