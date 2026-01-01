import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vox Dei Studio | AI Venture Studio",
  description: "AI Venture Studio building AI-enabled products, platforms, and modern systems — fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
