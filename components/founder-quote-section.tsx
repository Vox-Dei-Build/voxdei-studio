import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FounderQuoteSection() {
  return (
    <section id="founder" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-8 text-foreground">
            "We build software that ships. Not decks, not promises—working systems that run in production and create real value."
          </blockquote>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/061-20240608.jpg"
                alt="Tsepo Ntsaba, Founder & CEO"
                fill
                className="object-cover object-[center_30%]"
              />
            </div>
            <div>
              <p className="font-semibold">Tsepo Ntsaba</p>
              <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/tsepo-ntsaba-50a691133/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
