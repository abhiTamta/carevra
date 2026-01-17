"use client";

import { LoginForm } from "@/components/loginFrom/Loginform";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      router.replace("/dashboard");
      return;
    }
  });
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-teal-950">
      <div className="bg-white p-10 rounded-lg shadow-lg w-3/12">
        <LoginForm />
      </div>
    </div>
  );
}
