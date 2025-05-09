import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ClientLogo from "../components/ClientLogo";

const ClientsPage = () => {
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
    {
      id: 7,
      name: "Samsung",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
    },
    {
      id: 8,
      name: "Microsoft",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      id: 9,
      name: "IBM",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
    },
    {
      id: 10,
      name: "Coca-Cola",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/512px-Coca-Cola_logo.svg.png",
    },
    {
      id: 11,
      name: "Toyota",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_logo.svg/512px-Toyota_logo.svg.png",
    },
    {
      id: 12,
      name: "Honda",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/512px-Honda.svg.png",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "TechSphere Inc.",
      position: "CEO",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      quote:
        "Venturex provided exceptional consulting services for our expansion into Bangladesh. Their deep understanding of the local market and regulations made our entry smooth and successful.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "EcoVentures",
      position: "Operations Director",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      quote:
        "The digital ecosystem strategy developed by Venturex transformed our business operations. We've seen remarkable improvements in efficiency and customer engagement.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      company: "GlobalTech Solutions",
      position: "Managing Director",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      quote:
        "Venturex handled our company registration and compliance requirements flawlessly. Their attention to detail and proactive approach saved us time and resources.",
      rating: 4,
    },
    {
      name: "Priya Sharma",
      company: "Innovative Enterprises",
      position: "Founder",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      quote:
        "Working with Venturex on our business innovation strategy has been a game-changer. Their insights and expertise helped us pivot our business model for sustained growth.",
      rating: 5,
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
              Our Clients
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by leading organizations and businesses worldwide
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Clients Grid Section */}
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
              Companies We've Worked With
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're proud to have partnered with these leading organizations
              around the globe
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * client.id }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <ClientLogo name={client.name} image={client.image} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
                Industries We Serve
              </motion.h2>
              <motion.p
                className="section-subtitle max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our expertise spans across multiple industries and sectors
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Technology",
                  description:
                    "From startups to established tech giants, we provide tailored solutions for software, hardware, and IT services companies.",
                },
                {
                  name: "Manufacturing",
                  description:
                    "Strategic guidance for manufacturing businesses looking to optimize operations, expand globally, or modernize with digital solutions.",
                },
                {
                  name: "Financial Services",
                  description:
                    "Comprehensive consulting for banks, fintech companies, and financial institutions navigating complex regulatory environments.",
                },
                {
                  name: "Retail & E-commerce",
                  description:
                    "Innovative strategies for retailers and e-commerce businesses to enhance customer experience and optimize supply chains.",
                },
                {
                  name: "Healthcare",
                  description:
                    "Specialized services for healthcare providers and medical technology companies focusing on compliance and innovation.",
                },
                {
                  name: "Education",
                  description:
                    "Forward-thinking solutions for educational institutions and EdTech companies transforming the learning landscape.",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {industry.name}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client Testimonials
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hear what our clients have to say about working with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-secondary">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-text-light italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
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
              Join Our Growing List of Satisfied Clients
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to learn how Venturex can help your business
              succeed through our expert consulting services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="btn-accent">
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
