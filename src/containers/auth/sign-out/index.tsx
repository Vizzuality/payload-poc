"use client";

import { signout } from "@/actions/auth";
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

  return <button onClick={handleSignOut}>Sign out</button>;
};
