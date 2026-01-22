import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { EngagementSection } from "@/components/engagement-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturedPartnersSection } from "@/components/featured-partners-section"
import { AboutSection } from "@/components/about-section"
import { FounderQuoteSection } from "@/components/founder-quote-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <PortfolioHeader />
        <HeroSection />
        <PortfolioGrid />
        <CapabilitiesSection />
        <EngagementSection />
        <TestimonialsSection />
        <FeaturedPartnersSection />
        <AboutSection />
        <FounderQuoteSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
