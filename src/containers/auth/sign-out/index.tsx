"use client";

import { useAuth } from "@/containers/auth/provider";
import { redirect } from "next/navigation";

export const SignOut = () => {
  const auth = useAuth();

  async function handleSignOut() {
    const result = await auth.signout();

    if (result) {
      redirect("/sign-in");
    } else {
      console.error("Logout error");
    }
  }

  return <button onClick={handleSignOut}>Sign out</button>;
};
