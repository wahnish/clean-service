import ServiceLayout from "./ServiceLayout";

const DeepCleaning = () => {
  return (
    <ServiceLayout
      title="Deep Cleaning Service"
      subtitle="Bring your home back to life with a thorough deep clean"
    >
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Deep Cleaning service is a comprehensive cleaning solution
            designed to tackle built-up dirt, grime, and dust in areas that
            aren't typically addressed during regular cleaning. This service is
            perfect for homes that haven't been professionally cleaned in a
            while, seasonal cleaning, or preparing your home for special
            occasions.
          </p>
          <p className="text-lg text-gray-700">
            We recommend scheduling a deep cleaning at least once every 3-6
            months, even if you maintain regular cleaning in between, to ensure
            your home remains thoroughly clean and healthy.
          </p>
        </div>
      </section>

      {/* Top Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Deep Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Eliminates built-up dirt and grime in hard-to-reach areas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Significantly improves indoor air quality
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Reduces allergens and bacteria throughout your home
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Extends the life of your furniture, fixtures, and appliances
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Creates a healthier living environment for your family
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Perfect reset for seasonal cleaning or special occasions
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What's Included - Cleaning Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included – Deep Cleaning Checklist
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
                  Clean and sanitize countertops and backsplash
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean exterior of all appliances
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside microwave, oven, and refrigerator
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and shine sink and faucet
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Degrease stovetop, burners, and control panels
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean inside and outside of cabinets and drawers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize trash can
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust light fixtures and ceiling fans
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards and door frames
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Sweep, mop, and sanitize floors
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
                  Clean shower door tracks and remove soap scum
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
                  Clean inside and outside of cabinets and drawers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize trash can
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards and door frames
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
                  Dust and clean furniture tops, sides, and legs
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
                  Dust electronics and clean screens
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean baseboards and door frames
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
                  Vacuum upholstery, including under cushions
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

export default DeepCleaning;
