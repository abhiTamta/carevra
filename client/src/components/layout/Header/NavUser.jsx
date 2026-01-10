import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, EllipsisVertical, LogOut, ReceiptText, UsersRound } from "lucide-react";

const NavUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 px-0 lg:px-3 py-2 border border-transparent hover:border-gray-300 rounded-lg cursor-pointer">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={"./dummy_avtar.png"} alt={"User Name"} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="hidden md:grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Abhinay</span>
            <span className="text-muted-foreground truncate text-xs">
              abhinay.tamta@gmail.com
            </span>
          </div>
          <EllipsisVertical className="ml-auto size-4 hidden md:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal md:hidden">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{"Abhinay Tamta"}</span>
              <span className="text-muted-foreground truncate text-xs">
                {"abhinay.tamta@gmail.com"}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className={"cursor-pointer"}><UsersRound />Account</DropdownMenuItem>
          <DropdownMenuItem className={"cursor-pointer"}><ReceiptText />Billing</DropdownMenuItem>
          <DropdownMenuItem className={"cursor-pointer"}><Bell />Notifications</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"cursor-pointer"}><LogOut />Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavUser;
