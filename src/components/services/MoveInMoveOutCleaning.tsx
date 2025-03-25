import ServiceLayout from "./ServiceLayout";

const MoveInMoveOutCleaning = () => {
  return (
    <ServiceLayout
      title="Move In/Move Out Cleaning Service"
      subtitle="Start fresh in your new home or leave your old one spotless"
    >
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Move In/Move Out Cleaning service is specifically designed to
            prepare a property for new occupants or to leave your previous home
            in pristine condition. This comprehensive cleaning service addresses
            every area of the home, ensuring it's thoroughly cleaned from top to
            bottom.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a homeowner, tenant, or property manager, our move
            in/move out cleaning service helps ensure the property meets the
            highest standards of cleanliness for the next chapter.
          </p>
        </div>
      </section>

      {/* Top Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Move In/Move Out Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Ensures return of security deposits for tenants
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Prepares property for new occupants or sale
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Removes all traces of previous occupants
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Eliminates allergens and sanitizes all surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Reduces stress during an already hectic moving process
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Provides a fresh start in your new home
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What's Included - Cleaning Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included – Move In/Move Out Cleaning Checklist
          </h2>

          {/* Kitchen */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Kitchen
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize all countertops and backsplash
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Deep clean inside and outside of refrigerator (if present)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Deep clean inside and outside of oven, including racks
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside and outside of microwave
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and shine sink, faucet, and drain
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Degrease stovetop, burners, and hood
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside and outside of all cabinets and drawers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize dishwasher inside and out
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards, door frames, and light switches
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust light fixtures and ceiling fans
                </span>
              </li>
            </ul>
          </div>

          {/* Bathroom */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Bathroom
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Deep clean and disinfect toilet (bowl, tank, seat, base)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Deep clean and descale shower and tub
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean shower door/curtain and tracks
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and shine sink, faucet, and drain
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Clean and polish mirrors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside and outside of all cabinets and drawers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards, door frames, and light switches
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean light fixtures and exhaust fan
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean window sills and blinds
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Clean tile grout</span>
              </li>
            </ul>
          </div>

          {/* Living Areas */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Living Areas
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust all surfaces, including hard-to-reach areas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside and outside of entertainment centers and shelves
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust window sills, blinds, and ledges
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean all door surfaces, including tops
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards, door frames, and light switches
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust ceiling fans and light fixtures
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean fireplace exterior (if applicable)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean mirrors and glass surfaces
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Vacuum carpets and rugs, including edges
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Sweep and mop hard floors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default MoveInMoveOutCleaning;
