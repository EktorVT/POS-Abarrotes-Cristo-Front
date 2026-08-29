import { type ComponentProps } from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps extends ComponentProps<"aside"> {}

export default function Sidebar({ className = "", ...props }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${className}`} {...props}>
      Sidebar
    </aside>
  );
}
