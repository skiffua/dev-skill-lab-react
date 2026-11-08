'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, AUTH_STORAGE_KEY, DEMO_CREDENTIALS } from '@/lib/types/auth';

import { useAppDispatch } from '@/store/hooks';
import { loginUser, checkAuth } from '@/store/authSlice';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(() => {
    setIsLoading(() => true);
    if (typeof window === 'undefined') return null;

    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error('Error parsing stored user:', error);
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    } finally {
      setIsLoading(() => false);
    }
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Runs strictly once when the app loads in the browser
    dispatch(checkAuth());
  }, [dispatch]);

  const login = async (username: string, password: string): Promise<boolean> => {
    if (
      username === DEMO_CREDENTIALS.username &&
      password === DEMO_CREDENTIALS.password
    ) {
      const userData = DEMO_CREDENTIALS.user;
      setUser(userData);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));

      // Retrieve token
      await dispatch(loginUser({ userName: username }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
