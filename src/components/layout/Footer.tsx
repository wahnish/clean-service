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
                  to="/services"
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
                  to="/locations"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Service Areas
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/standard"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Standard Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/deep"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/move"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Move In/Out Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/recurring"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Recurring Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/airbnb"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Airbnb Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/onetime"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  One-Time Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/vacation"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Vacation Rental Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/construction"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Post-Construction Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/office"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/special"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  Special Occasions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-300">
                  123 Cleaning Street
                  <br />
                  Seattle, WA 98101
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span className="text-gray-300">555-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a
                  href="mailto:info@healthycleanhomes.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-out"
                >
                  info@healthycleanhomes.com
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
                to="/sitemap"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300 ease-out"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
