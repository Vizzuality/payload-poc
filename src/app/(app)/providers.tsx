"use client";

import { AuthProvider } from "@/containers/auth/provider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};
