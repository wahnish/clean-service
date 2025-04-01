import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80"
                alt="Healthy Clean Homes"
                className="h-10"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional cleaning services for homes and offices. We make your
              space shine so you can focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/standard"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/waxhaw"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/locations/waxhaw"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Waxhaw, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/westley-chapel"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Westley Chapel, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/weddington"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Weddington, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/marvin"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Marvin, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/ballantyne"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Ballantyne, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/monroe"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Monroe, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/white-oaks"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  White Oaks, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/indian-trail"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Indian Trail, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/stallings"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Stallings, NC
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/matthews"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Matthews, NC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-white" />
                <span className="text-gray-300">
                  Healthy Clean Homes
                  <br />
                  3116 Weddington Rd Ste 900
                  <br />
                  PMB 2032
                  <br />
                  Matthews, NC 28105
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-white" />
                <span className="text-gray-300">555-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-white" />
                <a
                  href="mailto:support@healthycleanhomes.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  support@healthycleanhomes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Healthy Clean Homes. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300 ease-out"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300 ease-out"
              >
                Terms of Service
              </Link>
              <Link
                to="/faq"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300 ease-out"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
