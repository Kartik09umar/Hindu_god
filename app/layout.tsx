import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Divine Darshan – HD Photos of Hindu Gods",
  description:
    "Explore and download high-quality images of Hindu deities. Find beautiful devotional artwork of Lord Ram, Hanuman, Shiva, Lakshmi and more.",
  keywords:
    "Hindu gods, divine images, HD photos, Lord Ram, Hanuman, Shiva, Lakshmi, devotional art, spiritual wallpapers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}


import './globals.css'