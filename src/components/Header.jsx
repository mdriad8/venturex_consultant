import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Globe, MapPin } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const location = useLocation();
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowAboutDropdown(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setShowAboutDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowAboutDropdown(false);
    }, 150); // Delay for better UX
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active text-primary font-medium" : "text-text-light"
              }`
            }
          >
            Home
          </NavLink>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link text-text-light flex items-center cursor-pointer">
              About <ChevronDown size={16} className="ml-1" />
            </div>

            <div
              className={`absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 origin-top-left z-50 ${
                showAboutDropdown
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <NavLink
                to="/about"
                className="block px-4 py-2 text-sm text-text-light hover:bg-gray-50 hover:text-primary"
              >
                About Us
              </NavLink>
              <NavLink
                to="/local-services"
                className="block px-4 py-2 text-sm text-text-light hover:bg-gray-50 hover:text-primary flex items-center"
              >
                <MapPin size={14} className="mr-2" /> Local Services
              </NavLink>
              <NavLink
                to="/global-services"
                className="block px-4 py-2 text-sm text-text-light hover:bg-gray-50 hover:text-primary flex items-center"
              >
                <Globe size={14} className="mr-2" /> Global Services
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active text-primary font-medium" : "text-text-light"
              }`
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active text-primary font-medium" : "text-text-light"
              }`
            }
          >
            News & Updates
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active text-primary font-medium" : "text-text-light"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="container py-4 bg-white shadow-lg rounded-b-lg animate-slide-down">
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? "bg-primary/10 text-primary font-medium" : ""
                }`
              }
            >
              Home
            </NavLink>

            <button
              className="flex justify-between items-center py-2 px-3 rounded-md w-full text-left"
              onClick={() => setShowAboutDropdown(!showAboutDropdown)}
            >
              <span>About</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showAboutDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                showAboutDropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md ${
                    isActive ? "bg-primary/10 text-primary font-medium" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/local-services"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md flex items-center ${
                    isActive ? "bg-primary/10 text-primary font-medium" : ""
                  }`
                }
              >
                <MapPin size={14} className="mr-2" /> Local Services
              </NavLink>
              <NavLink
                to="/global-services"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md flex items-center ${
                    isActive ? "bg-primary/10 text-primary font-medium" : ""
                  }`
                }
              >
                <Globe size={14} className="mr-2" /> Global Services
              </NavLink>
            </div>

            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? "bg-primary/10 text-primary font-medium" : ""
                }`
              }
            >
              Clients
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? "bg-primary/10 text-primary font-medium" : ""
                }`
              }
            >
              News & Updates
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive ? "bg-primary/10 text-primary font-medium" : ""
                }`
              }
            >
              Contact
            </NavLink>

            <button className="btn-primary mt-2">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
