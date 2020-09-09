import styles from "./styles.module.css";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
