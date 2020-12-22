import React from "react";
import styles from "./layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
