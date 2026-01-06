import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Loginform = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="w-full md:w-4/12">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <Input
                type={"Password"}
                id="userPassword"
                name="userPassword"
                defaultValue=""
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                type="submit"
                className={
                  "w-full bg-teal-600 text-white hover:bg-teal-950 hover:text-white cursor-pointer"
                }
              >
                Submit
              </Button>
            </DialogClose>
            <div className="mt-5">
              <Button className={"w-full bg-teal-950 text-white hover:bg-teal-600 hover:text-white cursor-pointer"}>Login with Google</Button>
            <div className="text-center mt-3">Don&apos;t have an account? <a href="#">Sign up</a></div>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Loginform;
