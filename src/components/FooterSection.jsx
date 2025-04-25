import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-teal-900 to-gray-800 text-white py-8 px-4 relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MdRiad. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mdriad8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mdriad8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/MdRiad8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
