"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Define static images with direct URLs
const slides = [
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop",
    title: "Experience Luxury",
    subtitle: "In the Heart of the City",
    description: "Discover unparalleled comfort and elegance at Royal Phoenicia",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop",
    title: "Modern Elegance",
    subtitle: "Timeless Hospitality",
    description: "Where contemporary design meets exceptional service",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop",
    title: "Breathtaking Views",
    subtitle: "Unforgettable Moments",
    description: "Wake up to stunning panoramas of the city skyline",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Regular img tag as fallback */}
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0b0c0e]/70 via-transparent to-[#0b0c0e]"
            style={{ zIndex: 2 }}
          ></div>
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-xl md:text-2xl font-light text-white mb-4">{slides[currentSlide].subtitle}</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">{slides[currentSlide].title}</h1>
          <p className="text-lg md:text-xl text-[#d9d9d9] mb-8 max-w-2xl mx-auto">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="px-8 py-3 bg-[#1d4869] hover:bg-[#2f6587] text-white rounded-sm transition-colors duration-300"
            >
              Explore Rooms
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/30 hover:border-white/60 text-white rounded-sm transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#6492b8] w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
