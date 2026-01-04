"use client";

import { Truck, Clock, ShieldCheck, MapPinned, Heart, Dog, Cat, Bird, PhoneCall, PawPrint, PackageCheck, ClipboardCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PetTransportPage() {
  const highlights = [
    { Icon: Clock, title: "Timely Pick-Up & Drop", desc: "Scheduled transport you can rely on" },
    { Icon: ShieldCheck, title: "GPS-Tracked Vehicles", desc: "Live location updates during transit" },
    { Icon: Heart, title: "Safe & Caring Handlers", desc: "Trained staff for stress-free journeys" },
    { Icon: PackageCheck, title: "Animal-Friendly Kits", desc: "Water, first-aid, and comfort essentials onboard" },
  ];

  const transportServices = [
    { Icon: Dog, title: "Dogs Transport", desc: "Local & intercity travel with walking breaks" },
    { Icon: Cat, title: "Cats Transport", desc: "Quiet, cushioned carriers for calm transit" },
    { Icon: Bird, title: "Birds Transport", desc: "Temperature-safe travel for sensitive species" },
    { Icon: PawPrint, title: "Small Pets", desc: "Rabbits, hamsters, guinea pigs, etc." },
    { Icon: Truck, title: "Farm Animals", desc: "Goat, sheep, calves, and livestock support" },
    { Icon: PackageCheck, title: "Relocation Support", desc: "Home shifting, adoption, and rescue transport" },
  ];

  const safetyChecks = [
    { Icon: PackageCheck, text: "Secure carriers and harness safety belts" },
    { Icon: ShieldCheck, text: "Vaccinated animals accepted with documentation check" },
    { Icon: Heart, text: "Hydration support and rest breaks included" },
    { Icon: PackageCheck, text: "Dedicated vehicles for pets (no mixed cargo)" },
    { Icon: ShieldCheck, text: "Emergency response plan during travel" },
    { Icon: ClipboardCheck, text: "Digital transport receipt and status logs" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/pet_transport.jpg" alt="Pet Transport Service" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <Truck className="w-7 h-7" /> Pet Transport Services
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra provides secure and comfortable transport for pets, farm animals, and rescue cases.
              Travel without worry using our tracked vehicles and trained animal handlers.
            </p>

            {/* Highlights Cards */}
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
                <PhoneCall className="w-5 h-5" /> Book Transport
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transport For All */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <PawPrint className="w-7 h-7 text-teal-600" /> Transport for Every Animal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {transportServices.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <t.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{t.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Checklist */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 flex justify-center items-center gap-2">
            <PackageCheck className="w-7 h-7 text-teal-600"/> Safety & Comfort Checklist
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {safetyChecks.map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-teal-50 p-3 rounded-lg border border-teal-200">
                <s.Icon className="w-5 h-5 text-teal-600"/>
                <p className="text-sm font-semibold text-gray-900">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 px-6 bg-teal-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600"/> Ethical & Secure Animal Transit
          </h3>
          <p className="text-sm text-gray-600">
            We maintain hygiene, comfort, verified staff, animal safety equipment, cold-chain support if required,
            and digital tracking logs for owners.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <Sparkles className="w-6 h-6 text-teal-600"/> Move Your Pet with Zero Stress
          </h3>
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
              <Truck className="w-5 h-5"/> Reserve Transport
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
