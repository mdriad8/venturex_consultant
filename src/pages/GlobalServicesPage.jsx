import React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart, Server, PieChart, Users, Share2 } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const GlobalServicesPage = () => {
  const services = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Foreign Investment Consulting",
      description:
        "Strategic guidance for foreign investors looking to enter new markets and optimize their investments.",
    },
    {
      icon: <BarChart className="text-primary" size={24} />,
      title: "Business Innovation Strategy",
      description:
        "Development of forward-thinking business models and innovation strategies for competitive advantage.",
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Digital Ecosystem Development",
      description:
        "Creation of comprehensive digital ecosystems to enhance operations and customer engagement.",
    },
    {
      icon: <PieChart className="text-primary" size={24} />,
      title: "Market Analysis & Research",
      description:
        "In-depth market research and analysis to identify trends, opportunities, and competitive landscapes.",
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "International Partnership Development",
      description:
        "Facilitation of cross-border partnerships and joint ventures for business expansion.",
    },
    {
      icon: <Share2 className="text-primary" size={24} />,
      title: "Global Expansion Support",
      description:
        "End-to-end support for businesses expanding into international markets, including market entry strategies.",
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
              Global Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Strategic consulting solutions for international business success
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
              Our Global Services
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide strategic consulting services to help businesses
              succeed in global markets
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

      {/* Benefits Section */}
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
                Why Choose Our Global Services
              </motion.h2>
              <motion.p
                className="section-subtitle max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Discover the advantages of partnering with Venturex for your
                global business needs
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Global Network",
                  description:
                    "Access to our extensive network of partners and resources across multiple countries.",
                },
                {
                  title: "Local Expertise",
                  description:
                    "In-depth understanding of local markets combined with global business perspectives.",
                },
                {
                  title: "Customized Solutions",
                  description:
                    "Tailored strategies that address your specific business goals and challenges.",
                },
                {
                  title: "Risk Mitigation",
                  description:
                    "Identification and management of potential risks in international operations.",
                },
                {
                  title: "Regulatory Compliance",
                  description:
                    "Ensuring adherence to complex international laws and regulations.",
                },
                {
                  title: "Sustainable Growth",
                  description:
                    "Focus on long-term, sustainable business growth in global markets.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
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
              Success Stories
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Real results from our global consulting services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  T
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-primary">
                    TechSphere Inc.
                  </h3>
                  <p className="text-secondary">Technology Company</p>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-4">
                Global Market Expansion
              </h4>
              <p className="text-text-light mb-6">
                TechSphere wanted to expand their operations from the USA to
                Asia but faced challenges with local regulations and market
                understanding. Venturex provided comprehensive support for their
                market entry strategy.
              </p>
              <div className="mb-6">
                <h5 className="font-medium mb-2">Our Solution:</h5>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Conducted comprehensive market analysis</li>
                  <li>Developed tailored entry strategy</li>
                  <li>Facilitated local partnerships</li>
                  <li>Managed regulatory compliance</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Results:</h5>
                <p className="text-text-light">
                  TechSphere successfully established operations in 3 Asian
                  countries within 12 months, with 40% lower costs than
                  initially projected and achieved profitability within the
                  first year.
                </p>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  E
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-primary">
                    EcoVentures
                  </h3>
                  <p className="text-secondary">Renewable Energy</p>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-4">
                Digital Transformation
              </h4>
              <p className="text-text-light mb-6">
                EcoVentures needed to modernize their operations with digital
                solutions to remain competitive in the global renewable energy
                market. They lacked internal expertise to lead this
                transformation.
              </p>
              <div className="mb-6">
                <h5 className="font-medium mb-2">Our Solution:</h5>
                <ul className="list-disc list-inside text-text-light space-y-2">
                  <li>Developed comprehensive digital strategy</li>
                  <li>Implemented cloud-based operations platform</li>
                  <li>Created customer engagement digital ecosystem</li>
                  <li>Provided training and change management</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Results:</h5>
                <p className="text-text-light">
                  30% increase in operational efficiency, 45% improvement in
                  customer satisfaction, and 25% revenue growth within 18 months
                  of implementation.
                </p>
              </div>
            </motion.div>
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
              Ready to Go Global?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to learn how our global services can help your
              business expand and succeed in international markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="btn-accent">
                Schedule a Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalServicesPage;
