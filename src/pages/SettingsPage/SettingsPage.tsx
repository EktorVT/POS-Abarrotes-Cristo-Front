import Button from "@/components/ui/Button/Button";
import { useAuth } from "@/context/AuthContext";

export default function SettingsPage() {
  const { logout } = useAuth();

  return (
    <div>
      SettingsPage
      <Button onClick={logout}>Cerrar sesión</Button>
    </div>
  );
}
