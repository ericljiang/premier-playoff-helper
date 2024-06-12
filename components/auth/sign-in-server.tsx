import { ProfileButton } from "./profile-button";
import { SignInButton } from "./sign-in-button";
import { auth } from "@/auth";

export async function SignIn() {
  const session = await auth();

  if (!session) {
    return <SignInButton />;
  }
  const { gameName, tagLine } = session.account ?? {};
  return <ProfileButton gameName={gameName} tagLine={tagLine} />;
}
