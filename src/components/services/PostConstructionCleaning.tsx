import { Button } from "../ui/button";

const PostConstructionCleaning = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Post-Construction Cleaning Service
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Transform your newly renovated space from dusty to move-in ready
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
          Our Post-Construction Cleaning service is specifically designed to
          tackle the unique challenges of cleaning after construction,
          renovation, or remodeling projects. We remove construction dust,
          debris, paint splatters, adhesive residues, and other
          construction-related messes to transform your space into a clean,
          safe, and move-in ready environment.
        </p>
        <p className="text-lg text-gray-700">
          This specialized service requires professional equipment, techniques,
          and cleaning solutions to effectively remove fine construction dust
          and stubborn residues that standard cleaning methods can't address.
          Our experienced team will ensure your newly renovated space is
          thoroughly cleaned from top to bottom.
        </p>
      </div>

      {/* Top Benefits */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Benefits of Post-Construction Cleaning
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Removes harmful construction dust and debris
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Makes your space safe and healthy for occupancy
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Protects your investment in new finishes and fixtures
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Saves you time and physical strain
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Professional equipment for thorough dust removal
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span className="text-lg text-gray-700">
                Allows immediate enjoyment of your renovated space
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* What's Included - Cleaning Checklist */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What's Included – Post-Construction Cleaning Checklist
        </h2>

        {/* Initial Debris Removal */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Initial Debris Removal
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove all construction debris and trash
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Sweep and vacuum all surfaces to remove loose dust
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove adhesive residues and stickers from surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove paint splatters from floors and surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean all air vents and returns to remove construction dust
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove protective coverings from fixtures and surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean inside all cabinets and drawers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove dust from ceiling fans and light fixtures
              </span>
            </li>
          </ul>
        </div>

        {/* Kitchen */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Kitchen</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Deep clean and sanitize all countertops
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
                Clean and polish all appliances
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean inside oven, microwave, and refrigerator
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
                Clean backsplash and remove any grout haze
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean range hood inside and out
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean and sanitize trash receptacles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean light fixtures and remove dust
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean all door handles and cabinet hardware
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Vacuum and mop floors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean window sills, tracks, and glass
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
              <span className="text-gray-700">Clean and sanitize toilet</span>
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
                Remove any grout haze from tile surfaces
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
                Clean inside and outside of all cabinets and drawers
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
                Clean all door handles and cabinet hardware
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean window sills, tracks, and glass
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Vacuum and mop floors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean and sanitize trash receptacles
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
              <span className="text-gray-700">Dust and clean all surfaces</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean inside and outside of built-in shelving and cabinets
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean ceiling fans and light fixtures
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean all door handles and hardware
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean window sills, tracks, and glass
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean baseboards and crown molding
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean fireplace and mantel</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean air vents and returns</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Vacuum carpets and rugs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Vacuum and mop hard floors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean stair railings and balusters
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove any adhesive residue from surfaces
              </span>
            </li>
          </ul>
        </div>

        {/* Windows and Doors */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Windows and Doors
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean all interior window glass
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean window frames, sills, and tracks
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove stickers and adhesive from new windows
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
                Clean door frames and thresholds
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean all door hardware and handles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Clean sliding door tracks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Clean blinds and window treatments
              </span>
            </li>
          </ul>
        </div>

        {/* Final Touches */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Final Touches
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">Final vacuum of all floors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Final dusting of all surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Spot cleaning of walls and surfaces
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Final inspection for any missed areas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Remove all cleaning supplies and equipment
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-2">•</span>
              <span className="text-gray-700">
                Final walkthrough with client (upon request)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to Enjoy Your Newly Renovated Space?
        </h2>
        <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
          Let our professional cleaning team handle the post-construction mess
          so you can start enjoying your beautiful new space right away. Contact
          us today to schedule your post-construction cleaning service.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
          Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default PostConstructionCleaning;
