import React from "react";

const Contact = () => {
  return (
    <div
      id="contactme"
      className="w-full bg-gradient-to-br from-teal-900 to-gray-800 text-white py-16 px-4 relative"
    >
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

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-teal-300 mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <form
          action="https://formspree.io/f/mvgagzyo"
          method="POST"
          className="flex flex-col gap-4 bg-white/10 p-6 rounded-md backdrop-blur-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
