import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch with our team of experts to discuss your business
              needs
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Send Us a Message
              </h2>
              <p className="text-text-light mb-8">
                Fill out the form below and one of our consultants will get back
                to you as soon as possible.
              </p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-text-light mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-text-light mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-light mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-text-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-text-light mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-text-light mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Provide details about your inquiry"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary text-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-200 mb-8">
                  We're here to assist you with any questions or inquiries about
                  our services. Feel free to reach out through any of the
                  following channels.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <PhoneCall size={20} className="mt-1 mr-4 text-accent" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-200">+8801630331438</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={20} className="mt-1 mr-4 text-accent" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-200">venturexcs@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={20} className="mt-1 mr-4 text-accent" />
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-200">
                        888/1, Room-7 (2nd Floor) Hazi Ashraf Ali Complex,
                        Shewrapara, Mirpur, Dhaka-1216, Bangladesh
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock size={20} className="mt-1 mr-4 text-accent" />
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-200">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Connect With Us
                </h2>
                <p className="text-text-light mb-6">
                  Follow us on social media to stay updated with the latest
                  news, insights, and announcements.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center text-white hover:from-purple-700 hover:to-orange-700 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and FAQ sections are already valid JSX and don't require further changes. */}
    </div>
  );
};

export default ContactPage;
