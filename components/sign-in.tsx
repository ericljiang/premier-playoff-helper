import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export function SignIn() {
  return <Button onClick={() => signIn("riot-sign-on")}>Sign In</Button>;
}
