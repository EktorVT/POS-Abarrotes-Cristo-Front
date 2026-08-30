import { type ComponentProps } from "react";
import styles from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  BanknoteArrowDown,
  Home,
  Package,
  Settings,
  ShoppingCart
} from "lucide-react";

interface SidebarProps extends ComponentProps<"aside"> {}

export default function Sidebar({ className = "", ...props }: SidebarProps) {
  const { t } = useTranslation("common");
  return (
    <aside className={`${styles.sidebar} ${className}`} {...props}>
      <nav
        aria-label={t("navigation.label")}
        className={`${styles.nav} ${className}`}
        {...props}
      >
        <ul className={styles.ul}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <Home />
            <span>{t("navigation.home")}</span>
          </NavLink>
          <NavLink
            to="/sale"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <ShoppingCart />
            <span>{t("navigation.sale")}</span>
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <Package />
            <span>{t("navigation.inventory")}</span>
          </NavLink>
          <NavLink
            to="/earnings"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <BanknoteArrowDown />
            <span>{t("navigation.earnings")}</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <Settings />
            <span>{t("navigation.settings")}</span>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}
