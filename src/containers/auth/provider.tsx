import { createContext, PropsWithChildren } from "react";

const Context = createContext({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
