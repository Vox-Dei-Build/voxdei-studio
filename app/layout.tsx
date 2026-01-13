import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://www.voxdei.studio"
const siteName = "Vox Dei Studio"
const siteDescription =
  "AI Venture Studio building AI-enabled products, platforms, and modern systems — fast. We partner with enterprises and startups to design, build, and ship production-grade software."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vox Dei Studio | AI Venture Studio",
    template: "%s | Vox Dei Studio",
  },
  description: siteDescription,
  keywords: [
    "AI Venture Studio",
    "AI Development",
    "Enterprise Software",
    "Product Development",
    "Software Development",
    "Venture Building",
    "AI Products",
    "WhatsApp Commerce",
    "Platform Development",
    "Full-Stack Development",
    "React Development",
    "Next.js Development",
    "TypeScript Development",
  ],
  authors: [{ name: "Vox Dei Studio" }],
  creator: "Vox Dei Studio",
  publisher: "Vox Dei Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo-v.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Vox Dei Studio | AI Venture Studio",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vox Dei Studio - AI Venture Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vox Dei Studio | AI Venture Studio",
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
