import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card group">
      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-primary group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-text-light mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
      >
        Learn More
        <ArrowUpRight
          size={16}
          className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        />
      </a>
    </div>
  );
};

export default ServiceCard;
