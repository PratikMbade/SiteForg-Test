"use client";
import Link from "next/link";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schema";
import { FormError } from "../ui/form-error";
import { login } from "@/actions/login";
import { FormSuccess } from "../ui/form-success";
import SocialLogin from "./social-login";
import { useSearchParams } from "next/navigation";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export function LoginForm() {

  const [isPending,startTransition] = useTransition();
  const [error,setError] = useState<string | undefined>();
  const [success,setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const urlError = searchParams && searchParams.get("error") === "OAuthAccountNotLinked"
  ? "Email already in use with another provider"
  : "";


  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values:z.infer<typeof LoginSchema>)=>{
    startTransition(() => {
      login(values)
          .then((data) => {
              console.log("data", data);

              // Set the error or success based on the response
              if (data?.error) {
                  setError(data.error);
                  setSuccess(undefined); // Reset success if there's an error
              } else if (data?.success) {
                  setError(undefined); // Reset error if there's a success
                  setSuccess(data?.success);
              }
          })
          .catch((err) => {
              // Handle any unexpected errors here
              console.error("Unexpected error:", err);
              setError("Something went wrong. Please try again.");
              setSuccess(undefined);
          });
  });
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="johndoe@example.com"
                          type="email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
             { error || urlError  &&   <FormError message={error || urlError}/>}
             {success && <FormSuccess message={success}/>}
               <div className="flex items-center justify-center">
               <Button type="submit"
                className="w-full"
                disabled={isPending}
                >
                Login
              </Button>
               </div>
            </form>
          </Form>
          <SocialLogin/>
        </CardContent>

        <CardFooter className="w-full flex items-center justify-center ">
        <Link href="/signup">
        <Button type="button" variant="link">
          don't have an account
          </Button>
        </Link>
        </CardFooter>
      </Card>
    </div>
  );
}