import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import venturex from "../asset/Venturex.png"; // Adjust the path as necessary

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
        <img src={venturex} alt="Trending Up" className="w-5 h-5" />
        <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-accent rounded-sm"></div>
      </div>
      <div className="text-primary font-heading">
        <span className="font-bold text-lg">Venturex</span>
        <span className="text-sm tracking-wider ml-1 opacity-90">Consult</span>
      </div>
    </Link>
  );
};

export default Logo;
