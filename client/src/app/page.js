import { Button } from "@/components/ui/button";
import {
  Apple,
  Car,
  HeartHandshake,
  HeartPulse,
  PawPrint,
  Play,
  Scissors,
  ScissorsLineDashed,
  ShieldCheck,
  Smartphone,
  Syringe,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-600 text-center">
            Care Beyond Limits
          </h2>
          <p className="text-lg text-gray-600 text-center mt-2 mb-10">
            Smart care, instant booking, and verified professionals — built for
            animals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                Icon: "Stethoscope",
                title: "24/7 Vet Support",
                desc: "Certified veterinarians anytime at your doorstep.",
              },
              {
                Icon: "Scissors",
                title: "Premium Grooming",
                desc: "Spa-like grooming for all pets & breeds.",
              },
              {
                Icon: "Home",
                title: "Safe Boarding",
                desc: "Comfortable stays with live photo updates.",
              },
              {
                Icon: "Car",
                title: "Animal Transport",
                desc: "GPS-tracked safe travel for animals.",
              },
              {
                Icon: "ShieldCheck",
                title: "Insurance Help",
                desc: "Claims, policies, and guidance support.",
              },
              {
                Icon: "HeartHandshake",
                title: "Training & Care",
                desc: "Experts for behavior, fitness and wellbeing.",
              },
            ].map((f, i) => {
              const Icon = require("lucide-react")[f.Icon];
              return (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <Icon className="w-10 h-10 text-teal-600 mb-3 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-center mt-2">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How Carevra Works
          </h2>
          <p className="text-lg text-gray-600 mt-2 mb-8">
            Simple, fast, and stress-free — just like booking a ride.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <span className="text-4xl">1</span>
              <h4 className="font-bold mt-3">Choose Service</h4>
              <p className="text-sm text-gray-600 mt-1">
                Select any pet or animal care requirement
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <span className="text-4xl">2</span>
              <h4 className="font-bold mt-3">Get Matched</h4>
              <p className="text-sm text-gray-600 mt-1">
                We connect you with verified providers instantly
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <span className="text-4xl">3</span>
              <h4 className="font-bold mt-3">Track & Relax</h4>
              <p className="text-sm text-gray-600 mt-1">
                Live updates, safety tracking and support
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
=          <div>
            <h2 className="text-5xl font-black">Carevra App</h2>
            <p className="text-lg mt-3 opacity-90">
              Animal care + transport booking platform in your pocket
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <HeartPulse className="w-5" /> Vet & emergency booking
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="w-5" /> Grooming & home care
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-5" /> GPS-tracked animal rides
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5" /> Insurance & claims
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="https://play.google.com" target="_blank">
                <Button className="bg-white text-teal-700 font-bold px-6 py-3 rounded-full flex items-center gap-2">
                  <Play className="w-5 h-5" /> Google Play
                </Button>
              </Link>

              <Link href="https://www.apple.com/app-store/" target="_blank">
                <Button className="bg-white text-teal-700 font-bold px-6 py-3 rounded-full flex items-center gap-2">
                  <Apple className="w-5 h-5" /> App Store
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[520px]">
            <Image
              src="/images/app_mockup/pet_app_ui.jpg"
              alt="Carevra App Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Smartphone,
              title: "1-Tap Booking",
              desc: "Book any animal care service instantly.",
            },
            {
              icon: Truck,
              title: "Live Tracking",
              desc: "Track your pet ride or caregiver live on map.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Payments",
              desc: "Pay safely via global payment gateways.",
            },
            {
              icon: HeartPulse,
              title: "Emergency Support",
              desc: "24/7 response for pets & animals.",
            },
            {
              icon: PawPrint,
              title: "Multi-Service App",
              desc: "Vet, grooming, transport, training and more.",
            },
            {
              icon: HeartHandshake,
              title: "Trusted Providers",
              desc: "Verified and top-rated professionals.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <b.icon className="w-9 h-9 text-teal-600 mb-3 mx-auto" />
              <h4 className="text-xl font-bold text-gray-900 text-center">
                {b.title}
              </h4>
              <p className="text-gray-600 text-center mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="py-16 px-6 bg-teal-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Loved by Pet Owners</h2>
          <p className="text-lg mt-2 mb-8 text-teal-100">
            Trusted care across cities and communities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
              <p className="text-lg">
                “Carevra made emergency vet visits effortless. Real-time updates
                gave me peace of mind.”
              </p>
              <h5 className="font-bold mt-4">— A pet parent, Delhi</h5>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
              <p className="text-lg">
                “The grooming service was premium and professional. My dog loves
                it!”
              </p>
              <h5 className="font-bold mt-4">— Dog owner, Dubai</h5>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-600 text-center">
            Our Popular Services
          </h2>
          <p className="text-lg text-gray-600 text-center mt-2 mb-10">
            Everything your pet needs, delivered on-demand.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                title: "Vet on Call",
                path: "/services/vet",
                icon: "Stethoscope",
              },
              {
                title: "Grooming",
                path: "/services/grooming",
                icon: "Scissors",
              },
              { title: "Boarding", path: "/services/boarding", icon: "Home" },
              {
                title: "Transport",
                path: "/services/pet-transport",
                icon: "Car",
              },
              {
                title: "Training",
                path: "/services/training",
                icon: "HeartPulse",
              },
              {
                title: "Vaccination",
                path: "/services/vaccination",
                icon: "Syringe",
              },
              { title: "Day Care", path: "/services/daycare", icon: "Dog" },
              {
                title: "Insurance",
                path: "/services/insurance",
                icon: "ShieldCheck",
              },
            ].map((s, i) => {
              const Icon = require("lucide-react")[s.icon];
              return (
                <Link
                  key={i}
                  href={s.path}
                  className="p-4 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                >
                  <Icon className="w-8 h-8 text-teal-600 mb-2" />
                  <span className="text-lg font-bold text-gray-900">
                    {s.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Join the Future of Animal Care
          </h2>
          <p className="text-xl text-gray-600 mt-4 mb-8">
            Book instantly, track live, and get support anytime — all in one
            app.
          </p>
          <button className="px-8 py-4 bg-teal-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-teal-700 transition">
            Get Started
          </button>
        </div>
      </section> */}
    </div>
  );
}
