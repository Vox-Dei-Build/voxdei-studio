"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Vox Dei rebuilt our legacy platform with modern architecture and AI capabilities in record time. Their ability to navigate complex enterprise requirements while maintaining velocity is exceptional. They're true partners who understand both the technical and business challenges.",
    author: "Dhiroshen Padayachee",
    role: "Development Manager at Discovery",
    linkedin: "https://za.linkedin.com/in/dhiroshan-padayachee-21101723",
  },
  {
    quote:
      "Working with Vox Dei on Andrual AI has been transformative. Their technical depth in AI and ability to ship production-grade features rapidly gave us the velocity we needed. They don't just code—they think like product owners and help shape the vision.",
    author: "Sourabh Raj",
    role: "CTO at Andrual AI",
    linkedin: "https://de.linkedin.com/in/sraj1006",
  },
  {
    quote:
      "Vox Dei helped our organization embrace AI in a practical, impactful way. They didn't just deliver technology—they empowered our team to leverage AI capabilities that make a real difference in our clients' lives. The transformation has been remarkable.",
    author: "Palesa Tlholoe",
    role: "Co Director at IWS",
    linkedin: "https://za.linkedin.com/in/palesa-tlholoe-cfp%C2%AE-99000b3b",
  },
  {
    quote:
      "Partnering with Vox Dei on our venture building initiatives opened our eyes to what's possible when you combine corporate resources with startup velocity. They helped us navigate the innovation process and build products that actually ship, not just PowerPoints.",
    author: "Mzwandile Mathebula",
    role: "Innovation Manager at Old Mutual",
    linkedin: "https://za.linkedin.com/in/mzwandile-m-69925064",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from founders and leaders we've partnered with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4 mt-auto">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-accent transition-colors inline-block"
                  >
                    {testimonial.author}
                  </a>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
