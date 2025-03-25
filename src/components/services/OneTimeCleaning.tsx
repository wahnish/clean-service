import { Button } from "../ui/button";

const OneTimeCleaning = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          One-Time Cleaning Service
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Professional cleaning for special occasions or when you need it most
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
          Request a Quote
        </Button>
      </div>

      {/* Service Overview */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Service Overview
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Our One-Time Cleaning service is perfect for those special occasions
          when you need your home to look its best, or when you simply need a
          thorough cleaning without committing to a recurring schedule. This
          comprehensive service provides a detailed cleaning of your entire
          home.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're preparing for guests, recovering from a busy period, or
          just want to treat yourself to a professionally cleaned home, our
          one-time cleaning service delivers exceptional results with no
          long-term commitment.
        </p>
      </div>

      {/* Top Benefits */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of One-Time Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Perfect for special occasions and events
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                No long-term commitment required
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Comprehensive cleaning of your entire home
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Customizable to focus on your priority areas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Immediate relief from cleaning stress
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Professional results that last
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* What's Included - Cleaning Checklist */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What's Included – One-Time Cleaning Checklist
        </h2>

        {/* Kitchen */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Kitchen</h3>
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
              <span className="text-gray-700">Clean inside microwave</span>
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
                Clean stovetop and control panels
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Wipe down cabinet fronts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean inside and outside of refrigerator (upon request)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean inside oven (upon request)
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
              <span className="text-gray-700">Dust light fixtures</span>
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
              <span className="text-gray-700">Clean tile walls</span>
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
              <span className="text-gray-700">Clean light fixtures</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Wipe down light switches and door handles
              </span>
            </li>
          </ul>
        </div>

        {/* Bedroom */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Bedroom</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Dust all accessible surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Dust furniture tops</span>
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
                Make beds (change linens if left out)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean mirrors</span>
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
                Dust ceiling fans and light fixtures
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

        {/* Living Room */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Living Room
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
              <span className="text-gray-700">
                Clean mirrors and glass surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Vacuum upholstery</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Fluff and straighten cushions and pillows
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
                Dust ceiling fans and light fixtures
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

        {/* Common Areas */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Common Areas & Hallways
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
                Dust picture frames and decor
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
              <span className="text-gray-700">Dust stair railings</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean entry door glass</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Wipe down light switches</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Wipe down door handles</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready for a Fresh Start?
        </h2>
        <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
          Our professional cleaning team is ready to transform your home with
          our comprehensive one-time cleaning service. No commitment, just
          exceptional results.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
          Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default OneTimeCleaning;
