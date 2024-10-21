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
import { LoginSchema, RegisterSchema } from "@/schema";
import { FormError } from "../ui/form-error";
import { login } from "@/actions/login";
import { FormSuccess } from "../ui/form-success";
import { signup } from "@/actions/signup";
import SocialLogin from "./social-login";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export function SingupForm() {

  const [isPending,startTransition] = useTransition();
  const [error,setError] = useState<string | undefined>();
  const [success,setSuccess] = useState<string | undefined>();


  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
        name:"",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    startTransition(()=>{
      signup(values)
      .then((data)=>{
        setError(data.error);
        setSuccess(data.success)
      })
    })
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            Enter your name, email below to singup to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>


              <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="johndoe"
                          type="text"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
             { error &&   <FormError message={error}/>}
             {success && <FormSuccess message={success}/>}
               <div className="flex items-center justify-center">
               <Button type="submit"
                className="w-full"
                disabled={isPending}
                >
                Signup
              </Button>
               </div>
            </form>
          </Form>
          <SocialLogin/>
        </CardContent> 

        <CardFooter className="w-full flex items-center justify-center border">
        <Link href="/login">
        <Button type="button" variant="link">
          Already have an account
          </Button>
        </Link>
        </CardFooter>
      </Card>
    </div>
  );
}