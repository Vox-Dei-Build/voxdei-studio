import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { AOSInit } from "@/components/aos-init"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://studio.voxdei.io"
const siteName = "Vox Dei Studio"
const siteDescription =
  "Vox Dei Studio is a boutique product and venture studio — product, design, and engineering in one senior team, for founders and operators building things that need to hold up."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vox Dei Studio — Beautifully judged digital products",
    template: "%s | Vox Dei Studio",
  },
  description: siteDescription,
  keywords: [
    "Product Studio",
    "Venture Studio",
    "Boutique Product Agency",
    "AI-native Product Development",
    "Mobile-first Design",
    "WhatsApp Commerce",
    "Senior Product Partner",
    "Startup Product Studio",
    "Product Design and Engineering",
    "South Africa Tech Studio",
    "Enterprise Product Delivery",
    "Digital Product Strategy",
    "UX Design Studio",
    "Technical Product Partner",
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
    apple: "/logo-vd.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Vox Dei Studio — Beautifully judged digital products",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vox Dei Studio — Beautifully judged digital products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vox Dei Studio — Beautifully judged digital products",
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      </head>
      <body className="bg-white dark:bg-black font-sans antialiased">
        <ThemeProvider />
        <AOSInit />
        {children}
        <CookieBanner />
        <Analytics />
        <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
