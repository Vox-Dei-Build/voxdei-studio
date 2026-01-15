"use client"

import Image from "next/image"

const partners = [
  { name: "Andrual AI", logo: "/logos/andrual.png", url: "https://www.andrual.com/" },
  { name: "BackaBuddy", logo: "/logos/backabuddy.png", url: "https://www.backabuddy.co.za/" },
  { name: "Bright Africa", logo: "/logos/brightafrica.png", url: "https://brightafrica.riscura.com/" },
  { name: "Bright Plan", logo: "/logos/brightplan.png", url: "https://www.brightplan.com/" },
  { name: "Doctorly", logo: "/logos/doctorly.png", url: "https://www.doctorly.de/praxissoftware" },
  { name: "Duram", logo: "/logos/duram.png", url: "https://www.duram.co.za/" },
  { name: "FNB", logo: "/logos/fnb.png", url: "https://www.fnb.co.za/home-loans/index.html" },
  { name: "Koekie", logo: "/logos/koekie.png", url: "https://koekie.co.za/" },
  { name: "LinPhone", logo: "/logos/linphone.png", url: "https://www.linphone.org/home/" },
  { name: "Loomelo", logo: "/logos/loomelo.png", url: "https://www.loomelo.co.za/" },
  { name: "Pasella", logo: "/logos/pasella.png", url: "https://pasella.co/" },
  { name: "Platinum Seed", logo: "/logos/platinumseed.png", url: "https://www.platinumseed.com/" },
  { name: "Remy Martin", logo: "/logos/remymartin.png", url: "https://www.remymartin.com/collection/vs/" },
  { name: "Rhino Tears", logo: "/logos/rhinotears.png", url: "https://www.rhinotears.co.za/age-gateway/" },
  { name: "RoomKing", logo: "/logos/roomking.png", url: "https://roomking.com/za" },
  { name: "Russian Bear", logo: "/logos/russianbear.png", url: "https://russianbear.co.za/" },
  { name: "Skin Renewal", logo: "/logos/skinrenewal.png", url: "https://www.skinrenewal.co.za/" },
  { name: "True Blue", logo: "/logos/truebluecw.png", url: "https://truebluecw.com/" },
  { name: "United Exports", logo: "/logos/unitedexports.png", url: "https://united-exports.com/" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-muted/30" aria-label="Trusted partners and clients">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Leading Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud to have partnered with industry-leading brands and organizations across fintech, healthcare, e-commerce, and enterprise software
          </p>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee w-max">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <a
                key={`${partner.name}-1-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
                className="shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo - trusted partner of Vox Dei Studio`}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <a
                key={`${partner.name}-2-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
                className="shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo - trusted partner of Vox Dei Studio`}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
