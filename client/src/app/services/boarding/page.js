"use client";

import { Home, Clock, ShieldCheck, MapPinned, Users, Heart, PhoneCall, TentTree, ClipboardCheck, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BoardingPage() {
  const features = [
    { Icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock care and supervision" },
    { Icon: ShieldCheck, title: "Trained Staff", desc: "Experienced handlers and caretakers" },
    { Icon: MapPinned, title: "Safe Location", desc: "Hygienic and animal-friendly environment" },
    { Icon: ClipboardCheck, title: "Health Check", desc: "Regular wellness tracking for every animal" },
  ];

  const boardingServices = [
    { Icon: Home, title: "Pet Boarding", desc: "Dogs, Cats, Birds, Rabbits, and more" },
    { Icon: TentTree, title: "Farm Boarding", desc: "Short-term stay for cattle, goats, sheep, etc." },
    { Icon: Users, title: "Rescue Shelter Support", desc: "Boarding for NGO and animal rescue cases" },
    { Icon: ClipboardCheck, title: "Diet Management", desc: "Custom meal plans based on animal needs" },
    { Icon: Clock, title: "Daily Updates", desc: "Photos and status updates for owners" },
    { Icon: Heart, title: "Stress-Free Stay", desc: "Comfort, playtime, and gentle care handling" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/boarding.jpg" alt="Animal Boarding" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <Home className="w-7 h-7" /> Animal Boarding Services
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra provides a secure and caring home-away-from-home for your animals.
              Whether it's pets, farm animals, or rescue cases — we ensure safety, comfort, and real-time updates.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition">
                  <f.Icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{f.title}</h3>
                    <p className="text-xs text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <TentTree className="w-5 h-5"/> Book Boarding
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Boarding Services */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <TentTree className="w-7 h-7 text-teal-600"/> Our Boarding Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boardingServices.map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <b.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Boarding Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex justify-center items-center gap-2">
            <ClipboardCheck className="w-6 h-6 text-teal-600"/> Why Choose Boarding?
          </h2>

          <p className="text-lg text-gray-600">
            Boarding ensures your animals stay safe while you're away. We provide proper diet, hygiene, medical support,
            play areas, social interaction, and professional care — giving owners peace of mind and animals a happy stay.
          </p>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-10 px-6 bg-teal-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600"/> Safety & Comfort Guaranteed
          </h3>
          <p className="text-sm text-gray-600">
            Secure shelter, sanitized stay areas, trained caretakers, diet planning, vaccination checks, and emergency support available.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <PawPrint className="w-6 h-6 text-teal-600"/> A Loving Stay for Your Animal
          </h3>0
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5"/> Reserve a Spot
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
