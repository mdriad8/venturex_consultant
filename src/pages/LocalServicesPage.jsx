import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Building,
  Globe,
  Shield,
  Tag,
  FileCheck,
  Mail,
  Phone,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const LocalServicesPage = () => {
  const services = [
    {
      icon: <FileText className="text-primary" size={24} />,
      title: "Company Formation",
      description:
        "Complete company registration services including documentation preparation, submission, and follow-up.",
    },
    {
      icon: <Building className="text-primary" size={24} />,
      title: "BIDA Registration",
      description:
        "Registration with Bangladesh Investment Development Authority for foreign investments and joint ventures.",
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Visa & Work Permit",
      description:
        "Processing of visa applications and work permits for foreign nationals working in Bangladesh.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "IRC & ERC Registration",
      description:
        "Import Registration Certificate and Export Registration Certificate processing for trading businesses.",
    },
    {
      icon: <Tag className="text-primary" size={24} />,
      title: "VAT Management",
      description:
        "VAT registration, compliance, and ongoing management for businesses operating in Bangladesh.",
    },
    {
      icon: <FileCheck className="text-primary" size={24} />,
      title: "Internal Auditation",
      description:
        "Comprehensive internal audit services to ensure compliance with local regulations and standards.",
    },
  ];

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
              Local Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive business solutions tailored for the Bangladesh
              market
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Local Services
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide comprehensive local services to help businesses
              establish and operate successfully in Bangladesh
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 relative bg-gray-50">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-20 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Process
              </motion.h2>
              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We follow a comprehensive approach to ensure seamless service
                delivery
              </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>

              {[
                {
                  title: "Initial Consultation",
                  description:
                    "We meet to understand your business needs, goals, and challenges.",
                },
                {
                  title: "Custom Strategy",
                  description:
                    "We develop a tailored strategy based on your specific requirements.",
                },
                {
                  title: "Documentation",
                  description:
                    "We prepare all necessary documentation and applications.",
                },
                {
                  title: "Submission & Follow-up",
                  description:
                    "We submit applications and follow up with relevant authorities.",
                },
                {
                  title: "Approval & Implementation",
                  description:
                    "We secure approvals and help implement the necessary steps.",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "We provide continuous support for compliance and operational needs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative z-10 mb-12 flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center md:items-start`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-full md:w-5/12 px-4 text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-light">{item.description}</p>
                  </div>

                  <div className="my-4 md:my-0 md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
                className="text-lg text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Contact us today for a consultation and discover how our local
                services can help your business succeed in Bangladesh.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#" className="btn-accent">
                  Schedule a Consultation
                </a>
                <a href="#" className="btn-secondary">
                  Learn More
                </a>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Contact Us
              </h3>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Phone size={18} className="text-primary mr-3" />
                  <span className="text-text">+8801630331438</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-primary mr-3" />
                  <span className="text-text">venturexcs@gmail.com</span>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-text-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalServicesPage;
