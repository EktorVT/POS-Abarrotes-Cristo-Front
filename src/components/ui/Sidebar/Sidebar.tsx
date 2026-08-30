import { type ComponentProps } from "react";
import styles from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import { NavLink } from "react-router-dom";
import { navigationItems } from "@/config/navigation";

interface SidebarProps extends ComponentProps<"aside"> {}

export default function Sidebar({ className = "", ...props }: SidebarProps) {
  const { t } = useTranslation("common");
  const { user } = useAuth();

  const visibleItems = navigationItems.filter(
    (item) => user && item.roles.includes(user.role)
  );

  return (
    <aside className={`${styles.sidebar} ${className}`} {...props}>
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
                  <span>{t(item.label)}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
