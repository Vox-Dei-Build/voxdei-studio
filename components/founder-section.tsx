import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Header with Avatar */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Avatar */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/061-20240608.jpg"
                  alt="Tsepo Ntsaba, CEO and Founder of Vox Dei Studios"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>

              {/* Name and Title */}
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-2">
                  Meet the Founder
                </h2>
                <h3 className="text-2xl font-semibold mb-1">Tsepo Ntsaba</h3>
                <p className="text-muted-foreground mb-4">CEO and Founder</p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/tsepo-ntsaba-50a691133/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">

              <p>
                Tsepo's mission is simple: to glorify Christ by being a voice that inspires faith and empowers
                innovation, creating meaningful impact across faith, technology, and business. Vox Dei began in 2014 as
                Marabele Enterprise, and has evolved into Vox Dei Studio, an AI venture studio dedicated to building
                ventures, platforms, and modern systems that ship.
              </p>

              <p>
                With over a decade of experience in software engineering and technical leadership, Tsepo has helped
                design, build, and deliver production systems across startups, scale-ups, and enterprise environments.
                His work spans marketplaces, commerce, logistics, fintech, and healthcare software, with a consistent
                focus on strong architecture, reliable execution, and outcomes that users can feel.
              </p>

              <p>
                As a founder and technology leader, he has led teams, shipped platforms, and translated ideas into
                working products through disciplined iteration. His approach blends venture velocity with
                production-grade engineering, and his leadership is grounded in faith-driven conviction and a commitment
                to build with integrity.
              </p>

              <p>
                Outside of work, Tsepo is a husband and father of four. Family keeps him anchored in humility and
                purpose, and shapes how he builds: with care, responsibility, and a long-term view of impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
