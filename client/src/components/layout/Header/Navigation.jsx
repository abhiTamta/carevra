"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../../ui/button";
import {
  Car,
  Dog,
  HeartPulse,
  Home,
  Menu,
  Minus,
  Plus,
  Scissors,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <nav className="h-auto flex gap-2">
      <NavigationMenu className={"hidden md:block"}>
        <NavigationMenuList className="flex-wrap uppercase font-semibold">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={"uppercase font-semibold"}>
              Pet Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-50 gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/vet"
                      className="flex flex-row items-center gap-2"
                    >
                      <Stethoscope className="w-4 h-4" />
                      Vet on Call
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/vaccination"
                      className="flex flex-row items-center gap-2"
                    >
                      <Syringe className="w-4 h-4" />
                      Vaccination
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/grooming"
                      className="flex flex-row items-center gap-2"
                    >
                      <Scissors className="w-4 h-4" />
                      Grooming
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/boarding"
                      className="flex flex-row items-center gap-2"
                    >
                      <Home className="w-4 h-4" />
                      Boarding
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/daycare"
                      className="flex flex-row items-center gap-2"
                    >
                      <Dog className="w-4 h-4" />
                      Day Care
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/training"
                      className="flex flex-row items-center gap-2"
                    >
                      <HeartPulse className="w-4 h-4" />
                      Training
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/pettransport"
                      className="flex flex-row items-center gap-2"
                    >
                      <Car className="w-4 h-4" />
                      Pet Transport
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/insuranceassistance"
                      className="flex flex-row items-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Insurance Assistance
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger className={"block md:hidden"}>
          <Menu className="w-6 h-6" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className={"bg-cyan-900 text-inherit"}>
            <SheetTitle className={"text-white uppercase font-bold"}>
              Menu
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col">
            <li className="border-b px-5 py-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                Home
              </Link>
            </li>

            <li className="border-b px-5 py-2">
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                About
              </Link>
            </li>

            <li className="border-b px-5 py-2">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={accordionOpen ? "services" : ""}
                onValueChange={() => setAccordionOpen(!accordionOpen)}
              >
                <AccordionItem value="services">
                  <AccordionTrigger className="flex justify-between w-full font-semibold">
                    <span className="flex items-center">Pet Services</span>
                    {accordionOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </AccordionTrigger>

                  <AccordionContent>
                    <ul className="flex flex-col pt-3">
                      <li className="py-2 border-t">
                        <Link
                          href="/vet"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Stethoscope className="w-4 h-4" /> Vet on Call
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/vaccination"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Syringe className="w-4 h-4" /> Vaccination
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/grooming"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Scissors className="w-4 h-4" /> Grooming
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/boarding"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Home className="w-4 h-4" /> Boarding
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/daycare"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Dog className="w-4 h-4" /> Day Care
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/training"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <HeartPulse className="w-4 h-4" /> Training
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/pet-transport"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <Car className="w-4 h-4" /> Pet Transport
                        </Link>
                      </li>
                      <li className="py-2 border-t">
                        <Link
                          href="/insurance"
                          onClick={() => setOpen(false)}
                          className="menu-link flex gap-2 items-center"
                        >
                          <ShieldCheck className="w-4 h-4" /> Insurance
                          Assistance
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            <li className="border-b px-5 py-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="px-5 mt-5 flex flex-col gap-2">
            <Button variant="outline">Login</Button>
            <Button variant="outline">Become a Provider</Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:block">
        <Button className={"h-auto bg-teal-600 px-5 py-1.5 mr-3 cursor-pointer font-semibold"}>Login</Button>
        <Button className={"h-auto bg-transparent border border-teal-600 text-teal-600 px-5 py-1.5 mr-3 cursor-pointer font-semibold hover:bg-teal-600 hover:text-white"}>Become a Provider</Button>
      </div>
    </nav>
  );
};

export default Navigation;
