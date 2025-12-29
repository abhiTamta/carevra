import { ShieldCheck, Heart, Users, Globe, Truck, Scissors, HeartPulse, PawPrint } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Story */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/animal_care_team.jpg"
              alt="Carevra Team"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-teal-600 flex items-center gap-2">
              <PawPrint className="w-6 h-6"/> Care for Every Life
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-base">
              Carevra is a global on-demand service platform built to provide
              instant care solutions for pets, rescue animals, farms, and wildlife.
              We connect animal owners to verified care providers just like Uber
              connects riders to drivers.
            </p>
            <p className="text-gray-500 mt-3">
              From emergency medical support to grooming, transport, insurance
              and training — we build technology that animals deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: Heart, title: "Compassion First", desc: "Every service is built with love and empathy for animals." },
              { Icon: Users, title: "Trusted Community", desc: "Verified providers and responsible animal lovers." },
              { Icon: Globe, title: "Global Standards", desc: "Designed to meet international safety and care norms." },
              { Icon: ShieldCheck, title: "Safety Assured", desc: "Live tracking, secure payments and 24/7 support." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <v.Icon className="w-10 h-10 text-teal-600 mx-auto mb-3"/>
                <h3 className="text-xl font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-teal-600 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-12">A digital ecosystem for all animal requirements</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { icon: HeartPulse, label: "Vet on Call" },
              { icon: Scissors, label: "Grooming" },
              { icon: PawPrint, label: "Boarding" },
              { icon: Truck, label: "Animal Rides" },
              { icon: Globe, label: "Insurance Help" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <s.icon className="w-7 h-7 text-teal-600 mb-2"/>
                <span className="font-bold text-gray-800 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold">Our Mission</h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            To build the world's most reliable, accessible and compassionate
            animal care network powered by technology, community, and trust.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { Icon: Users, label: "Verified Providers" },
              { Icon: Globe, label: "Global Service Model" },
              { Icon: Heart, label: "Animal-First Platform" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-3 rounded-full backdrop-blur">
                <m.Icon className="w-5 h-5 text-teal-400"/>
                <span className="text-sm font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
