import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Vox Dei Studio was founded in 2014 and has evolved into a technical delivery partner for enterprises, startups, and brands across Africa.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Avatar */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/061-20240608.jpg"
                    alt="Tsepo Ntsaba, Founder & CEO of Vox Dei Studio"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">Tsepo Ntsaba</h3>
                    <p className="text-muted-foreground">Founder & CEO</p>
                  </div>

                  <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                    <p>
                      Over a decade of experience in software engineering and technical leadership across financial services, healthcare, logistics, and commerce.
                    </p>
                    <p>
                      Led frontend architecture at FNB Home Loans and delivered production systems used by thousands daily. Track record spans enterprises, scale-ups, and venture builds—with a consistent focus on strong architecture, reliable execution, and outcomes that ship.
                    </p>
                  </div>

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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
