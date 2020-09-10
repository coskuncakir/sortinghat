import styles from "./styles.module.css";
import { useRouter } from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

function Header() {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          color="inherit"
          onClick={() => router.push("/")}
          className={styles.logo}
        >
          Harry Potter
        </Link>

        <Button color="inherit" onClick={() => router.push("/sorting-hat")}>
          Sorting Hat
        </Button>

        <Button color="inherit" onClick={() => router.push("/characters")}>
          Characters
        </Button>

        <Button color="inherit" onClick={() => router.push("/houses")}>
          Houses
        </Button>

        <Button color="inherit" onClick={() => router.push("/spells")}>
          Spels
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
