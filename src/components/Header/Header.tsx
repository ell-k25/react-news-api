import { useContext } from "react";
import { themeIcon } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        {" "}
        <h1 className={styles.title}>NEWS OLOLOLO</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <div className="">
        <img
          src={isDark ? themeIcon.light : themeIcon.dark}
          width={30}
          alt="theme"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
