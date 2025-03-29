"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#themes", label: "Themes" },
    { href: "#schedule", label: "Schedule" },
    { href: "#prizes", label: "Prizes" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex flex-col items-center">
          <img src="./ICON.png" alt="Logo" className="h-[50px] " />

          {/* <span className="text-3xl font-bold text-amber-500">∞</span> */}
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-gray-300 hover:text-white transition-colors ${activeSection === link.href.substring(1) ? "text-red-500 font-medium" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
            <a href="#" className="text-white no-underline">Register</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-gray-300 hover:text-white transition-colors ${activeSection === link.href.substring(1) ? "text-red-500 font-medium" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
              <a href="#" className="text-white no-underline">Register</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

