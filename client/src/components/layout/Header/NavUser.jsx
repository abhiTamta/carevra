import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsDown } from "lucide-react";


const NavUser = () => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 border border-transparent hover:border-gray-300 rounded-lg cursor-pointer">
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={"./dummy_avtar.png"} alt={"User Name"} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">Abhinay</span>
        <span className="text-muted-foreground truncate text-xs">
          abhinay.tamta@gmail.com
        </span>
      </div>
      <ChevronsDown className="ml-auto size-4" />
    </div>
  );
};

export default NavUser;
