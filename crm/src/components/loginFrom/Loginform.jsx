"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

export function LoginForm({ className, ...props }) {
  const [crmLogin, setCrmLogin] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const loginFormHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(crmLogin),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("auth_token", data.token);
        toast.promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              router.push("/dashboard");
            }, 2000);
          }),
          {
            loading: "Logging in...",
            success: "Login successful!",
            error: "Login failed. Please try again.",
          }
        );
      } else {
        setLoginError(data.message);
        toast.warning(loginError || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form onSubmit={loginFormHandler} className={cn("", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm ">
            Enter your email below to login to your account
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="username">Email</FieldLabel>
          <Input
            onChange={(e) =>
              setCrmLogin({ ...crmLogin, username: e.target.value })
            }
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
          </div>
          <Input
            onChange={(e) =>
              setCrmLogin({ ...crmLogin, password: e.target.value })
            }
            id="password"
            type="password"
            required
          />
        </Field>

        <Field>
          <Button type="submit">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
