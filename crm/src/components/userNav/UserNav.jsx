import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellDot, LogOut, ReceiptIndianRupee, ShieldUser } from "lucide-react";
const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage
            src={
              "https://crms.dreamstechnologies.com/nextjs/template/assets/img/users/user-40.jpg"
            }
            alt={"abhinay"}
          />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={
                  "https://crms.dreamstechnologies.com/nextjs/template/assets/img/users/user-40.jpg"
                }
                alt={"abhinay"}
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{"abhinay"}</span>
              <span className="text-muted-foreground truncate text-xs">
                {"abhinay.tamta@hotmaial.com"}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ShieldUser />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReceiptIndianRupee />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellDot />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
