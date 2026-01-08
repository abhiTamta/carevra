"use client";
import { AlarmClockCheck, MailIcon, PhoneCall } from "lucide-react";
const currentDate = new Date();
function TopHeader() {
  return (
    <div className="w-full bg-cyan-900 py-3 hidden md:block px-5 xl:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-1.5 text-white items-center text-mdont-semibold">
          <AlarmClockCheck className="w-5 h-5" />
          {currentDate.toDateString()}
        </div>
        <div className="flex gap-6 text-white items-center">
          <div className="flex gap-1.5 items-center text-md font-semibold">
            <MailIcon className="w-4 h-4" />
            <span>carevra@gmail.com</span>
          </div>
          <div className="flex gap-1.5 items-center text-md font-semibold">
            <PhoneCall className="w-4 h-4" />
            <span> +91 9876543210</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
