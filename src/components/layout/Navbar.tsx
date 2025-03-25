import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";

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
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            About
          </Link>
          <Link
            to="/locations"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            Locations
          </Link>
          <Link
            to="/faq"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400 font-medium`}
          >
            Contact
          </Link>
        </div>

        {/* Phone Number and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone size={18} className="mr-2 text-primary" />
            <span
              className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"} hover:text-yellow-400`}
            >
              555-123-4567
            </span>
          </div>
          <Button
            asChild
            className="hover:bg-yellow-400 hover:text-black transition-colors"
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
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/locations"
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>
            <Link
              to="/faq"
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-yellow-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center pt-2">
              <Phone size={18} className="mr-2 text-primary" />
              <span className="font-medium">555-123-4567</span>
            </div>
            <Button
              className="w-full hover:bg-yellow-400 hover:text-black transition-colors"
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
