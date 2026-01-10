import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const isSticky = scrollY > 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {}, []);

  return (
    <div
      className={cn(
        "w-full bg-gray-100 shadow px-5 py-4 xl:px-0 transition-all duration-300",
        isSticky && "fixed top-0 left-0 z-50 bg-white shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo uppercase font-bold text-3xl text-teal-600 flex items-center gap-1.5">
          <PawPrint className="w-6 h-6" />
          Carevra
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
