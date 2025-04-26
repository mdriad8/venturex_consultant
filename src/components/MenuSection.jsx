import { useState } from "react";

export default function MenuNavigation() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 md:top-4 z-50 text-white">
      {/* Centered container with max-width */}
      <div className="max-w-5xl mx-auto">
        {/* Navigation bar */}
        <nav className="flex justify-between items-center py-6 px-4 bg-gray-800 bg-opacity-90 md:rounded-lg rounded-none">
          {/* Traffic Lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex gap-5">
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-teal-400 after:-bottom-1 after:left-0"
            >
              Home
            </a>
            <a
              href="#timeline"
              className="hover:text-teal-400 transition-colors"
            >
              Timeline
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Experience
            </a>
            <a
              href="#project"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a href="#skill" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a
              href="#contactme"
              className="hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Right-side Actions */}
          <div className="flex items-center gap-5">
            <button
              className="border border-white rounded-full px-5 py-2 text-sm hidden md:block hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1OyHbhS0fKlb5UbgEi0Bp3CpUYLoGg_N5",
                  "_blank"
                )
              }
            >
              Resume
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-lg">
              {darkMode ? "☀️" : "🌙"}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-700 text-white py-4 px-6 flex flex-col gap-4">
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-teal-400 after:-bottom-1 after:left-0"
            >
              Home
            </a>
            <a
              href="#timeline"
              className="hover:text-teal-400 transition-colors"
            >
              Timeline
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Experience
            </a>
            <a
              href="#project"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a href="#skill" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a
              href="#contactme"
              className="hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              FAQ
            </a>
            <button
              className="border border-white rounded-full px-5 py-2 text-sm w-full mt-2 hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1OyHbhS0fKlb5UbgEi0Bp3CpUYLoGg_N5",
                  "_blank"
                )
              }
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
