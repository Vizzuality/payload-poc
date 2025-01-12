"use client";

import { useAuth } from "@/containers/auth/provider";

export const SignOut = () => {
  const auth = useAuth();

  async function handleSignOut() {
    const result = await auth.signout();

    if (!result) {
      console.error("Logout error");
    }
  }

  return <button onClick={handleSignOut}>Sign out</button>;
};
