// src/components/NavBar.tsx
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.siteNav}>
      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        {t("nav.marketplace")}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        {t("nav.about")}
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        {t("nav.home")}
      </NavLink>
    </nav>
  );
};

export default NavBar;
