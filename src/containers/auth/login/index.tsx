import { LoginForm } from "@/containers/auth/login/form"

export const Login = () => {
  return (
    <div className="min-w-96 space-y-8">
      <h1 className="text-2xl">Login</h1>
      <LoginForm />
    </div>
  );
};