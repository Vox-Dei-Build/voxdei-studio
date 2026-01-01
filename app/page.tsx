import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Studio from "@/components/Studio";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Capabilities />
      <Portfolio />
      <CaseStudies />
      <Studio />
      <WhyUs />
      <Footer />
    </main>
  );
}
