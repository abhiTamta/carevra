import { Syringe, Dog, Cat, Bird, PawPrint, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VaccinationPage() {
  const animals = [
    { Icon: Dog, title: "Dog Vaccination", desc: "Anti-Rabies, DHPPi, Leptospirosis, Kennel Cough" },
    { Icon: Cat, title: "Cat Vaccination", desc: "Anti-Rabies, FVRCP, FeLV, FIP" },
    { Icon: Bird, title: "Bird Vaccination", desc: "Polyomavirus, PDD, Avian Influenza (as recommended)" },
    { Icon: PawPrint, title: "Farm Animals", desc: "Cattle, Goat, Sheep, Buffalo vaccination support" },
  ];

  const vaccineSchedule = [
    { age: "6-8 Weeks", vaccines: "First DHPPi / FVRCP, Deworming" },
    { age: "10-12 Weeks", vaccines: "Booster DHPPi / FVRCP, Leptospirosis, FeLV (Cats)" },
    { age: "14-16 Weeks", vaccines: "Anti-Rabies, Final Booster" },
    { age: "Every Year", vaccines: "Annual Rabies + Health vaccine boosters" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/vaccination.jpg" alt="Animal Vaccination" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <Syringe className="w-7 h-7" /> Animal Vaccination Services
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra ensures timely and safe vaccination for all animals — from pets to farm and rescue cases.
              Our certified veterinarians deliver vaccines at your doorstep with full safety and documentation.
            </p>

            {/* Supported Animals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-6">
              {animals.map((a, i) => (
                <div key={i} className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-200 hover:shadow-md transition">
                  <a.Icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{a.title}</h3>
                    <p className="text-xs text-gray-600">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <Syringe className="w-5 h-5"/> Book Vaccination
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animal Categories */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <PawPrint className="w-7 h-7 text-teal-600"/> Vaccination for Every Animal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {animals.map((a, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <a.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{a.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccine Schedule */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <Clock className="w-6 h-6 text-teal-600"/> Vaccine Schedule Guide
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="p-4 text-sm font-bold">Age</th>
                  <th className="p-4 text-sm font-bold">Vaccines</th>
                </tr>
              </thead>
              <tbody>
                {vaccineSchedule.map((v, i) => (
                  <tr key={i} className="border-b last:border-none hover:bg-teal-50 transition">
                    <td className="p-4 text-sm font-semibold text-gray-900">{v.age}</td>
                    <td className="p-4 text-sm text-gray-600">{v.vaccines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            *Exact vaccination may vary by breed, health and vet recommendation.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-6 bg-teal-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600"/> 100% Safe & Certified Vaccines
          </h3>
          <p className="text-sm text-gray-600">
            We maintain cold-chain storage, hygiene, vaccine certificates, and digital health records for every animal.
          </p>
        </div>
      </section>

    </main>
  );
}
