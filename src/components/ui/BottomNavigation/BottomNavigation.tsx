import { type ComponentProps } from "react";
import styles from "./BottomNavigation.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { navigationItems } from "@/config/navigation";

interface BottomNavigationProps extends ComponentProps<"nav"> {}

export default function BottomNavigation({
  className = "",
  ...props
}: BottomNavigationProps) {
  const { t } = useTranslation("common");
  const { user } = useAuth();

  const visibleItems = navigationItems.filter(
    (item) => user && item.roles.includes(user.role)
  );

  return (
    <nav
      aria-label={t("navigation.label")}
      className={`${styles.nav} ${className}`}
      {...props}
    >
      <ul className={styles.ul}>
        {visibleItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.item} ${isActive ? styles.active : ""}`
                }
              >
                <Icon />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
