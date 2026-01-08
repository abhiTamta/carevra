"use client";

import { useState } from "react";
import { UserPlus, Mail, Phone, Lock, ShieldCheck, Upload, Briefcase, MapPin, Truck, Camera, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProviderRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    serviceType: "",
    experience: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Provider Registration Data:", form);
  };

  return (
    <main className="px-5 py-10">
      

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-teal-600"/> Provider Registration
            </h2>

            {/* Input Fields */}
            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <UserPlus className="w-5 h-5 text-teal-600"/>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <Mail className="w-5 h-5 text-teal-600"/>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <Phone className="w-5 h-5 text-teal-600"/>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <Lock className="w-5 h-5 text-teal-600"/>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <Briefcase className="w-5 h-5 text-teal-600"/>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm bg-transparent"
              >
                <option value="">Select Provider Type</option>
                <option value="vet">Veterinary Doctor</option>
                <option value="groomer">Pet Groomer</option>
                <option value="boarding">Boarding Host / Shelter</option>
                <option value="daycare">Day Care Staff</option>
                <option value="transport">Pet Transport Partner</option>
                <option value="trainer">Animal Trainer</option>
                <option value="rescue">Rescue / NGO Partner</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <Truck className="w-5 h-5 text-teal-600"/>
              <input
                type="text"
                name="experience"
                placeholder="Experience (e.g., 3 years)"
                value={form.experience}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border p-3 rounded-xl">
              <MapPin className="w-5 h-5 text-teal-600"/>
              <input
                type="text"
                name="address"
                placeholder="Service Address / City"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Document Upload */}
            <div className="bg-white border p-4 rounded-xl space-y-3">
              <h3 className="text-md font-bold text-gray-900 flex items-center gap-2">
                <Upload className="w-5 h-5 text-teal-600"/> Upload Documents
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <FileCheck className="w-4 h-4"/> ID Proof
              </div>
              <input type="file" className="text-xs w-full"/>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4"/> Certificates
              </div>
              <input type="file" className="text-xs w-full"/>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Camera className="w-4 h-4"/> Service Portfolio
              </div>
              <input type="file" className="text-xs w-full"/>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
              <UserPlus className="w-5 h-5"/> Register as Provider
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By registering, you agree to Carevra's Terms & ethical animal care policy.
            </p>
          </form>
    </main>
  );
}
