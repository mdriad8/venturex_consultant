import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Award,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Moshiur Sarker",
      position: "Business Development Consultant",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Expert in foreign investment strategies with over 10 years of experience.",
    },
    {
      name: "Fatima Rahman",
      position: "Legal Consultant",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      bio: "Specializes in business registration, compliance, and regulatory affairs.",
    },
    {
      name: "Ahmed Khan",
      position: "Digital Transformation Specialist",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Implements cutting-edge digital solutions for business growth and efficiency.",
    },
    {
      name: "Nadia Chowdhury",
      position: "International Relations Director",
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      bio: "Facilitates global partnerships and expansion opportunities.",
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
              About Venturex
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering businesses to thrive in global markets
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-text-light mb-6">
                Founded in 2015, Venturex Consult Service was established with a
                vision to bridge the gap between international businesses and
                the Bangladesh market. Our founder, Moshiur Sarker, recognized
                the challenges foreign investors faced when trying to establish
                operations in Bangladesh and set out to create a one-stop
                solution.
              </p>
              <p className="text-text-light mb-6">
                Over the years, we've expanded our services to include business
                innovation strategies and digital ecosystem development, helping
                both local and international companies adapt to rapidly changing
                business environments.
              </p>
              <p className="text-text-light">
                Today, Venturex stands as a trusted advisor to corporations,
                startups, and government agencies, providing expert guidance on
                navigating complex business landscapes and driving sustainable
                growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                alt="Our office"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 relative bg-gray-50">
        {/* Subtle geometric background */}
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
                Our Mission & Vision
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <motion.div
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">
                  Our Mission
                </h3>
                <p className="text-text-light text-base sm:text-lg leading-relaxed">
                  To provide comprehensive consulting services that enable
                  businesses to navigate complex regulatory environments,
                  implement innovative strategies, and establish successful
                  operations in new markets.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <Globe size={28} className="text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">
                  Our Vision
                </h3>
                <p className="text-text-light text-base sm:text-lg leading-relaxed">
                  To be the premier consulting partner for businesses seeking to
                  thrive in the global marketplace, known for our expertise,
                  integrity, and commitment to delivering exceptional value.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle size={24} />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from the quality of our advice to the service we provide.",
              },
              {
                icon: <Users size={24} />,
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical conduct in all our business relationships.",
              },
              {
                icon: <Award size={24} />,
                title: "Innovation",
                description:
                  "We embrace innovation and creative thinking to develop forward-looking solutions.",
              },
              {
                icon: <Clock size={24} />,
                title: "Commitment",
                description:
                  "We are committed to our clients' success and dedicated to delivering results.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-text-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Leadership Team
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Meet the experts who drive our success and deliver exceptional
              results for our clients
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary mb-4">{member.position}</p>
                  <p className="text-text-light">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
