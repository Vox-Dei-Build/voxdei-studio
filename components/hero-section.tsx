"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const partnerSets = [
  [
    { name: "FNB", logo: "/logos/fnb.png" },
    { name: "Remy Martin", logo: "/logos/remymartin.png" },
    { name: "Doctorly", logo: "/logos/doctorly.png" },
    { name: "Bright Plan", logo: "/logos/brightplan.png" },
    { name: "Skin Renewal", logo: "/logos/skinrenewal.png" },
    { name: "BackaBuddy", logo: "/logos/backabuddy.png" },
    { name: "Platinum Seed", logo: "/logos/platinumseed.png" },
  ],
  [
    { name: "Andrual AI", logo: "/logos/andrual.png" },
    { name: "Bright Africa", logo: "/logos/brightafrica.png" },
    { name: "Duram", logo: "/logos/duram.png" },
    { name: "Koekie", logo: "/logos/koekie.png" },
    { name: "LinPhone", logo: "/logos/linphone.png" },
    { name: "Loomelo", logo: "/logos/loomelo.png" },
    { name: "Pasella", logo: "/logos/pasella.png" },
  ],
  [
    { name: "Rhino Tears", logo: "/logos/rhinotears.png" },
    { name: "RoomKing", logo: "/logos/roomking.png" },
    { name: "Russian Bear", logo: "/logos/russianbear.png" },
    { name: "True Blue", logo: "/logos/truebluecw.png" },
    { name: "United Exports", logo: "/logos/unitedexports.png" },
    { name: "FNB", logo: "/logos/fnb.png" },
    { name: "Doctorly", logo: "/logos/doctorly.png" },
  ],
];

export function HeroSection() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % partnerSets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-background"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6" data-aos="fade-down" data-aos-delay="50">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-full">
              Venture Studio & Technical Partner
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ship faster.
            <br />
            Scale smarter.
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Building AI-enabled products, enterprise platforms, and digital
            experiences — fast.
          </p>

          <div className="flex justify-center mb-20" data-aos="zoom-in" data-aos-delay="200">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-base font-medium rounded-full bg-foreground hover:bg-foreground/90 text-background shadow-none"
            >
              <a href="#contact">Make It Happen</a>
            </Button>
          </div>

          {/* Partner logos - contained width with fade */}
          <div className="max-w-5xl mx-auto">
            <div
              className="flex items-center justify-center gap-4 md:gap-6 mb-10"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="hidden sm:block flex-1 h-px bg-border" />
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-medium text-foreground">
                  Trusted by leading brands
                </span>{" "}
                <span className="hidden sm:inline">
                  to build world-class products.
                </span>
              </p>
              <div className="hidden sm:block flex-1 h-px bg-border" />
            </div>

            <div
              className="relative h-14 sm:h-16 md:h-20 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {partnerSets.map((partners, setIndex) => (
                <div
                  key={setIndex}
                  className={`absolute inset-0 flex items-center justify-center gap-5 sm:gap-6 md:gap-10 transition-opacity duration-1000 ${
                    currentSet === setIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {partners.map((partner, partnerIndex) => (
                    <div
                      key={partner.name}
                      className={`relative w-16 h-10 sm:w-18 sm:h-11 md:w-24 md:h-14 grayscale opacity-70 shrink-0 ${
                        partnerIndex >= 4 ? "hidden sm:block" : ""
                      } ${partnerIndex >= 5 ? "hidden! md:block!" : ""}`}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
