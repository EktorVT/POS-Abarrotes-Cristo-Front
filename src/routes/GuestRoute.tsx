import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import LoadingScreen from "@/pages/LoadingScreen/LoadingScreen";
import { getDefaultRoute } from "@/config/routes";

export default function GuestRoute() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated && user) {
    return <Navigate to={getDefaultRoute(user.role)} replace />;
  }

  return <Outlet />;
}
