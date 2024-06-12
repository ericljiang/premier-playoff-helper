"use client"

import { Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignIn() {
  const session = useSession();

  if (!session || session.status === "unauthenticated") {
    return <Button onClick={() => signIn("riot-sign-on")}>Sign In</Button>;
  }
  if (session.status === "loading") {
    return <Button isLoading={true} />;
  }
  if (session.data?.account) {
    const { gameName, tagLine } = session.data.account;
    return <Button onClick={() => signOut()}>{gameName}#{tagLine}</Button>;
  }
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
