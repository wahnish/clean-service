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
  { name: "Waxhaw", path: "/locations/waxhaw" },
  { name: "Westley Chapel", path: "/locations/westley-chapel" },
  { name: "Weddington", path: "/locations/weddington" },
  { name: "Marvin", path: "/locations/marvin" },
  { name: "Ballantyne", path: "/locations/ballantyne" },
  { name: "Monroe", path: "/locations/monroe" },
  { name: "White Oaks", path: "/locations/white-oaks" },
  { name: "Indian Trail", path: "/locations/indian-trail" },
  { name: "Stallings", path: "/locations/stallings" },
  { name: "Matthews", path: "/locations/matthews" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img
            src={
              isScrolled
                ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80"
                : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80"
            }
            alt="Healthy Clean Homes"
            className="h-10 transition-all duration-300 flex"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <Link
                to="/services"
                className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex items-center`}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </Link>
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
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium`}
          >
            About
          </Link>

          {/* Locations Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <Link
                to="/locations"
                className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium flex items-center`}
              >
                Locations
                <ChevronDown size={16} className="ml-1" />
              </Link>
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
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out font-medium`}
          >
            Contact
          </Link>
        </div>

        {/* Phone Number and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone size={18} className="mr-2 text-primary" />
            <span
              className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 transition-colors duration-300 ease-out`}
            >
              555-123-4567
            </span>
          </div>
          <Button
            asChild
            className="hover:bg-yellow-400 hover:text-black transition-colors duration-300 ease-out"
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2">
              <Link
                to="/services"
                className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300 ease-out"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Locations */}
            <div className="space-y-2">
              <Link
                to="/locations"
                className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {locations.map((location) => (
                  <Link
                    key={location.path}
                    to={location.path}
                    className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300 ease-out"
                    onClick={() => setIsOpen(false)}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/faq"
              className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-out font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center pt-2">
              <Phone size={18} className="mr-2 text-primary" />
              <span className="font-medium">555-123-4567</span>
            </div>
            <Button
              className="w-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 ease-out"
              asChild
            >
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
