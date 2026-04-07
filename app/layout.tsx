import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { AOSInit } from "@/components/aos-init"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const siteUrl = "https://studio.voxdei.io"
const siteName = "Vox Dei Studio"
const siteDescription =
  "Senior product judgment, beautifully executed. Vox Dei Studio is product, design, and engineering in one senior team — for founders and operators building things that have to hold."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vox Dei Studio — Senior product judgment, beautifully executed",
    template: "%s | Vox Dei Studio",
  },
  description: siteDescription,
  keywords: [
    "Product Studio",
    "Product Design and Engineering",
    "Senior Product Partner",
    "Technical Product Partner",
    "Digital Product Strategy",
    "Product Strategy",
    "Enterprise Product Delivery",
    "UX Design Studio",
    "Full-stack Product Team",
    "South Africa Tech Studio",
    "Boutique Product Agency",
    "Mobile-first Design",
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
    title: "Vox Dei Studio — Senior product judgment, beautifully executed",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vox Dei Studio — Senior product judgment, beautifully executed",
    description: siteDescription,
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
      <body className={`bg-white dark:bg-black font-sans antialiased ${_geist.variable} ${_geistMono.variable} ${cormorant.variable}`}>
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
