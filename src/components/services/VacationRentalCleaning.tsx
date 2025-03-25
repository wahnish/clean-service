import { Button } from "../ui/button";

const VacationRentalCleaning = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Vacation Rental Cleaning Service
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Professional cleaning for your vacation rental properties
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
          Our Vacation Rental Cleaning service is specifically designed for
          property owners who rent their homes on platforms like VRBO, HomeAway,
          and other vacation rental sites. We provide thorough, reliable
          cleaning between guest stays to ensure your property maintains
          excellent reviews and high occupancy rates.
        </p>
        <p className="text-lg text-gray-700">
          With flexible scheduling and meticulous attention to detail, we help
          you maintain a pristine, welcoming environment for every guest,
          allowing you to focus on growing your rental business and maximizing
          your property's potential.
        </p>
      </div>

      {/* Top Benefits */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Vacation Rental Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Higher guest ratings and positive reviews
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
                Attention to details that guests notice
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Time savings for busy property owners
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
      </div>

      {/* What's Included - Cleaning Checklist */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What's Included – Vacation Rental Cleaning Checklist
        </h2>

        {/* Kitchen */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Kitchen</h3>
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
                Clean oven exterior and interior
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
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean table and chairs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Check and refill dish soap and dishwasher detergent
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
                Restock toilet paper, tissues, and toiletries
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Restock fresh towels and washcloths
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Check and refill hand soap</span>
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
                Change all bed linens (sheets, pillowcases, duvet covers)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Make beds with fresh linens</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Dust all surfaces, including nightstands and dressers
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
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Check and restock tissue boxes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Wipe down light switches and door handles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Check for and remove any items left by previous guests
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Arrange decorative pillows and throws
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
                Dust all surfaces, including coffee tables and shelves
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
                Dust window sills and ledges
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Vacuum upholstery and under cushions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Fluff and arrange pillows and throws
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
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Check remote controls and replace batteries if needed
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Wipe down light switches and door handles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Arrange magazines, books, and other amenities
              </span>
            </li>
          </ul>
        </div>

        {/* Outdoor Areas */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Outdoor Areas
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Sweep patio, deck, or balcony
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean outdoor furniture</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean outdoor grill (upon request)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean exterior windows and doors
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Empty outdoor trash cans</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Tidy up outdoor recreational areas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean pool area (upon request)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Arrange outdoor cushions and pillows
              </span>
            </li>
          </ul>
        </div>

        {/* Additional Services */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Additional Services
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Restock welcome amenities (coffee, tea, snacks)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Laundry service for linens and towels
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Check and report maintenance issues
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Property inspection and photo documentation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Arrange welcome gifts or special requests
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Key exchange management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Emergency cleaning services</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Seasonal deep cleaning</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Maximize Your Vacation Rental Success
        </h2>
        <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
          Let our professional cleaning team help you maintain a spotless rental
          property and earn those 5-star reviews. Contact us today to schedule
          your vacation rental cleaning service.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
          Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default VacationRentalCleaning;
