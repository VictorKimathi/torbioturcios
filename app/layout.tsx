import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Toribio Turcios - Automotive Journalist & Writer",
  description:
    "Freelance automotive journalist specializing in technical precision and engaging storytelling. Expert coverage of EV technology, classic cars, motorsports, and industry trends.",
  keywords: "automotive journalist, car writer, EV technology, classic cars, motorsports, technical writing",
  authors: [{ name: "Toribio Turcios" }],
  openGraph: {
    title: "Toribio Turcios - Automotive Journalist & Writer",
    description: "Expert automotive journalism blending technical precision with engaging storytelling",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
