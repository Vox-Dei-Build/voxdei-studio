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
      "Product clarity, design-system quality, and frontend discipline inside a national-scale banking context — where judgment matters as much as execution, and consistency is a strategic advantage.",
    proof: "Enterprise discipline with relevance for retail banking strategy.",
    image: "/screenshots/fnb.png",
    logo: "/logos/fnb.png",
    challenge:
      "Inside a national-scale banking platform, the challenge was not only delivery quality — it was keeping product clarity and systems thinking intact inside enterprise complexity, where drift and dilution are the default.",
    work: [
      "Contributed to modern frontend architecture and design-system quality while maintaining product clarity across delivery constraints.",
      "Helped keep implementation standards reliable across complex delivery constraints.",
      "Focused on product quality where consistency and resilience mattered more than novelty.",
    ],
    outcome: [
      "Stronger execution confidence inside a national-scale usage context.",
      "Proof that Vox Dei can operate with enterprise discipline, not only speed.",
      "A sharper signal for buyers who need quality under complexity.",
    ],
    liveUrl: "https://www.fnb.co.za/index.html",
    liveLabel: "View FNB",
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
    category: "Commerce strategy · South Africa",
    summary:
      "Mobile-first conversational journeys across selling, onboarding, and payment-oriented flows — with lessons in trust, simplicity, and customer behaviour that extend beyond the product itself.",
    proof: "Practical execution and strategy insight for emerging-market operating conditions.",
    image: "/screenshots/pasella.png",
    logo: "/logos/pasella.png",
    challenge:
      "Understanding how to drive trust, onboarding, and conversion inside mobile-first, messaging-native environments demanded genuine customer insight — not just WhatsApp-native execution. The real work was diagnosing behaviour, not just implementing flows.",
    work: [
      "Shaped conversational selling and onboarding flows where the customer already is.",
      "Worked around WhatsApp-native constraints instead of pretending customers behave like desktop users.",
      "Used the product as a live learning engine for customer friction, retail behaviour, and low-friction journey design.",
    ],
    outcome: [
      "A stronger mobile-first commerce and onboarding posture.",
      "Proof of execution in environments where simplicity and usefulness matter more than polish theatre.",
      "A clearer example of Vox Dei translating product work into strategic insight for retail and service businesses.",
    ],
    liveUrl: "https://pasella.co/",
    liveLabel: "View Pasella",
  },
  {
    slug: "athaus",
    name: "Athaus",
    category: "AI workspace · Europe",
    summary:
      "Product direction, UX refinement, and delivery quality across an AI-native real-estate operating layer under live commercial pressure.",
    proof: "Judgment under ambiguity, plus practical AI orchestration thinking.",
    image: "/screenshots/andrual.png",
    logo: "/logos/andrual.png",
    challenge:
      "A serious product needed stronger clarity across product structure, interaction quality, execution rhythm, and what the experience was actually asking users to do.",
    work: [
      "Reframed key surfaces around operational clarity instead of feature sprawl.",
      "Tightened UX quality across product flows where execution confidence mattered.",
      "Kept design, implementation, QA, and AI workflow orchestration connected across live delivery pressure — so that AI-assisted tooling sharpened execution rather than fragmenting it.",
    ],
    outcome: [
      "A more credible and execution-ready product direction.",
      "Sharper UX in areas where trust, speed, and usability needed to coexist.",
      "Evidence of senior product judgment and AI orchestration thinking inside a live, commercially pressured AI-native product.",
    ],
    liveUrl: "https://www.athaus.ai/en/",
    liveLabel: "View Athaus",
  },
  {
    slug: "doctorly",
    name: "Doctorly",
    category: "Healthcare platform · Germany",
    summary:
      "Practice management and patient journey platform built for modern German healthcare providers navigating digital transformation.",
    proof: "Healthcare digital transformation demands rigour, not just innovation.",
    image: "/screenshots/doctorly.png",
    logo: "/logos/doctorly.svg",
    challenge:
      "German healthcare providers face tight regulatory requirements, entrenched clinical workflows, and patients accustomed to physical touchpoints. Modernising practice management meant navigating compliance, clinical trust, and digital adoption simultaneously — without disrupting care delivery.",
    work: [
      "Shaped product flows for practice management and patient-facing journeys.",
      "Worked across scheduling, clinical workflow, and patient communication surfaces.",
      "Kept UX legible under the constraints of German healthcare regulation and provider expectations.",
    ],
    outcome: [
      "A more coherent practice management layer that reduced friction for providers without compromising clinical rigour.",
      "Evidence of Vox Dei operating in a regulated, high-trust industry context.",
      "A sharper signal for healthcare and enterprise buyers evaluating digital product partners.",
    ],
    liveUrl: "https://www.doctorly.de/",
    liveLabel: "View Doctorly",
  },
  {
    slug: "skin-renewal",
    name: "Skin Renewal",
    category: "Medical aesthetics · South Africa",
    summary:
      "Digital platform, booking experience, and SEO strategy for South Africa's leading medical aesthetics group — built to convert and built to rank.",
    proof: "Visibility and trust have to work together when the product is your health.",
    image: "/screenshots/skinrenewal.png",
    logo: "/logos/skinrenewal.png",
    challenge:
      "A multi-clinic medical aesthetics group needed a patient-facing experience that felt premium without losing clinical authority — and needed to be found by patients searching for the right treatment, across dozens of service categories and locations.",
    work: [
      "Designed and built the patient-facing digital experience and booking flow across multiple clinics.",
      "Executed a comprehensive SEO strategy across service pages, location pages, and clinical content.",
      "Worked across brand, UX, and organic search — keeping clinical credibility central throughout.",
    ],
    outcome: [
      "A booking journey that builds confidence before arrival, not only at the reception desk.",
      "Meaningful improvement in organic search visibility across high-intent medical aesthetics queries.",
      "Evidence of Vox Dei operating at the intersection of brand, clinical trust, and search-driven conversion.",
    ],
    liveUrl: "https://www.skinrenewal.co.za/",
    liveLabel: "View Skin Renewal",
  },
  {
    slug: "bright-plan",
    name: "Bright Plan",
    category: "Financial wellness · United States",
    summary:
      "Financial wellness platform for the American workplace — product work focused on accessibility, clarity, and real behaviour change.",
    proof: "Behaviour change requires design that respects the complexity of money.",
    image: "/screenshots/brightplan.png",
    logo: "/logos/brightplan.png",
    challenge:
      "A financial wellness platform for the American workplace needed to turn complex financial guidance into something employees would actually use — without oversimplifying real-money decisions or overwhelming people already stressed about their finances.",
    work: [
      "Focused on product accessibility, content clarity, and interaction quality across the financial wellness experience.",
      "Reduced the cognitive load of financial decision-making without stripping out necessary complexity.",
      "Worked toward genuine behaviour change as the outcome, not just feature completion.",
    ],
    outcome: [
      "A more usable and trusted financial wellness product for a demanding, diverse workplace audience.",
      "Evidence of Vox Dei building for behaviour change, not just feature delivery.",
      "A sharper case for clients in regulated, high-stakes consumer verticals.",
    ],
    liveUrl: "https://www.brightplan.com/",
    liveLabel: "View Bright Plan",
  },
  {
    slug: "united-exports",
    name: "United Exports",
    category: "E-commerce · South Africa",
    summary:
      "E-commerce platform, UX/UI audits, MVP delivery, performance improvements, and ongoing maintenance for a South African produce export business.",
    proof: "Long-term product partnerships outperform one-off builds.",
    image: "/screenshots/unitedexports.png",
    logo: "/logos/unitedexports.png",
    challenge:
      "An export business needed more than a website — they needed a product partner who could build the initial platform, audit and improve what already existed, keep performance sharp, and stay embedded as the product evolved.",
    work: [
      "Built and iterated MVPs for the e-commerce and fulfilment platform.",
      "Conducted UX/UI audits to identify and fix friction across the buyer and seller journeys.",
      "Delivered performance improvements and held an ongoing maintenance retainer to keep the product stable and current.",
    ],
    outcome: [
      "A platform that improved continuously rather than stagnating after launch.",
      "Evidence of Vox Dei as a long-term product partner, not just a delivery team.",
      "A useful case for clients who need embedded product capability beyond the initial build.",
    ],
    liveUrl: "https://united-exports.com/",
    liveLabel: "View United Exports",
  },
  {
    slug: "duram",
    name: "Duram",
    category: "Paint & coatings · South Africa",
    summary:
      "Digital platform and SEO strategy for one of South Africa's most recognised paint and coatings brands — built to drive sales, not just awareness.",
    proof: "A brand this well known deserves a digital presence that converts.",
    image: "/screenshots/duram.png",
    logo: "/logos/duram.png",
    challenge:
      "A nationally recognised paint and coatings brand had the brand awareness but needed digital infrastructure and search visibility that translated recognition into actual sales — across both trade professionals and everyday consumers.",
    work: [
      "Built the digital platform and consumer experience for a multi-audience product range.",
      "Executed an SEO strategy focused on high-intent product and category queries that drive purchase decisions.",
      "Worked across product discovery, specification, and the conversion paths that move browsers to buyers.",
    ],
    outcome: [
      "A digital presence with the reach and clarity to support actual sales outcomes, not just brand visibility.",
      "Improved organic search performance across category and product-level queries.",
      "Evidence of Vox Dei tying digital execution directly to commercial results.",
    ],
    liveUrl: "https://www.duram.co.za/",
    liveLabel: "View Duram",
  },
  {
    slug: "rhinotears",
    name: "Rhinotears",
    category: "Cause brand · South Africa",
    summary:
      "Digital presence for a wine brand born out of a conservation crisis — every bottle sold funds the fight against rhino poaching in South Africa's national parks.",
    proof: "Purpose needs a platform that makes the cause feel urgent and the product feel worth buying.",
    image: "/screenshots/rhinotears.png",
    logo: "/logos/rhinotears.png",
    challenge:
      "Rhino poaching reached crisis point in South Africa — and Rhino Tears wine was launched in 2014 to raise funds for conservation efforts inside the country's national parks. The digital challenge was making the cause feel urgent and credible while making the wine feel worth buying on its own merits.",
    work: [
      "Built the brand and product platform for a cause-driven wine label.",
      "Worked across conservation storytelling, product presentation, and the emotional arc that turns awareness into purchase.",
      "Kept the mission front and centre without letting it overwhelm the product.",
    ],
    outcome: [
      "A digital presence that makes the cause legible and the product desirable — in the same breath.",
      "Evidence of Vox Dei working where brand purpose and commercial intent have to coexist without compromise.",
      "A sharp case for mission-driven brands that need to convert belief into behaviour.",
    ],
    liveUrl: "https://www.rhinotears.com/",
    liveLabel: "View Rhinotears",
  },
  {
    slug: "roomking",
    name: "Roomking",
    category: "Hospitality · South Africa",
    summary:
      "Property and hospitality booking platform built for a market where trust, simplicity, and mobile performance define conversion.",
    proof: "Conversion is won or lost before the booking page.",
    image: "/screenshots/roomking.png",
    logo: "/logos/roomking.png",
    challenge:
      "A property and hospitality booking platform needed to build trust, perform on mobile, and convert browsers into bookers in a market where digital confidence is still being earned — and where a slow or confusing experience ends the journey immediately.",
    work: [
      "Built the booking platform for a mobile-first, trust-sensitive market.",
      "Worked across product architecture, booking UX, and the performance standards mobile-first South African users require.",
      "Focused on simplicity and trust signals across the conversion journey.",
    ],
    outcome: [
      "A booking platform built for where the market actually is, not where it might be.",
      "Evidence of Vox Dei working in mobile-first, emerging-market consumer contexts.",
      "A sharper signal for hospitality, travel, and marketplace clients.",
    ],
    liveUrl: "https://roomking.com/za",
    liveLabel: "View Roomking",
  },
  {
    slug: "bright-africa",
    name: "Bright Africa",
    category: "Research platform · Africa",
    summary:
      "Digital platform for Riscura's Bright Africa research — presenting investment insights and data on African markets to a professional audience.",
    proof: "Research this rigorous deserves a platform that matches its credibility.",
    image: "/screenshots/brightafrica.png",
    logo: "/logos/brightafrica.png",
    challenge:
      "Riscura — an investment risk and research consultancy — needed a platform to present their Bright Africa insights to professional investors and institutions. The content was authoritative; the platform needed to reflect that without burying it in complexity.",
    work: [
      "Built the Bright Africa research platform for Riscura's African investment insights.",
      "Worked across information architecture, data presentation, and the clarity that institutional audiences require.",
      "Made dense research material navigable and credible at a professional standard.",
    ],
    outcome: [
      "A platform that gives Riscura's research the reach and authority it deserves.",
      "Evidence of Vox Dei building for data-rich, audience-specific content products.",
      "A useful case for clients in finance, research, and professional services.",
    ],
    liveUrl: "https://brightafrica.riscura.com/",
    liveLabel: "View Bright Africa",
  },
  {
    slug: "platinumseed",
    name: "Platinumseed",
    category: "Digital agency · South Africa",
    summary:
      "Digital platform for a South African digital agency — a presence that reflects the quality of work they deliver for their own clients.",
    proof: "Agencies are judged by the standard of their own digital house.",
    image: "/screenshots/platinumseed.png",
    logo: "/logos/platinumseed.png",
    challenge:
      "A digital agency's own website is its most visible piece of work — and the hardest to get right. Platinumseed needed a digital presence that communicated capability, portfolio depth, and the kind of quality that makes prospective clients confident before the first conversation.",
    work: [
      "Built the digital platform and brand presence for the agency.",
      "Worked across information architecture, capability communication, and portfolio presentation.",
      "Shaped a product that held the agency's own standard, not just described it.",
    ],
    outcome: [
      "A digital presence that demonstrates capability rather than just claiming it.",
      "Evidence of Vox Dei understanding the specific challenge of building for a discerning, industry-insider audience.",
      "A useful case for professional services and agency clients managing reputation through their own digital product.",
    ],
    liveUrl: "https://www.platinumseed.com/",
    liveLabel: "View Platinumseed",
  },
  {
    slug: "koekie",
    name: "Koekie",
    category: "Consumer brand · South Africa",
    summary:
      "Consumer brand digital presence and commerce experience built around a beloved South African product with a loyal following.",
    proof: "Beloved brands deserve a digital experience to match.",
    image: "/screenshots/koekie.png",
    logo: "/logos/koekie.png",
    challenge:
      "A beloved South African consumer brand needed a digital presence and commerce experience that honoured the product's emotional resonance — the loyalty was already there, the digital layer just needed to earn its place without turning it into something it wasn't.",
    work: [
      "Built the brand digital presence and commerce experience for a product with a strong local following.",
      "Worked across brand story, product discovery, and e-commerce flows that respected why people already loved the product.",
      "Kept the experience warm, direct, and genuinely South African.",
    ],
    outcome: [
      "A digital experience that feels as good as the product itself.",
      "Evidence of Vox Dei working with consumer brands where emotional connection is the competitive advantage.",
      "A sharp signal for clients with loyal audiences and real brand equity to protect.",
    ],
    liveUrl: "https://koekie.co.za/",
    liveLabel: "View Koekie",
  },
  {
    slug: "russian-bear",
    name: "Russian Bear",
    category: "Brand · South Africa",
    summary:
      "Digital brand presence for an iconic South African vodka brand — heritage positioning updated for a contemporary audience.",
    proof: "Heritage brands can modernise without losing the plot.",
    image: "/screenshots/russianbear.png",
    logo: "/logos/russianbear.png",
    challenge:
      "An iconic South African vodka brand needed a digital presence that respected its heritage positioning while connecting with a younger, contemporary audience — without the nostalgia making it feel dated or the modernisation making it feel foreign.",
    work: [
      "Shaped the digital brand presence for a heritage vodka brand entering a competitive, youth-driven category.",
      "Worked across visual language, brand narrative, and digital execution for a product that lives in culture as much as on shelves.",
      "Balanced heritage with contemporary relevance.",
    ],
    outcome: [
      "A brand presence that feels confident across generations.",
      "Evidence of Vox Dei working at the intersection of culture, heritage, and modern digital brand.",
      "A sharp case for clients with legacy brand equity navigating a changing audience.",
    ],
    liveUrl: "https://www.russianbear.co.za/",
    liveLabel: "View Russian Bear",
  },
  {
    slug: "true-blue",
    name: "True Blue",
    category: "Brand & commerce · Caribbean",
    summary:
      "Brand and commerce platform for the Caribbean market — product work focused on local relevance, clarity, and mobile-first execution.",
    proof: "Local relevance is a product decision, not just a branding one.",
    image: "/screenshots/trueblue.png",
    logo: "/logos/truebluecw.png",
    challenge:
      "A brand and commerce platform for the Caribbean market needed to feel genuinely local — not a generic template adapted for a new geography, but a digital product shaped around real market behaviour, mobile-first execution, and the way people in the Caribbean actually shop and build trust.",
    work: [
      "Built the brand and commerce platform for a Caribbean-market product.",
      "Worked across local market fit, mobile-first performance, and the clarity that converts browsers to buyers in a market with specific cultural and commercial expectations.",
      "Shaped every surface around local relevance.",
    ],
    outcome: [
      "A commerce platform that performs where it matters, not just in demo conditions.",
      "Evidence of Vox Dei adapting execution to geography, not just translating it.",
      "A useful case for clients entering or serving markets outside the standard digital product assumptions.",
    ],
    liveUrl: "https://truebluecw.com/",
    liveLabel: "View True Blue",
  },
  {
    slug: "linphone",
    name: "Linphone",
    category: "VoIP & communications",
    summary:
      "Open-source VoIP and communications product — UX and product refinement work for a widely deployed enterprise telephony platform.",
    proof: "Open-source doesn't mean UX has to be an afterthought.",
    image: "/screenshots/linphone.png",
    logo: "/logos/linphone.png",
    challenge:
      "A widely deployed open-source VoIP platform serving enterprise telephony users globally needed UX and product refinement work that respected the technical depth of its audience while making the experience significantly more usable for both IT administrators and end users.",
    work: [
      "Led UX and product refinement across the Linphone platform.",
      "Worked across call flows, configuration interfaces, and the day-to-day experience of enterprise telephony users.",
      "Brought product clarity to a technically mature platform without undermining its depth.",
    ],
    outcome: [
      "A more usable enterprise communications product serving millions of deployments globally.",
      "Evidence of Vox Dei working with technically complex, widely deployed open-source products.",
      "A sharp signal for clients in B2B software, communications, and platform product work.",
    ],
    liveUrl: "https://www.linphone.org/",
    liveLabel: "View Linphone",
  },
]

export const partnerLogos = [
  { name: "FNB", src: "/logos/fnb.png", slug: "fnb-home-loans" },
  { name: "Pasella", src: "/logos/pasella.png", slug: "pasella" },
  { name: "BackaBuddy", src: "/logos/backabuddy.png", slug: "backabuddy" },
  { name: "Doctorly", src: "/logos/doctorly.svg", slug: "doctorly" },
  { name: "Skin Renewal", src: "/logos/skinrenewal.png", slug: "skin-renewal" },
  { name: "Bright Plan", src: "/logos/brightplan.png", slug: "bright-plan" },
  { name: "Remy Martin", src: "/logos/remymartin.png", slug: "remy-martin" },
  { name: "United Exports", src: "/logos/unitedexports.png", slug: "united-exports" },
]
