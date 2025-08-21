"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/whats-new", label: "What's New" },
    { href: "/sitemap", label: "Site Map" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/feedback", label: "Feedback" },
  ]

  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
                alt="Unit Converter Logo"
                className="h-12 w-12 rounded-xl shadow-lg border-2 border-blue-200"
              />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Unit Converter Pro
              </h1>
              <p className="text-xs text-gray-500">Professional Conversion Tools</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
