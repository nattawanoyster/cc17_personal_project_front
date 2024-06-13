import { useState } from "react";
import { createContext } from "react";
import authApi from "../api/auth-api";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const login = (credentials) => {
    authApi.login(credentials);
  };

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ login: login }}>
      {children}
    </AuthContext.Provider>
  );
}
