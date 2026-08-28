import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import LoadingScreen from "@/pages/LoadingScreen/LoadingScreen";

export default function GuestRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
