import { asignin, asignout, SignInProps } from "@/actions/auth";
import { User } from "@/payload-types";
import { redirect } from "next/navigation";
import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";

type AuthContextProps = {
  user: User | null;
  signin: (props: SignInProps) => Promise<User | null>;
  signout: () => Promise<boolean>;
};

const Context = createContext<AuthContextProps>({
  user: null,
  signin: async () => null,
  signout: async () => false,
});

export const AuthProvider = ({
  children,
  initialUser,
}: PropsWithChildren<{
  initialUser: User | null;
}>) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const signin = useCallback(async (props: SignInProps) => {
    const user = await asignin(props);
    setUser(user);

    if (user) {
      redirect("/sign-in");
    }

    return user;
  }, []);

  const signout = useCallback(async () => {
    await asignout();

    setUser(null);

    redirect(window.location.origin + window.location.pathname);
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        signin,
        signout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
