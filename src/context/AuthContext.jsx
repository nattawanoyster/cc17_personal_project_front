import { useState, useEffect, createContext } from "react";
import authApi from "../api/auth-api";
import {
  removeAccessToken,
  setAccessToken,
  getAccessToken,
} from "../utility/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const initializeAuthUser = async () => {
      const token = getAccessToken();
      if (token) {
        try {
          const resGetAuthUser = await authApi.getAuthUser();
          setAuthUser(resGetAuthUser.data.user);
        } catch (error) {
          console.error("Error fetching authenticated user:", error);
          removeAccessToken();
        }
      }
    };

    initializeAuthUser();
  }, []);

  const login = async (credentials) => {
    const res = await authApi.login(credentials);
    setAccessToken(res.data.accessToken);
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
