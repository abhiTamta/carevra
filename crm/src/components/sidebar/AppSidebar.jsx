import * as React from "react";
import { ChevronRight, PawPrint } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import data from "../../lib/sidebarmenu";

/* 🔵 Dot component (icon fallback) */
const Dot = () => (
  <span className="h-2 w-2 rounded-full bg-muted-foreground" />
);

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* HEADER */}
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg">
                  <PawPrint className="size-4" />
                </div>
                <span className="font-bold uppercase text-lg">
                  Carevra
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.masterAdminMenu.map((item) => {
              const Icon = item.icon;
              const hasSubMenu =
                Array.isArray(item.subMenuItem) &&
                item.subMenuItem.length > 0;

              /* ===============================
                 CASE 1: NO SUBMENU (NO COLLAPSIBLE)
                 =============================== */
              if (!hasSubMenu) {
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link
                        href={item.url}
                        className="flex items-center gap-2"
                      >
                        {Icon ? item.icon : <Dot />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              /* ===============================
                 CASE 2: HAS SUBMENU (COLLAPSIBLE)
                 =============================== */
              return (
                <Collapsible
                  key={item.id}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {Icon ? item.icon : <Dot />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subMenuItem.map((subItem) => {
                          const SubIcon = subItem.icon;

                          return (
                            <SidebarMenuSubItem
                              key={subItem.id}
                            >
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className="flex items-center gap-2"
                                >
                                  {SubIcon ? (
                                    <SubIcon className="size-4" />
                                  ) : (
                                    <Dot />
                                  )}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
