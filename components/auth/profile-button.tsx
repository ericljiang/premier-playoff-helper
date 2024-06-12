"use client";
import { AvatarIcon, Button, User } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export function ProfileButton(props: { gameName?: string, tagLine?: string; }) {
  return <Button onClick={() => signOut()}>
    <User
      name={props.gameName ?? "???"}
      description={`#${props.tagLine ?? "???"}`}
      avatarProps={{
        fallback: <AvatarIcon />
      }}
    />
  </Button>;
}
