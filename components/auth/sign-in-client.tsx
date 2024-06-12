"use client";
import { SignOutButton } from "./sign-out-button";
import { ProfileButton } from "./profile-button";
import { SignInButton } from "./sign-in-button";
import { useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";

export function SignIn() {
  const session = useSession();

  if (!session) {
    return <SignInButton />;
  }
  if (session.status === "loading") {
    return <Button isLoading={true} />;
  }
  if (session.data?.account) {
    const { gameName, tagLine } = session.data.account;
    return <ProfileButton gameName={gameName} tagLine={tagLine} />;
  }
  return <SignOutButton />;
}
