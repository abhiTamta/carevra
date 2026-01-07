"use client";
import { RegisterCard } from "@/components/registration/RegisterCard";

const Page = () => {
  return (
    <main className="w-full py-10 px-5">
      <h1 className="text-3xl font-extrabold text-teal-600 mb-3 text-center">
        Carevra Registration
      </h1>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Register as a trusted animal service provider and grow your business
        with verified onboarding and secure records.
      </p>
      <RegisterCard />
    </main>
  );
};

export default Page;
