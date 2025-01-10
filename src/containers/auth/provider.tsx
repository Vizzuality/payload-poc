import { asignin, asignout, SignInProps } from "@/actions/auth";
import { User } from "@/payload-types";
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

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const signin = useCallback(async (props: SignInProps) => {
    const user = await asignin(props);
    setUser(user);

    return user;
  }, []);

  const signout = useCallback(async () => {
    const result = await asignout();

    setUser(null);
    return result;
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
