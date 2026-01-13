"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation - Mobile First */}
          <div className="w-full mx-auto lg:hidden scale-[2] md:scale-[2] -mt-8">
            <DotLottieReact
              src="https://lottie.host/4824b1a4-5719-495a-9b2e-ac5633134c63/KgCmtKkSfD.lottie"
              loop
              autoplay
            />
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                AI Venture Studio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 md:mb-8">
              Building AI-enabled products, enterprise platforms, and digital
              experiences — <span className="text-muted-foreground">fast.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 md:mb-12">
              From AI-powered commerce platforms to enterprise banking systems
              and premium brand experiences. We ship production-grade software
              that scales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="#portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Lottie Animation - Desktop Only */}
          <div className="hidden lg:block w-full mx-auto lg:w-full xl:w-full md:scale-[2] lg:scale-[2.5] xl:scale-[2.5]">
            <DotLottieReact
              src="https://lottie.host/4824b1a4-5719-495a-9b2e-ac5633134c63/KgCmtKkSfD.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
