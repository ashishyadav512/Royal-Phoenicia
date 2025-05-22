import Link from "next/link"

const rooms = [
  {
    title: "Deluxe Suite",
    description: "Spacious accommodation with panoramic city views and premium amenities.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop",
    price: "From $350 per night",
    features: ["King Size Bed", "City View", "Free Wi-Fi", "Mini Bar"],
  },
  {
    title: "Executive Room",
    description: "Elegant room designed for the business traveler with dedicated workspace.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600&auto=format&fit=crop",
    price: "From $280 per night",
    features: ["Queen Size Bed", "Work Desk", "Coffee Machine", "Smart TV"],
  },
  {
    title: "Royal Suite",
    description: "Our finest accommodation offering unparalleled luxury and personalized service.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop",
    price: "From $550 per night",
    features: ["King Size Bed", "Living Room", "Jacuzzi", "Butler Service"],
  },
]

export function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24 bg-[#0b0c0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-[#6492b8] mb-4">ACCOMMODATIONS</h2>
          <p className="text-[#9e9e9e] max-w-2xl mx-auto">
            Discover our range of thoughtfully designed rooms and suites, each offering a perfect blend of comfort and
            sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-[#141d24] rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">{room.title}</h3>
                <p className="text-[#9e9e9e] mb-4 line-clamp-2">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-[#1d4869] text-[#d9d9d9] px-2 py-1 rounded-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6492b8] font-medium">{room.price}</span>
                  <Link
                    href={`/rooms/${room.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white bg-[#1d4869] hover:bg-[#2f6587] px-4 py-2 rounded-sm transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/rooms"
            className="inline-flex items-center text-[#6492b8] hover:text-white transition-colors duration-300"
          >
            View All Accommodations
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
    </section>
  )
}
