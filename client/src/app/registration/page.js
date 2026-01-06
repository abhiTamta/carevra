"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User } from "lucide-react";

const page = () => {
  return (
    <main className="flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-teal-600 mb-3 text-center">
          Carevra Registration
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
          Register as a trusted animal service provider and grow your business
          with verified onboarding and secure records.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6 w-full max-w-2xl">
          {/* User Registration Card */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="flex flex-col items-center text-center p-6">
              <User className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Register as User</h2>
              <p className="text-sm text-gray-500 mb-4">
                Create an account to access services, book appointments and
                more.
              </p>
              <Button className="w-full">User Registration</Button>
            </CardContent>
          </Card>

          {/* Service Provider Registration Card */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Briefcase className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Register as Service Provider
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Join our platform to offer services and grow your business.
              </p>
              <Button className="w-full">Service Provider Registration</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
