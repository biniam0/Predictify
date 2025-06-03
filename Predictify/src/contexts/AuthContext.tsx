// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from "react";
import authClient from "../lib/auth-clients"; // Ensure this exists and is configured

type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
  image: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data: session } = await authClient.getSession({
        fetchOptions: { credentials: "include" },
      });
      setUser(
        session?.user
          ? {
              ...session.user,
              image: session.user.image ?? "",
            }
          : null
      );
    } catch (error) {
      console.error("Failed to fetch user session", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authClient.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refresh: fetchUser,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
