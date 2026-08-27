import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from "react";
import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "@/types/auth";
import { login as loginRequest } from "@/services/auth/auth.service";

interface AuthContextType {
  user: JwtPayload | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<JwtPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    try {
      const decodedUser = jwtDecode<JwtPayload>(storedToken);

      if (decodedUser.exp * 1000 < Date.now()) {
        localStorage.removeItem("access_token");
        setIsLoading(false);
        return;
      }
      setToken(storedToken);
      setUser(decodedUser);
    } catch (error) {
      console.error("invalid token: ", error);

      localStorage.removeItem("access_token");
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    const response = await loginRequest({
      username,
      password
    });

    const accessToken = response.access_token;

    const decodedUser = jwtDecode<JwtPayload>(accessToken);

    localStorage.setItem("access_token", accessToken);

    setToken(accessToken);
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: token !== null,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
