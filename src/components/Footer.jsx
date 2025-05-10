import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left items-center md:items-start">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Expert consulting for foreign investment, business innovation, and
              digital ecosystems.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/local-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Local Services
                </Link>
              </li>
              <li>
                <Link
                  to="/global-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Global Services
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/local-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Foreign Investment Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/local-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/local-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Visa & Work Permit
                </Link>
              </li>
              <li>
                <Link
                  to="/global-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Global Business Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/global-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Digital Ecosystem Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex justify-center md:justify-start items-start">
                <PhoneCall size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>+8801630331438</span>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>venturexcs@gmail.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>
                  888/1, Room-7 (2nd Floor) Hazi Ashraf Ali Complex, Shewrapara,
                  Mirpur, Dhaka-1216
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Venturex Consult Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
