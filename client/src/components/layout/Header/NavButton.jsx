import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NavButton = () => {
  return (
    <>
      <Link href="/login">
        <Button
          className={
            "h-auto bg-teal-600 px-5 py-0 leading-9 mr-3 cursor-pointer font-semibold"
          }
        >
          Login
        </Button>
      </Link>

      <Link href="/registration">
        <Button
          className={
            "h-auto bg-transparent border border-teal-600 text-teal-600 px-5 py-0 leading-9 mr-3 cursor-pointer font-semibold hover:bg-teal-600 hover:text-white"
          }
        >
          Registration
        </Button>
      </Link>
    </>
  );
};

export default NavButton;
