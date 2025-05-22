import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { FeaturedRooms } from "@/components/featured-rooms"
import { EventsSection } from "@/components/events-section"
import { DiningSection } from "@/components/dining-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      <Navbar />
      <HeroSection />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-4">WELCOME TO</h2>
          <h1 className="text-3xl md:text-5xl font-light text-[#6492b8] mb-8">ROYAL PHOENICIA</h1>
          <p className="max-w-3xl mx-auto text-[#9e9e9e] leading-relaxed">
            Experience unparalleled luxury at Royal Phoenicia, where modern elegance meets traditional hospitality.
            Nestled in the heart of the city with breathtaking skyline views, our hotel offers a sanctuary of comfort
            and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="group overflow-hidden relative rounded-md">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop"
              alt="Luxury Room"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-medium text-white">Luxury Accommodations</h3>
                <Link href="/rooms" className="text-[#6492b8] mt-2 inline-block hover:underline">
                  Explore Rooms →
                </Link>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden relative rounded-md">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop"
              alt="Fine Dining"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-medium text-white">Exquisite Dining</h3>
                <Link href="/dining" className="text-[#6492b8] mt-2 inline-block hover:underline">
                  View Restaurants →
                </Link>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden relative rounded-md">
            <img
              src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=600&auto=format&fit=crop"
              alt="Corporate Events"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-medium text-white">Corporate Events</h3>
                <Link href="/events" className="text-[#6492b8] mt-2 inline-block hover:underline">
                  Plan Your Event →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedRooms />
      <DiningSection />
      <EventsSection />
      <Gallery />
      <Footer />
    </main>
  )
}
