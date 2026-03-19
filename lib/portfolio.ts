export type PortfolioItem = {
  slug?: string // links to a full case study page
  name: string
  category: string
  summary: string
  image: string
  logo?: string
  liveUrl?: string
  liveLabel?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "fnb-home-loans",
    name: "FNB Home Loans",
    category: "Enterprise platform · South Africa",
    summary:
      "Frontend architecture and design-system quality inside a national-scale enterprise context where consistency and reliability matter most.",
    image: "/screenshots/fnb.png",
    logo: "/logos/fnb.png",
  },
  {
    slug: "backabuddy",
    name: "BackaBuddy",
    category: "Crowdfunding platform · South Africa",
    summary:
      "Full platform migration for South Africa's leading crowdfunding platform — rebuilding the foundation without losing the momentum of a live, high-stakes product.",
    image: "/screenshots/backabuddy.png",
    logo: "/logos/backabuddy.png",
    liveUrl: "https://www.backabuddy.co.za/",
    liveLabel: "View BackaBuddy",
  },
  {
    slug: "remy-martin",
    name: "Rémy Martin",
    category: "Brand experience · Global",
    summary:
      "Digital brand experience for one of the world's most recognised cognac houses — where heritage and contemporary relevance had to coexist without compromise.",
    image: "/screenshots/remymartin.png",
    logo: "/logos/remymartin.png",
    liveUrl: "https://www.remymartin.com/",
    liveLabel: "View Rémy Martin",
  },
  {
    slug: "pasella",
    name: "Pasella",
    category: "WhatsApp commerce · South Africa",
    summary:
      "Mobile-first conversational journeys across selling, onboarding, and payment flows shaped for real customer behaviour in emerging-market conditions.",
    image: "/screenshots/pasella.png",
    logo: "/logos/pasella.png",
  },
  {
    slug: "athaus",
    name: "Athaus",
    category: "AI workspace · Europe",
    summary:
      "Product direction, UX refinement, and delivery quality across an AI-native real-estate operating layer under live commercial pressure.",
    image: "/screenshots/andrual.png",
    logo: "/logos/andrual.png",
  },
  {
    name: "Doctorly",
    category: "Healthcare platform · Germany",
    summary:
      "Practice management and patient journey platform built for modern German healthcare providers navigating digital transformation.",
    image: "/screenshots/doctorly.png",
    logo: "/logos/doctorly.svg",
    liveUrl: "https://www.doctorly.de/",
  },
  {
    name: "Skin Renewal",
    category: "Medical aesthetics · South Africa",
    summary:
      "Patient-facing digital experience and booking journey for South Africa's leading medical aesthetics group, across multiple clinics.",
    image: "/screenshots/skinrenewal.png",
    logo: "/logos/skinrenewal.png",
    liveUrl: "https://www.skinrenewal.co.za/",
  },
  {
    name: "Bright Plan",
    category: "Financial wellness · United States",
    summary:
      "Financial wellness platform for the American workplace — product work focused on accessibility, clarity, and real behaviour change.",
    image: "/screenshots/brightplan.png",
    logo: "/logos/brightplan.png",
    liveUrl: "https://www.brightplan.com/",
  },
  {
    name: "United Exports",
    category: "E-commerce · South Africa",
    summary:
      "E-commerce and fulfilment platform enabling South African produce exporters to sell directly to international buyers.",
    image: "/screenshots/unitedexports.png",
    logo: "/logos/unitedexports.png",
    liveUrl: "https://united-exports.com/",
  },
  {
    name: "Duram",
    category: "Paint & coatings · South Africa",
    summary:
      "Digital platform and consumer experience for one of South Africa's most recognised paint and coatings brands.",
    image: "/screenshots/duram.png",
    logo: "/logos/duram.png",
    liveUrl: "https://www.duram.co.za/",
  },
  {
    name: "Rhinotears",
    category: "Eye care · South Africa",
    summary:
      "Product and brand platform for a specialist eye care company — clinical credibility made accessible to everyday patients.",
    image: "/screenshots/rhinotears.png",
    logo: "/logos/rhinotears.png",
    liveUrl: "https://www.rhinotears.com/",
  },
  {
    name: "Roomking",
    category: "Hospitality · South Africa",
    summary:
      "Property and hospitality booking platform built for a market where trust, simplicity, and mobile performance define conversion.",
    image: "/screenshots/roomking.png",
    logo: "/logos/roomking.png",
    liveUrl: "https://roomking.com/za",
  },
  {
    name: "Bright Africa",
    category: "EdTech · Africa",
    summary:
      "EdTech platform expanding access to quality education content across Africa — designed for constrained connectivity and diverse learner contexts.",
    image: "/screenshots/brightafrica.png",
    logo: "/logos/brightafrica.png",
    liveUrl: "https://brightafrica.riscura.com/",
  },
  {
    name: "Platinumseed",
    category: "Venture capital · South Africa",
    summary:
      "Platform and portfolio visibility for a South African VC firm — translating investment discipline into a credible digital presence.",
    image: "/screenshots/platinumseed.png",
    logo: "/logos/platinumseed.png",
    liveUrl: "https://www.platinumseed.com/",
  },
  {
    name: "Koekie",
    category: "Consumer brand · South Africa",
    summary:
      "Consumer brand digital presence and commerce experience built around a beloved South African product with a loyal following.",
    image: "/screenshots/koekie.png",
    logo: "/logos/koekie.png",
    liveUrl: "https://koekie.co.za/",
  },
  {
    name: "Russian Bear",
    category: "Brand · South Africa",
    summary:
      "Digital brand presence for an iconic South African vodka brand — heritage positioning updated for a contemporary audience.",
    image: "/screenshots/russianbear.png",
    logo: "/logos/russianbear.png",
    liveUrl: "https://www.russianbear.co.za/",
  },
  {
    name: "True Blue",
    category: "Brand & commerce · Caribbean",
    summary:
      "Brand and commerce platform for the Caribbean market — product work focused on local relevance, clarity, and mobile-first execution.",
    image: "/screenshots/trueblue.png",
    logo: "/logos/truebluecw.png",
    liveUrl: "https://truebluecw.com/",
  },
  {
    name: "Linphone",
    category: "VoIP & communications",
    summary:
      "Open-source VoIP and communications product — UX and product refinement work for a widely deployed enterprise telephony platform.",
    image: "/screenshots/linphone.png",
    logo: "/logos/linphone.png",
    liveUrl: "https://www.linphone.org/",
  },
]
