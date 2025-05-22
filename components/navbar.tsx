"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0b0c0e]/90 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light text-white">
              ROYAL <span className="text-[#6492b8]">PHOENICIA</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/rooms">Rooms</NavLink>
            <NavLink href="/dining">Dining</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0c0e]/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/rooms" onClick={() => setIsMenuOpen(false)}>
                Rooms
              </MobileNavLink>
              <MobileNavLink href="/dining" onClick={() => setIsMenuOpen(false)}>
                Dining
              </MobileNavLink>
              <MobileNavLink href="/events" onClick={() => setIsMenuOpen(false)}>
                Events
              </MobileNavLink>
              <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#9e9e9e] hover:text-white transition-colors relative group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#6492b8] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#9e9e9e] hover:text-white transition-colors py-2 border-b border-[#1d4869]/30"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
