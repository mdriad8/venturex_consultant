import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, Tag, User } from "lucide-react";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
  const featuredNews = {
    title: "Bangladesh Announces New Foreign Investment Incentives for 2025",
    excerpt:
      "The government has unveiled an ambitious new package of incentives aimed at attracting foreign investment in key strategic sectors.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    date: "May 20, 2025",
    category: "Policy Update",
    author: "Mohammed Rahim",
  };

  const newsList = [
    {
      id: 1,
      title: "Digital Transformation Success Stories from Emerging Markets",
      excerpt:
        "Examining how companies in emerging markets are leveraging digital technologies to overcome unique challenges and achieve unprecedented growth.",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      date: "May 15, 2025",
      category: "Innovation",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "The Future of Work: Remote Teams and Global Talent Acquisition",
      excerpt:
        "How businesses are adapting their talent acquisition strategies to leverage global talent pools and build effective remote teams.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      date: "May 10, 2025",
      category: "Business Trends",
      author: "Ahmad Hassan",
    },
    {
      id: 3,
      title: "Sustainable Business Practices: A Competitive Advantage",
      excerpt:
        "Exploring how companies implementing sustainable business practices are gaining competitive advantages in global markets.",
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      date: "May 5, 2025",
      category: "Sustainability",
      author: "Priya Sharma",
    },
    {
      id: 4,
      title: "E-commerce Growth Opportunities in South Asia",
      excerpt:
        "Analysis of the rapidly expanding e-commerce sector in South Asia and strategies for businesses looking to enter this market.",
      image:
        "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg",
      date: "April 30, 2025",
      category: "Market Analysis",
      author: "David Wong",
    },
    {
      id: 5,
      title: "Navigating Supply Chain Challenges in a Post-Pandemic World",
      excerpt:
        "Strategies for building resilient supply chains that can withstand global disruptions and maintain business continuity.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      date: "April 25, 2025",
      category: "Operations",
      author: "Lisa Chen",
    },
    {
      id: 6,
      title: "Venturex Hosts International Business Innovation Conference",
      excerpt:
        "Recap of our successful International Business Innovation Conference featuring keynote speakers from leading global companies.",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      date: "April 20, 2025",
      category: "Event",
      author: "Moshiur Sarker",
    },
  ];

  const categories = [
    { name: "All", count: 12 },
    { name: "Business Trends", count: 4 },
    { name: "Innovation", count: 3 },
    { name: "Market Analysis", count: 2 },
    { name: "Policy Update", count: 2 },
    { name: "Event", count: 1 },
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
              News & Updates
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay informed with the latest business insights and company
              updates
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center text-text-light text-sm ml-4">
                    <Calendar size={14} className="mr-1" />
                    {featuredNews.date}
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">
                  {featuredNews.title}
                </h2>
                <div className="flex items-center mb-6 text-text-light text-sm">
                  <User size={14} className="mr-1" />
                  By {featuredNews.author}
                </div>
                <p className="text-text-light mb-6">{featuredNews.excerpt}</p>
                <a href="#" className="btn-primary inline-block">
                  Read Full Article
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-primary">
                      Categories
                    </h3>
                    <Filter size={16} className="text-text-light" />
                  </div>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`flex items-center justify-between py-2 px-3 rounded-md transition-colors ${
                            index === 0
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-text-light bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Subscribe
                  </h3>
                  <p className="text-text-light mb-4">
                    Get the latest updates directly to your inbox
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <button type="submit" className="w-full btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary">
                  Latest Articles
                </h2>
                <div className="flex items-center">
                  <span className="text-text-light mr-2">Sort by:</span>
                  <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Category</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsList.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <NewsCard
                      title={news.title}
                      excerpt={news.excerpt}
                      image={news.image}
                      date={news.date}
                      category={news.category}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    &laquo;
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    &raquo;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
