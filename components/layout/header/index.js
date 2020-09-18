import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Container from "../container";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <a
        className={styles.logo}
        onClick={() => router.push("/")}
        className={styles.logo}
      >
        <img src="images/harrypotter.svg" height="40" alt="logo" />
      </a>
      <nav className={styles.nav}>
        <a
          className={styles.menuItem}
          onClick={() => router.push("/sorting-hat")}
        >
          Sorting Hat
        </a>
        <a
          className={styles.menuItem}
          onClick={() => router.push("/characters")}
        >
          Characters
        </a>
        <a className={styles.menuItem} onClick={() => router.push("/houses")}>
          Houses
        </a>
        <a className={styles.menuItem} onClick={() => router.push("/spells")}>
          Spels
        </a>
      </nav>
    </header>
  );
}

export default Header;
