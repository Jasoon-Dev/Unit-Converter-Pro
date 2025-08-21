import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Unit Converter Pro | Convert Length, Weight, Temperature & More",
  description:
    "Convert between hundreds of units across 30+ categories with precision and ease. Free online unit converter for length, weight, temperature, volume, and more.",
  keywords:
    "unit converter, conversion calculator, metric converter, length converter, weight converter, temperature converter",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="MUBda_qXLkzxlj8SMHUO5d2nneo02DLa2kNkHSTmNsI" />

        {/* Google AdSense - Required for approval */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7409214823148194"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-7409214823148194" />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Unit Converter Pro" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Unit Converter Pro - Convert Units Online" />
        <meta
          property="og:description"
          content="Convert between hundreds of units across 30+ categories with precision and ease."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unit Converter Pro - Convert Units Online" />
        <meta
          name="twitter:description"
          content="Convert between hundreds of units across 30+ categories with precision and ease."
        />
        <meta
          name="twitter:image"
          content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />

        {/* Favicon Links - Updated for better browser compatibility */}
        <link
          rel="icon"
          type="image/jpeg"
          sizes="16x16"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="96x96"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />
        <link
          rel="shortcut icon"
          type="image/jpeg"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />

        {/* Additional favicon formats for better compatibility */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta
          name="msapplication-TileImage"
          content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
        />

        {/* Font Styling */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
