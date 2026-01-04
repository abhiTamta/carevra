"use client";

import { GraduationCap, Clock, ShieldCheck, Heart, Dog, Cat, Bird, Dumbbell, Sparkles, Users, PhoneCall, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TrainingPage() {
  const highlights = [
    { Icon: Clock, title: "Flexible Training Plans", desc: "Customized by animal age, breed & behavior" },
    { Icon: ShieldCheck, title: "Certified Trainers", desc: "Professionally trained animal handlers" },
    { Icon: Heart, title: "Positive Reinforcement", desc: "No harm, stress-free learning methods" },
    { Icon: Users, title: "Owner Guidance", desc: "We train owners too for better results" },
  ];

  const trainingServices = [
    { Icon: Dog, title: "Dog Training", desc: "Obedience, aggression control, potty training, tricks, social skills" },
    { Icon: Cat, title: "Cat Behavior Training", desc: "Litter habits, anxiety reduction, indoor manners, bonding" },
    { Icon: Bird, title: "Bird Taming & Training", desc: "Hand training, voice commands, free flight basics, trust building" },
    { Icon: Dumbbell, title: "Fitness Training", desc: "Weight control, muscle building, and activity routines" },
    { Icon: Sparkles, title: "Trick & Fun Training", desc: "Learn playful tricks to boost mental stimulation" },
    { Icon: PawPrint, title: "Small Animal Training", desc: "Rabbits, hamsters, guinea pigs habit and engagement training" },
  ];

  return (
    <main className="flex flex-col">

      {/* Hero */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/services/training.jpg" alt="Animal Training" fill className="object-cover" />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-4 flex items-center gap-2">
              <GraduationCap className="w-7 h-7" /> Animal Training Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Carevra offers professional and compassionate animal training programs for pets, farm animals,
              and special behavior needs using science-backed, positive training methods.
            </p>

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

            <Link href="/booking">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-md font-bold px-6 py-4 rounded-xl shadow-md flex items-center gap-2">
                <PhoneCall className="w-5 h-5" /> Book Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 flex justify-center items-center gap-2">
            <GraduationCap className="w-7 h-7 text-teal-600" /> Training for Every Animal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trainingServices.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <t.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">{t.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex justify-center items-center gap-2">
            <Heart className="w-6 h-6 text-teal-600" /> Why Training is Essential?
          </h2>
          <p className="text-lg text-gray-600">
            Training improves behavior, communication, social confidence, emotional balance, mental stimulation,
            and creates a stronger bond between owners and animals.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 px-6 bg-teal-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600" /> Ethical & Safe Training
          </h3>
          <p className="text-sm text-gray-600">
            We use reward-based learning, non-violent methods, progress tracking, and behavior-focused sessions
            for a safe and happy learning experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <Sparkles className="w-6 h-6 text-teal-600" /> Help Your Animal Learn & Grow
          </h3>
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
              <PawPrint className="w-5 h-5" /> Start Training Today
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
