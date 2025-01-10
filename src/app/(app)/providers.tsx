"use client";

import { AuthProvider } from "@/containers/auth/provider";
import { User } from "@/payload-types";
import { PropsWithChildren } from "react";

export const Providers = ({
  children,
  user,
}: PropsWithChildren<{
  user: User | null;
}>) => {
  return <AuthProvider initialUser={user}>{children}</AuthProvider>;
};
