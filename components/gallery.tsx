"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
    alt: "Hotel Exterior",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=600&auto=format&fit=crop",
    alt: "Hotel Lobby",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop",
    alt: "Deluxe Room",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
    alt: "Restaurant",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
    alt: "Swimming Pool",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    alt: "Spa",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop",
    alt: "Ballroom",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1551105378-78e609e1d468?q=80&w=600&auto=format&fit=crop",
    alt: "Royal Suite",
    category: "Rooms",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-[#0b0c0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-[#6492b8] mb-4">GALLERY</h2>
          <p className="text-[#9e9e9e] max-w-2xl mx-auto">
            Explore our hotel through a visual journey showcasing our elegant spaces, luxurious accommodations, and
            exceptional amenities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0b0c0e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-light">{image.alt}</div>
                    <div className="text-[#6492b8] text-sm">{image.category}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center text-[#6492b8] hover:text-white transition-colors duration-300"
          >
            View Full Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-[#6492b8] transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}
