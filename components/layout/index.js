import styles from "./layout.module.scss";
import Header from "./header";
import Container from "./container";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </>
  );
}

export default Layout;
