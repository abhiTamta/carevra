"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User } from "lucide-react";
import UserRegistration from "./UserRegistration";
import ProviderRegistration from "./ProviderRegistration";


// Dummy components (replace with your real ones)
const UserRegistrationForm = () => <UserRegistration />;
const ProviderRegistrationForm = () => <ProviderRegistration />;

export const RegisterCard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="w-full">
      {activeComponent === null && (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6 w-full max-w-2xl">
          {/* User Registration Card */}
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <User className="w-12 h-12 mb-4 text-gray-700" />
              <h2 className="text-xl font-semibold mb-2">Register as User</h2>
              <p className="text-sm text-gray-500 mb-4">
                Create an account to access services, book appointments and more.
              </p>
              <Button
                className="w-full hover:scale-[1.02] transition cursor-pointer"
                onClick={() => setActiveComponent("user")}
              >
                User Registration
              </Button>
            </CardContent>
          </Card>

          {/* Provider Registration Card */}
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Briefcase className="w-12 h-12 mb-4 text-gray-700" />
              <h2 className="text-xl font-semibold mb-2">Register as Service Provider</h2>
              <p className="text-sm text-gray-500 mb-4">
                Join our platform to offer services and grow your business.
              </p>
              <Button
                className="w-full hover:scale-[1.02] transition cursor-pointer"
                onClick={() => setActiveComponent("provider")}
              >
                Service Provider Registration
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Component Switcher */}
      <div className="mt-6 max-w-4xl mx-auto">
        {activeComponent === "user" && <UserRegistrationForm />}
        {activeComponent === "provider" && <ProviderRegistrationForm />}
      </div>
    </div>
  );
};
