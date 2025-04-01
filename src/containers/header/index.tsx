"use client";

import { useAuth } from "@/containers/auth/provider";
import { SignOut } from "@/containers/auth/sign-out";
import Link from "next/link";

export function Header() {
  const auth = useAuth();

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-2xl">Payload POC</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          {auth.user && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {auth.user && (
            <li>
              <SignOut />
            </li>
          )}

          {!auth.user && (
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
