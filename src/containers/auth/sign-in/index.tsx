import { SignInForm } from "@/containers/auth/sign-in/form";

export const SignIn = () => {
  return (
    <div className="min-w-96 space-y-8">
      <h1 className="text-2xl">Sign in</h1>
      <SignInForm />
    </div>
  );
};
