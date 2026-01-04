"use client";

import { Sun, Clock, ShieldCheck, Heart, MapPinned, Dog, Cat, Bird, Camera, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DayCarePage() {
  const highlights = [
    { Icon: Clock, title: "Flexible Hours", desc: "Drop-off & pick-up as per your schedule" },
    { Icon: ShieldCheck, title: "Safe & Supervised", desc: "Trained caretakers always present" },
    { Icon: Camera, title: "Live Updates", desc: "Get photos and activity updates" },
    { Icon: MapPinned, title: "Comfortable Space", desc: "Clean, spacious & pet-friendly zones" },
  ];

  const careServices = [
    { Icon: Dog, title: "Dog Day Care", desc: "Playtime, feeding, walks, and social activities" },
    { Icon: Cat, title: "Cat Day Care", desc: "Quiet zones, toys, feeding & comfort care" },
    { Icon: Bird, title: "Bird Day Care", desc: "Safe perches, monitoring & feeding support" },
    { Icon: PawPrint, title: "Small Animals", desc: "Rabbits, Guinea pigs, Hamsters & more" },
    { Icon: Heart, title: "Special Need Care", desc: "Personal attention for sensitive animals" },
    { Icon: Sun, title: "Activity Based Care", desc: "Mental & physical engagement plans" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/daycare.jpg" alt="Animal Day Care" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <Sun className="w-7 h-7" /> Animal Day Care Services
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra Day Care gives your animals a joyful, safe, and engaging stay while you're away.
              We provide play zones, scheduled feeding, activity plans, and live updates to owners.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition">
                  <h.Icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{h.title}</h3>
                    <p className="text-xs text-gray-600">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <PawPrint className="w-5 h-5"/> Book Day Care
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Day Care Services */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <PawPrint className="w-7 h-7 text-teal-600"/> Day Care for Every Animal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {careServices.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <c.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex justify-center items-center gap-2">
            <Heart className="w-6 h-6 text-teal-600"/> Why Day Care Matters?
          </h2>

          <p className="text-lg text-gray-600">
            Day care helps animals stay active, social, stress-free, and mentally stimulated.
            It prevents separation anxiety, promotes good habits, and keeps pets healthier and happier.
          </p>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-10 px-6 bg-teal-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600"/> Trusted Day Care with Love
          </h3>
          <p className="text-sm text-gray-600">
            We ensure sanitized spaces, scheduled meals, gentle care, activity tracking, and professional supervision for every animal.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <PawPrint className="w-6 h-6 text-teal-600"/> A Fun & Safe Day for Your Pet
          </h3>
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
              <Sun className="w-5 h-5"/> Reserve Day Care Slot
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
