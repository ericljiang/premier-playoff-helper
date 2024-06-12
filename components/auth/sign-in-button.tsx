"use client";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignInButton() {
  const [isLoading, setIsLoading] = useState(false);
  return <Button isLoading={isLoading} onClick={() => {
    signIn("riot-sign-on");
    setIsLoading(true);
  }}>
    Sign In
  </Button>;
}
