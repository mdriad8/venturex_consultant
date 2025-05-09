import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Globe,
  TrendingUp,
  Users,
  FileText,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import ClientLogo from "../components/ClientLogo";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
  const services = [
    {
      icon: <Briefcase className="text-primary" size={24} />,
      title: "Foreign Investment Consulting",
      description:
        "Strategic guidance for foreign investors looking to establish business operations in Bangladesh.",
    },
    {
      icon: <TrendingUp className="text-primary" size={24} />,
      title: "Business Innovation Strategy",
      description:
        "Transform your business model and operations with forward-thinking innovation strategies.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Digital Ecosystem Development",
      description:
        "Build comprehensive digital ecosystems to enhance business operations and customer engagement.",
    },
    {
      icon: <FileText className="text-primary" size={24} />,
      title: "Company Registration & Compliance",
      description:
        "Complete registration services including BIDA, IRC, ERC, and VAT management.",
    },
  ];

  const clients = [
    {
      id: 1,
      name: "Asian Development Bank",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/Asian_Development_Bank_%28emblem%29.svg",
    },
    {
      id: 2,
      name: "UNICEF",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UNICEF_Logo.svg/512px-UNICEF_Logo.svg.png",
    },
    {
      id: 3,
      name: "USAID",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/USAID-Identity.svg/512px-USAID-Identity.svg.png",
    },
    {
      id: 4,
      name: "GrameenPhone",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e2/Grameenphone_Logo.svg",
    },
    {
      id: 5,
      name: "Toshiba",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toshiba_Logo.svg/512px-Toshiba_Logo.svg.png",
    },
    {
      id: 6,
      name: "Embassy of Sweden",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Coat_of_arms_of_Sweden.svg",
    },
  ];

  const news = [
    {
      id: 1,
      title: "New Foreign Investment Guidelines for 2025",
      excerpt:
        "Breakdown of the latest foreign investment regulations and how they'll impact businesses.",
      image:
        "https://images.pexels.com/photos/7681022/pexels-photo-7681022.jpeg",
      date: "May 15, 2025",
      category: "Investment",
    },
    {
      id: 2,
      title: "Digital Transformation Success Stories",
      excerpt:
        "Case studies of companies that successfully implemented digital ecosystem strategies.",
      image:
        "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg",
      date: "April 28, 2025",
      category: "Digital",
    },
    {
      id: 3,
      title: "Business Innovation Workshop Announced",
      excerpt:
        "Join our upcoming workshop focused on innovation strategies for growing businesses.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      date: "April 10, 2025",
      category: "Events",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white mb-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Expert Consulting for Global Business Success
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized in foreign investment, business innovation, and
              digital ecosystems to transform your business for the global
              market.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-accent">
                Get Started
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide comprehensive consulting services to help businesses
              navigate complex international markets and drive innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/local-services"
              className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors"
            >
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 relative bg-gray-50">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 geometric-pattern opacity-20 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title mb-4">Who We Are</h2>
                <p className="text-text-light mb-4 text-base sm:text-lg leading-relaxed">
                  Venturex Consult Service is a premier consulting firm
                  specializing in helping businesses navigate the complexities
                  of foreign investment, business registration, and digital
                  transformation in Bangladesh and beyond.
                </p>
                <p className="text-text-light mb-6 text-base sm:text-lg leading-relaxed">
                  With our team of experts in legal compliance, business
                  strategy, and technology innovation, we provide end-to-end
                  solutions that help our clients achieve their business
                  objectives efficiently and effectively.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: <Users size={20} className="text-primary" />,
                      label: "Expert Team",
                      desc: "Experienced professionals",
                    },
                    {
                      icon: <Globe size={20} className="text-primary" />,
                      label: "Global Reach",
                      desc: "International networks",
                    },
                    {
                      icon: <Calendar size={20} className="text-primary" />,
                      label: "10+ Years",
                      desc: "Industry experience",
                    },
                    {
                      icon: <Briefcase size={20} className="text-primary" />,
                      label: "500+ Projects",
                      desc: "Successfully delivered",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.label}</h3>
                        <p className="text-sm text-text-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="btn-primary w-fit">
                  Learn More About Us
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Team of professionals"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Trusted Clients
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We've partnered with leading organizations to deliver exceptional
              results
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * client.id }}
              >
                <ClientLogo name={client.name} image={client.image} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/clients"
              className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors"
            >
              View All Clients <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              News & Updates
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stay informed with the latest business trends, regulatory changes,
              and company updates
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <NewsCard {...item} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors"
            >
              View All News <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today for a consultation and discover how Venturex can
              help you navigate global markets, streamline operations, and drive
              innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="btn-accent inline-flex items-center"
              >
                Contact Us <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
