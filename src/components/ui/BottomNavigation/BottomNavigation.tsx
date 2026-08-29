import { type ComponentProps } from "react";
import styles from "./BottomNavigation.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  BanknoteArrowDown,
  Home,
  Package,
  Settings,
  ShoppingCart
} from "lucide-react";

interface BottomNavigationProps extends ComponentProps<"nav"> {}

export default function BottomNavigation({
  className = "",
  ...props
}: BottomNavigationProps) {
  const { t } = useTranslation("common");
  return (
    <nav
      aria-label={t("navigation.label")}
      className={`${styles.nav} ${className}`}
      {...props}
    >
      <ul className={styles.ul}>
        <NavLink
          to="/design-system"
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          <Home />
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          <ShoppingCart />
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          <Package />
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          <BanknoteArrowDown />
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          <Settings />
        </NavLink>
      </ul>
    </nav>
  );
}
