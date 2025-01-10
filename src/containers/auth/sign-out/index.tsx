'use client';

import { signout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const SignOut = () => {
  async function handleSignOut() {
    const result = await signout();

    if (result.success) {
      redirect("/sign-in");
    } else {
      console.error("Logout error:", result.error);
    }
  }

  return <Button
    onClick={handleSignOut}
  >Sign out</Button>;
};