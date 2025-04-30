import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  { name: "Standard Cleaning", path: "/services/standard" },
  { name: "Deep Cleaning", path: "/services/deep" },
  { name: "Move In/Out Cleaning", path: "/services/move" },
  { name: "Recurring Cleaning", path: "/services/recurring" },
  { name: "Airbnb Cleaning", path: "/services/airbnb" },
  { name: "One-Time Cleaning", path: "/services/onetime" },
  { name: "Vacation Rental Cleaning", path: "/services/vacation" },
  { name: "Post-Construction Cleaning", path: "/services/construction" },
];

const locations = [
  { name: "Waxhaw, NC", path: "/locations/waxhaw" },
  { name: "Wesley Chapel, NC", path: "/locations/westley-chapel" },
  { name: "Weddington, NC", path: "/locations/weddington" },
  { name: "Marvin, NC", path: "/locations/marvin" },
  { name: "Ballantyne, NC", path: "/locations/ballantyne" },
  { name: "Monroe, NC", path: "/locations/monroe" },
  { name: "White Oaks, NC", path: "/locations/white-oaks" },
  { name: "Indian Trail, NC", path: "/locations/indian-trail" },
  { name: "Stallings, NC", path: "/locations/stallings" },
  { name: "Matthews, NC", path: "/locations/matthews" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-primary shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img
            src="/images/HCH_Logo_white.png"
            alt="Healthy Clean Homes"
            className="h-10 transition-all duration-300 flex rounded-[5px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
          <Link
            to="/"
            className={`${
              isScrolled ? "text-white" : "text-white"
            } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium xl:text-base lg:text-sm`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <div
                className={`${
                  isScrolled ? "text-white" : "text-white"
                } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex items-center xl:text-base lg:text-sm`}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top">
              <div className="py-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 ease-out"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className={`${
              isScrolled ? "text-white" : "text-white"
            } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium xl:text-base lg:text-sm`}
          >
            About
          </Link>

          {/* Locations Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <div
                className={`${
                  isScrolled ? "text-white" : "text-white"
                } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex items-center xl:text-base lg:text-sm`}
              >
                Locations
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top">
              <div className="py-2">
                {locations.map((location) => (
                  <Link
                    key={location.path}
                    to={location.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 ease-out"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/faq"
            className={`${
              isScrolled ? "text-white" : "text-white"
            } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium xl:text-base lg:text-sm`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${
              isScrolled ? "text-white" : "text-white"
            } hover:text-yellow-400 transition-colors duration-300 ease-out font-medium xl:text-base lg:text-sm`}
          >
            Contact
          </Link>
        </div>

        {/* Phone Number and CTA */}
        <div className="hidden lg:flex items-center xl:space-x-4 lg:space-x-2">
          <div className="flex items-center">
            <Phone
              size={18}
              className={`mr-2 ${
                isScrolled ? "text-white" : "text-primary"
              } transition-colors duration-300`}
            />
            <span
              className={`font-medium ${
                isScrolled ? "text-white" : "text-white"
              } hover:text-yellow-400 transition-colors duration-300 ease-out xl:text-base lg:text-sm`}
            >
              980-300-0404
            </span>
          </div>
          <Button
            asChild
            className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black transition-colors duration-300 ease-out xl:text-base lg:text-sm xl:px-4 lg:px-3"
          >
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary w-full py-4 px-4 shadow-lg transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2">
              <div
                className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex justify-between items-center cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {servicesOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-white/20">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-300 ease-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Locations */}
            <div className="space-y-2">
              <div
                className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex justify-between items-center cursor-pointer"
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                <span>Locations</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    locationsOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {locationsOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-white/20">
                  {locations.map((location) => (
                    <Link
                      key={location.path}
                      to={location.path}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-300 ease-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/faq"
              className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center pt-2">
              <Phone size={18} className="mr-2 text-white" />
              <span className="font-medium text-white">980-300-0404</span>
            </div>
            <Button
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black transition-colors duration-300 ease-out"
              asChild
            >
              <Link to="/contact">Get Your Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
