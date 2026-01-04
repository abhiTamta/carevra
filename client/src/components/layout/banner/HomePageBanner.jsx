"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const bannerImages = {
  "/about": "/images/banner/inner_banner_01.jpg",
  "/contact": "/images/banner/inner_banner_01.jpg",
  "/services": "/images/banner/inner_banner_01.jpg",
  "/vet": "/images/banner/inner_banner_01.jpg",
  "/vaccination": "/images/banner/inner_banner_01.jpg",
  "/grooming": "/images/banner/inner_banner_01.jpg",
  "/boarding": "/images/banner/inner_banner_01.jpg",
  "/daycare": "/images/banner/inner_banner_01.jpg",
  "/training": "/images/banner/inner_banner_01.jpg",
  "/pet-transport": "/images/banner/inner_banner_01.jpg",
  "/insurance": "/images/banner/inner_banner_01.jpg",
};

const formatTitle = (path) => {
  if (path === "/") return "Welcome to Carevra";
  if (path.startsWith("/services/")) return "Our Services";
  if (path.startsWith("/dashboard")) return "";

  return path
    .split("/")
    .filter(Boolean)
    .map(word => word.replace("-", " "))
    .join(" ")
    .replace(/^\w/, c => c.toUpperCase());
};


const HomePageBanner = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const bannerSrc = isHome
  ? "/images/banner/banner_2.jpg"
  : pathname.startsWith("/services/")
      ? "/images/banner/inner_banner_01.jpg"
      : bannerImages[pathname] || "/images/banner/inner_banner_01.jpg";

  const pageTitle = formatTitle(pathname);

  return (
    <div className={`w-full relative ${isHome ? "min-h-screen" : "h-[350px] md:h-[300px]"}`}>

      {/* Background Image */}
      <Image
        src={bannerSrc}
        alt="Carevra Banner"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white capitalize">
          {isHome ? "Care for Every Life" : pageTitle}
        </h1>
        <p className="text-md md:text-lg text-teal-200 mt-3 max-w-2xl">
          {isHome
            ? "On-demand pet & animal care services, delivered with trust, speed and love."
            : null}
        </p>

        {isHome && (
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-teal-700 transition cursor-pointer">
              Book a Service
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer">
              Become a Provider
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default HomePageBanner;
