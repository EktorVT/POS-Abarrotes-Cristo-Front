import LangMenu from "../LangMenu/LangMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <h3>Abarrotes Cristo </h3>
      <LangMenu />
    </header>
  );
}
