import ServiceLayout from "./ServiceLayout";

const RecurringCleaning = () => {
  return (
    <ServiceLayout
      title="Recurring Cleaning Service"
      subtitle="Enjoy a consistently clean home without lifting a finger"
    >
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our Recurring Cleaning service provides regular, scheduled cleanings
            to keep your home consistently clean and comfortable. Choose from
            weekly, bi-weekly, or monthly cleaning schedules tailored to your
            specific needs and preferences.
          </p>
          <p className="text-lg text-gray-700">
            With our recurring service, you'll enjoy the benefits of a
            professionally cleaned home on a regular basis, saving you time and
            ensuring your living space always feels fresh and inviting.
          </p>
        </div>
      </section>

      {/* Top Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Recurring Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Consistent cleanliness without the hassle
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Significant time savings every week
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Reduced stress and more free time
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Healthier living environment with reduced allergens
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Customized cleaning schedule to fit your lifestyle
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Priority scheduling and preferred pricing
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Frequency Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Cleaning Frequency Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Weekly
              </h3>
              <p className="text-gray-700 mb-4">
                Ideal for busy households, families with children or pets, and
                those who prefer a consistently clean home at all times.
              </p>
              <ul className="mb-4">
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Maximum convenience</span>
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Best value per cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">
                    Always company-ready home
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Bi-Weekly
              </h3>
              <p className="text-gray-700 mb-4">
                Our most popular option, perfect for maintaining cleanliness
                without daily effort. Ideal for most households.
              </p>
              <ul className="mb-4">
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Balanced frequency</span>
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Cost-effective solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Consistent cleanliness</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Monthly
              </h3>
              <p className="text-gray-700 mb-4">
                Suitable for smaller households, those who maintain regular
                cleaning themselves, or as supplemental deep cleaning.
              </p>
              <ul className="mb-4">
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Professional touch-ups</span>
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">Budget-friendly option</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span className="text-gray-700">
                    Thorough monthly refresh
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Cleaning Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included – Recurring Cleaning Checklist
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
                  Wipe down exterior of appliances
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
            </ul>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default RecurringCleaning;
