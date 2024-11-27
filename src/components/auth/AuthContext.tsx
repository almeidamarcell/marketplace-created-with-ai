import React, { createContext, useContext, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { authApi } from '../../services/api/auth';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
}>({
  isAuthenticated: false,
  isLoading: true,
  checkAuth: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useStore();
  const [isLoading, setIsLoading] = React.useState(true);

  const checkAuth = async () => {
    try {
      const currentUser = await authApi.getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: !!user, 
      isLoading,
      checkAuth 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);