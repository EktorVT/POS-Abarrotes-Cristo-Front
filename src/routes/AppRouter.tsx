import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import DesignSystemPage from "@/pages/DesignSystem/DesignSystemPage";
import Login from "@/pages/Login/Login";
import GuestRoute from "./GuestRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={<Navigate to="/design-system" replace />}
          ></Route>
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}></Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
