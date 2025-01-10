import { me } from "@/actions/auth";
import { SignOut } from "@/containers/auth/sign-out";
import Link from "next/link";

export async function Header() {
  const user = await me();

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          {!!user && (
            <li>
              <SignOut />
            </li>
          )}

          {!user && (
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
