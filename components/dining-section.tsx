import Link from "next/link"

export function DiningSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0b0c0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-[#6492b8] mb-4">DINING EXPERIENCES</h2>
          <p className="text-[#9e9e9e] max-w-2xl mx-auto">
            Indulge in exceptional culinary journeys at our diverse restaurants and bars, each offering a unique
            atmosphere and menu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-md group h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop"
              alt="Fine Dining Restaurant"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-light text-white mb-2">The Phoenix</h3>
              <p className="text-[#d9d9d9] mb-4 max-w-md">
                Our signature restaurant offering contemporary cuisine with a focus on local ingredients and innovative
                techniques.
              </p>
              <Link
                href="/dining/phoenix"
                className="inline-block text-[#6492b8] hover:text-white transition-colors duration-300"
              >
                Explore Menu →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-md group h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=600&auto=format&fit=crop"
                alt="Sky Lounge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Sky Lounge</h3>
                <p className="text-[#d9d9d9] text-sm">Rooftop cocktails & views</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md group h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=600&auto=format&fit=crop"
                alt="Café Royale"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Café Royale</h3>
                <p className="text-[#d9d9d9] text-sm">Pastries & specialty coffee</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md group h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
                alt="Silk Road"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Silk Road</h3>
                <p className="text-[#d9d9d9] text-sm">Asian fusion cuisine</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md group h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=600&auto=format&fit=crop"
                alt="Oasis Pool Bar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Oasis Pool Bar</h3>
                <p className="text-[#d9d9d9] text-sm">Refreshments by the pool</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/dining"
            className="inline-flex items-center text-[#6492b8] hover:text-white transition-colors duration-300"
          >
            Explore All Dining Options
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
