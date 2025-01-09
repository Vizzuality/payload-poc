'use client';

import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const Logout = () => {
  async function handleLogout() {
    const result = await logout();

    if (result.success) {
      redirect("/login");
    } else {
      console.error("Logout error:", result.error);
    }
  }

  return <Button
    onClick={handleLogout}
  >Logout</Button>;
};