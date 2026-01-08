import { Loginform } from "@/components/login/Loginform";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md px-4">
        <Loginform />
      </div>
    </div>
  );
}
