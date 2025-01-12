import { ame } from "@/actions/auth";
import { SignIn } from "@/containers/auth/sign-in";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const user = await ame();

  if (user) {
    redirect("/profile");
  }

  return (
    <main className="flex h-svh flex-col items-center justify-center gap-8">
      <SignIn />
    </main>
  );
}
