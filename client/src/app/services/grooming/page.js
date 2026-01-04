"use client";

import { Scissors, Bath, Sparkles, Truck, ShieldCheck, Clock, Heart, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GroomingPage() {
  const services = [
    { Icon: Bath, title: "Full Body Bath", desc: "Deep cleansing with pet-friendly shampoos & conditioners" },
    { Icon: Scissors, title: "Hair Trimming", desc: "Breed-specific styling and comfortable grooming cuts" },
    { Icon: Sparkles, title: "De-Shedding", desc: "Remove loose fur to reduce shedding at home" },
    { Icon: PawPrint, title: "Paw & Nail Care", desc: "Nail trimming, paw massage & pad cleaning" },
    { Icon: Scissors, title: "Ear Cleaning", desc: "Gentle ear care to prevent infections" },
    { Icon: Sparkles, title: "Teeth Cleaning", desc: "Oral hygiene support with vet-approved products" },
  ];

  const perks = [
    { Icon: Clock, title: "24/7 Booking", desc: "Schedule grooming anytime through the app" },
    { Icon: Truck, title: "Doorstep Grooming", desc: "We come to you — zero travel stress for animals" },
    { Icon: ShieldCheck, title: "Safe & Certified", desc: "Trained groomers with hygiene and safety priority" },
    { Icon: Heart, title: "Stress-Free Care", desc: "Gentle handling with love and patience" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/grooming.jpg" alt="Animal Grooming" fill className="object-cover" />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <Scissors className="w-7 h-7" /> Grooming Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra provides premium grooming for pets and animals at your doorstep. 
              Our trained professionals ensure comfort, hygiene, and a refreshing experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-6">
              {perks.map((p, i) => (
                <div key={i} className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition">
                  <p.Icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{p.title}</h3>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <Scissors className="w-5 h-5"/> Book Grooming
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Grooming Services Grid */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <Sparkles className="w-7 h-7 text-teal-600"/> Our Grooming Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <s.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Grooming Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex justify-center items-center gap-2">
            <Heart className="w-6 h-6 text-teal-600"/> Why Grooming is Important?
          </h2>
          <p className="text-lg text-gray-600">
            Regular grooming helps maintain hygiene, prevents skin infections, improves blood circulation, reduces shedding, 
            and keeps your pets happy and confident.
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 px-6 bg-teal-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600"/> Trusted & Hygienic Grooming
          </h3>
          <p className="text-sm text-gray-600">
            We follow sanitization protocols, safe handling, pet-friendly grooming kits, and personalized care for every animal.
          </p>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-8 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <PawPrint className="w-6 h-6 text-teal-600"/> Give Your Pet the Care They Deserve
          </h3>
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-md">
              <Sparkles className="w-5 h-5 inline mr-2"/> Book a Groomer
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
