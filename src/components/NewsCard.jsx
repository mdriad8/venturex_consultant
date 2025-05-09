import React from "react";
import { Calendar } from "lucide-react";

const NewsCard = ({ title, excerpt, image, date, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-text-light text-sm ml-auto">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3>
        <p className="text-text-light mb-4 flex-1">{excerpt}</p>
        <a
          href="#"
          className="text-primary font-medium hover:text-secondary transition-colors mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
