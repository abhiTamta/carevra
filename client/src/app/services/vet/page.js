import { PhoneCall, Clock, ShieldCheck, HeartPulse, MapPinned, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VetOnCallPage() {
  const highlights = [
    { Icon: Clock, title: "24/7 Availability", desc: "Day or night emergency support" },
    { Icon: ShieldCheck, title: "Verified Professionals", desc: "Licensed and certified vets" },
    { Icon: MapPinned, title: "Doorstep Service", desc: "No travel stress for pets" },
    { Icon: PhoneCall, title: "Instant Booking", desc: "Book in one tap via app" },
  ];

  const benefits = [
    { Icon: HeartPulse, title: "Emergency Care", desc: "Fast response for critical situations" },
    { Icon: Clock, title: "No Waiting Lines", desc: "Avoid clinic queues & delays" },
    { Icon: ShieldCheck, title: "Safe & Reliable", desc: "Trusted care for all pets" },
    { Icon: MapPinned, title: "Track Provider", desc: "Live location tracking in app" },
    { Icon: PhoneCall, title: "In-App Support", desc: "Chat & guidance anytime" },
    { Icon: Users, title: "All Animal Support", desc: "Pets, farms & rescue cases" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/vetoncall.jpg" alt="Vet on Call" fill className="object-cover" />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <HeartPulse className="w-7 h-7" /> Vet on Call
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra brings professional veterinary care directly to your home. Our certified vets are available 24/7 at your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition">
                  <item.Icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <PhoneCall className="w-5 h-5"/> Book a Vet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Why Choose Carevra?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <b.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
