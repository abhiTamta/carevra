import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavButton = ({isLoggedIn}) => {
  return (
    <div className={`flex flex-col px-5 gap-3 ${isLoggedIn ? "hidden" : "md:flex md:flex-row"}`}>
      <Link href="/login">
        <Button
          className={
            "w-full h-auto bg-teal-600 px-5 py-0 leading-9 mr-3 cursor-pointer font-semibold"
          }
        >
          Login
        </Button>
      </Link>

      <Link href="/registration">
        <Button
          className={
            "w-full h-auto bg-transparent border border-teal-600 text-teal-600 px-5 py-0 leading-9 mr-3 cursor-pointer font-semibold hover:bg-teal-600 hover:text-white"
          }
        >
          Registration
        </Button>
      </Link>
    </div>
  );
};

export default NavButton;
