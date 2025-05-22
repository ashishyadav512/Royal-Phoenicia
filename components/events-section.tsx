import Link from "next/link"

export function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#141d24]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-[#6492b8] mb-4">CORPORATE EVENTS</h2>
          <p className="text-[#9e9e9e] max-w-2xl mx-auto">
            Host your next corporate gathering, conference, or special event in our sophisticated venues with
            state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] overflow-hidden rounded-md group">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop"
                alt="Grand Ballroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-light text-white mb-2">Grand Ballroom</h3>
                <p className="text-[#d9d9d9] mb-4 max-w-md">
                  Our largest venue accommodating up to 500 guests with flexible configurations for various event types.
                </p>
                <Link
                  href="/events/grand-ballroom"
                  className="inline-block text-[#6492b8] hover:text-white transition-colors duration-300"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[180px] overflow-hidden rounded-md group">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600&auto=format&fit=crop"
                alt="Executive Boardroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Executive Boardroom</h3>
                <p className="text-[#d9d9d9] text-sm">For meetings up to 20 people</p>
              </div>
            </div>

            <div className="relative h-[180px] overflow-hidden rounded-md group">
              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600&auto=format&fit=crop"
                alt="Phoenix Lounge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-light text-white">Phoenix Lounge</h3>
                <p className="text-[#d9d9d9] text-sm">Ideal for receptions & networking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#1d4869] rounded-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Plan Your Next Event</h3>
              <p className="text-[#d9d9d9] mb-6">
                Our dedicated events team will work with you to create a tailored experience that meets your specific
                requirements.
              </p>
              <ul className="space-y-2 text-[#d9d9d9] mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6492b8]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  State-of-the-art audiovisual equipment
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6492b8]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Customizable catering menus
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6492b8]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Dedicated event coordinator
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6492b8]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Special group accommodation rates
                </li>
              </ul>
              <Link
                href="/events/inquiry"
                className="inline-block bg-white text-[#1d4869] hover:bg-[#d9d9d9] px-6 py-3 rounded-sm transition-colors duration-300"
              >
                Request a Proposal
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="relative h-[300px] w-full overflow-hidden rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=600&auto=format&fit=crop"
                  alt="Event Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
