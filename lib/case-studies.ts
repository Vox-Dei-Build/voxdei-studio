export type CaseStudy = {
  slug: string
  name: string
  category: string
  summary: string
  proof: string
  image: string
  logo?: string
  challenge: string
  work: string[]
  outcome: string[]
  liveLabel?: string
  liveUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fnb-home-loans",
    name: "FNB Home Loans",
    category: "Enterprise platform · South Africa",
    summary:
      "Frontend architecture and design-system quality inside a national-scale enterprise context where consistency and reliability matter.",
    proof: "Enterprise discipline, not only startup pace.",
    image: "/screenshots/fnb.png",
    logo: "/logos/fnb.png",
    challenge:
      "Large-scale platform work demanded frontend discipline, clear systems thinking, and consistent quality inside enterprise complexity.",
    work: [
      "Contributed to modern frontend architecture and design-system quality.",
      "Helped keep implementation standards reliable across complex delivery constraints.",
      "Focused on product quality where consistency and resilience mattered more than novelty.",
    ],
    outcome: [
      "Stronger execution confidence inside a national-scale usage context.",
      "Proof that Vox Dei can operate with enterprise discipline, not only speed.",
      "A sharper signal for buyers who need quality under complexity.",
    ],
  },
  {
    slug: "backabuddy",
    name: "BackaBuddy",
    category: "Crowdfunding platform · South Africa",
    summary:
      "Full platform migration for South Africa's leading crowdfunding platform — rebuilding the foundation without losing the momentum of a live, high-stakes product.",
    proof: "Social impact at scale needs engineering discipline, not just purpose.",
    image: "/screenshots/backabuddy.png",
    logo: "/logos/backabuddy.png",
    challenge:
      "A live, purpose-driven platform serving thousands of active campaigns needed a full migration — modernising the underlying stack while keeping the product running, trust intact, and fundraising uninterrupted.",
    work: [
      "Led the technical migration of the platform to a modern stack under live operating conditions.",
      "Maintained product continuity throughout — no downtime, no disruption to active campaigns or donors.",
      "Worked across architecture, data integrity, and delivery coordination to keep quality and momentum aligned.",
    ],
    outcome: [
      "A fully migrated platform with a modern, maintainable foundation beneath an unchanged user experience.",
      "Zero disruption to active fundraising campaigns during the transition.",
      "Evidence of Vox Dei executing high-stakes technical work where failure is not an option.",
    ],
    liveUrl: "https://www.backabuddy.co.za/",
    liveLabel: "View BackaBuddy",
  },
  {
    slug: "remy-martin",
    name: "Rémy Martin",
    category: "Brand experience · Global",
    summary:
      "A digital brand experience for one of the world's most recognised cognac houses — where heritage and contemporary relevance had to coexist without compromise.",
    proof: "Premium brand equity demands premium digital execution.",
    image: "/screenshots/remymartin.png",
    logo: "/logos/remymartin.png",
    challenge:
      "A prestige cognac brand needed a digital presence that carried the weight of its heritage without becoming a museum — and connected meaningfully with a new generation of consumers while protecting the brand's luxury positioning.",
    work: [
      "Shaped a digital brand experience balancing heritage with contemporary relevance.",
      "Worked across interaction quality, visual language, and content flow for a premium audience.",
      "Ensured the digital execution matched the brand's physical and experiential standards.",
    ],
    outcome: [
      "A brand presence that earns attention rather than demanding it.",
      "Stronger digital articulation of a brand built over three centuries.",
      "Proof of Vox Dei's ability to operate at the intersection of luxury, brand, and digital product quality.",
    ],
    liveUrl: "https://www.remymartin.com/",
    liveLabel: "View Rémy Martin",
  },
  {
    slug: "pasella",
    name: "Pasella",
    category: "WhatsApp systems · South Africa",
    summary:
      "Mobile-first conversational journeys across selling, onboarding, and payment-oriented flows shaped for real customer behaviour.",
    proof: "Practical execution for emerging-market operating conditions.",
    image: "/screenshots/pasella.png",
    logo: "/logos/pasella.png",
    challenge:
      "Customer journeys had to work inside the realities of mobile-first behaviour, messaging flows, and operational follow-through.",
    work: [
      "Shaped conversational selling and onboarding flows where the customer already is.",
      "Worked around WhatsApp-native constraints instead of pretending customers behave like desktop users.",
      "Balanced product clarity, commercial movement, and operational practicality.",
    ],
    outcome: [
      "A stronger mobile-first commerce and onboarding posture.",
      "Proof of execution in environments where simplicity and usefulness matter more than polish theatre.",
      "A clearer example of Vox Dei working close to real-world adoption constraints.",
    ],
  },
  {
    slug: "athaus",
    name: "Athaus",
    category: "AI workspace · Europe",
    summary:
      "Product direction, UX refinement, and delivery quality across an AI-native real-estate operating layer under live commercial pressure.",
    proof: "Judgment under ambiguity, not just feature throughput.",
    image: "/screenshots/andrual.png",
    logo: "/logos/andrual.png",
    challenge:
      "A serious product needed stronger clarity across product structure, interaction quality, execution rhythm, and what the experience was actually asking users to do.",
    work: [
      "Reframed key surfaces around operational clarity instead of feature sprawl.",
      "Tightened UX quality across product flows where execution confidence mattered.",
      "Worked closer to real delivery pressure so design, implementation, and QA stayed connected.",
    ],
    outcome: [
      "A more credible and execution-ready product direction.",
      "Sharper UX in areas where trust, speed, and usability needed to coexist.",
      "Evidence of senior product judgment under real operating pressure.",
    ],
  },
]

export const partnerLogos = [
  { name: "FNB", src: "/logos/fnb.png" },
  { name: "Pasella", src: "/logos/pasella.png" },
  { name: "BackaBuddy", src: "/logos/backabuddy.png" },
  { name: "Doctorly", src: "/logos/doctorly.svg" },
  { name: "Skin Renewal", src: "/logos/skinrenewal.png" },
  { name: "Bright Plan", src: "/logos/brightplan.png" },
  { name: "Remy Martin", src: "/logos/remymartin.png" },
  { name: "United Exports", src: "/logos/unitedexports.png" },
]
