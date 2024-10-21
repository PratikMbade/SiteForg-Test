import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const SocialLogin = () => {
  const onClick = () => {
    signIn("google", {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };


  return (
    <div className="w-full py-4">
      <Button onClick={onClick} variant="outline"  className="w-full">
        <FcGoogle />
      </Button>
    </div>
  );
};

export default SocialLogin;
