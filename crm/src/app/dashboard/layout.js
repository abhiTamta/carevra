"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserNav from "@/components/userNav/UserNav";
import Notification from "@/components/notification/Notification";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      router.replace("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/admin/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          localStorage.removeItem("auth_token");
          router.replace("/");
          return;
        }

        const data = await res.json();
        setUser(data); // matches backend response
      } catch (error) {
        console.error(error);
        router.replace("/");
      }
    };

    fetchUser();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className={"bg-transparent"}>
          <header className="flex bg-white border-b h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="w-full flex justify-between">
              <div>serach form</div>
              <div className="flex gap-4">
                <Notification />
                <Notification />
                <UserNav />
              </div>
            </div>
          </header>
          <div className="flex items-center gap-2 py-2 px-4"></div>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
