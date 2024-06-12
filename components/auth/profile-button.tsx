"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export const ProfileButton = (props: { gameName?: string, tagLine?: string; }) =>
  <Dropdown>
    <DropdownTrigger>
      <Button className="flex flex-col gap-0">
        <p>{props.gameName ?? "???"}</p>
        <p className="text-tiny text-foreground-600">{`#${props.tagLine ?? "???"}`}</p>
      </Button>
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownItem onPress={() => signOut()}>
        Sign Out
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>;
