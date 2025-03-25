import ServiceLayout from "./ServiceLayout";

const AirbnbCleaning = () => {
  return (
    <ServiceLayout
      title="Airbnb Cleaning Service"
      subtitle="Professional cleaning for your short-term rental property"
    >
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Airbnb Cleaning service is specifically designed for short-term
            rental properties. We understand the unique needs of Airbnb hosts
            and provide thorough, efficient cleaning between guest stays to
            ensure your property maintains excellent reviews and high occupancy
            rates.
          </p>
          <p className="text-lg text-gray-700">
            With flexible scheduling and attention to detail, we help you
            maintain a spotless, welcoming environment for every guest, allowing
            you to focus on growing your hosting business.
          </p>
        </div>
      </section>

      {/* Top Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Airbnb Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Higher guest ratings and reviews
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Flexible scheduling between guest stays
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Thorough sanitization for guest safety
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Attention to details guests notice
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Time savings for busy hosts
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Professional presentation of your property
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What's Included - Cleaning Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included – Airbnb Cleaning Checklist
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
                  Clean inside and outside of microwave
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean stovetop, burners, and control panels
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean oven exterior (interior upon request)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize sink and faucet
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean refrigerator exterior and interior
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean small appliances (coffee maker, toaster, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Wipe down cabinet fronts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Empty trash and replace liner
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Sweep and mop floors</span>
              </li>
            </ul>
          </div>

          {/* Bathrooms */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Bathrooms
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize toilet, sink, and faucet
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize shower/tub and fixtures
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
                  Wipe down countertops and cabinet fronts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Sweep and mop floors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Empty trash and replace liner
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Replace towels and washcloths
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Restock toilet paper and toiletries
                </span>
              </li>
            </ul>
          </div>

          {/* Bedrooms */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Bedrooms
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Change all bed linens and make beds
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust all surfaces, furniture, and fixtures
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
                <span className="text-gray-700">Vacuum carpets and rugs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Sweep and mop hard floors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Empty trash and replace liner
                </span>
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
                  Dust all surfaces, furniture, and fixtures
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
                  Vacuum upholstered furniture
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Vacuum carpets and rugs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Sweep and mop hard floors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Empty trash and replace liner
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Organize magazines, books, and remote controls
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default AirbnbCleaning;
