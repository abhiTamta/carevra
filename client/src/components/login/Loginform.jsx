import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Loginform = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Login In</DialogTitle>
            <DialogDescription>
              Enter your user details to login to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="userDetail">User Name / Email / Phone</Label>
              <Input id="userDetail" name="user" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="userPassword">Password</Label>
              <Input type={"Password"} id="userPassword" name="userPassword" defaultValue="" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="submit" className={"w-full bg-teal-600 text-white hover:bg-teal-950 hover:text-white"}>Submit</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Loginform;
