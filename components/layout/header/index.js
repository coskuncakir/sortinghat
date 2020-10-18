import React from "react";
import styles from "./header.module.scss";
import Logo from "../../logo";
import Hamburger from "hamburger-react";
import cn from "classnames";
import Link from "../../link";

function Header() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <header className={cn(styles.header, isOpen ? styles.open : null)}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/sorting-hat" activeClassName={styles.active}>
                <a>Sorting Hat</a>
              </Link>
            </li>
            <li>
              <Link href="/characters" activeClassName={styles.active}>
                <a>Characters</a>
              </Link>
            </li>
            <li>
              <Link href="/houses" activeClassName={styles.active}>
                <a>Houses</a>
              </Link>
            </li>
            <li>
              <Link href="/spells" activeClassName={styles.active}>
                <a>Spells</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
