import ServiceLayout from "./ServiceLayout";

const StandardCleaning = () => {
  return (
    <ServiceLayout
      title="Standard Cleaning Service"
      subtitle="Professional cleaning for your home on a regular basis"
    >
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Standard Cleaning service is designed for regular maintenance of
            your home, keeping it consistently clean and comfortable. This
            service is perfect for busy professionals, families, and anyone who
            wants to enjoy a clean home without the hassle of doing it
            themselves.
          </p>
          <p className="text-lg text-gray-700">
            We recommend scheduling this service on a weekly or bi-weekly basis
            to maintain a consistently clean environment and prevent dirt and
            dust buildup.
          </p>
        </div>
      </section>

      {/* Top Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Standard Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Consistent cleanliness throughout your home
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                More free time for family and activities you enjoy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Reduced allergens and improved air quality
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Professional cleaning with attention to detail
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Customizable cleaning schedule to fit your needs
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Stress-free living in a clean environment
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What's Included - Cleaning Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included – Standard Cleaning Checklist
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
                  Wipe down exterior of appliances (refrigerator, oven,
                  microwave)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Clean microwave interior</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and shine sink and faucet
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Wipe down cabinet fronts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean stovetop and control panels
                </span>
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
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">Clean table and chairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Spot clean cabinet exteriors
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
                  Clean and sanitize toilet (bowl, tank, seat, base)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean and sanitize shower and tub
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Clean shower door or curtain
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
                <span className="text-gray-700">Clean and polish mirrors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Wipe down countertops and vanity
                </span>
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
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Restock toilet paper (if provided)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Wipe down light switches and door handles
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
                  Dust all accessible surfaces
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust furniture tops and shelves
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust window sills and ledges
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-xl mr-2">•</span>
                <span className="text-gray-700">
                  Dust electronics (TV, entertainment center)
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
                  Fluff and straighten cushions and pillows
                </span>
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
                  Wipe down light switches and door handles
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default StandardCleaning;
