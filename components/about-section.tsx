import { CheckCircle2 } from "lucide-react"

const principles = [
  {
    title: "Speed and Focus",
    description:
      "We ship production-grade systems in weeks, not quarters. Small team, direct communication, no account management layers.",
  },
  {
    title: "Technical Depth",
    description:
      "Full-stack expertise from MVP to enterprise scale. Modern patterns, proven architectures, and production-ready code.",
  },
  {
    title: "Product Ownership",
    description:
      "We think like builders, not contractors. From system architecture to deployment — we own the technical outcome.",
  },
  {
    title: "Real-World Impact",
    description:
      "Our systems run in production at national banks, healthcare platforms, and live commerce ventures. Software that works.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Venture Studio & Technical Partner
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We operate as a venture studio and technical partner for enterprises, startups, and brands. Our work
                spans AI-enabled products, enterprise banking systems, healthcare platforms, and premium digital
                experiences.
              </p>
              <p>
                From leading frontend architecture at FNB's national banking platform to building AI-powered WhatsApp
                commerce systems — we combine technical execution with product thinking. We've shipped production
                systems used by thousands of users daily.
              </p>
              <p>
                Whether it's an MVP that needs to launch in weeks or enterprise infrastructure that requires precision
                at scale, we deliver working software. No overhead, no intermediaries — just experienced builders who
                ship.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Why Work With Us</h3>
            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
