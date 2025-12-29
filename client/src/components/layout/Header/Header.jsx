import React from "react";
import Navigation from "./Navigation";
import { PawPrint } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 shadow px-5 py-4 xl:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo uppercase font-bold text-3xl text-teal-600 flex items-center gap-1.5">
          <PawPrint className="w-6 h-6"/>Carevra
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
