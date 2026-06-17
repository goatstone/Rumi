// src/components/Header.tsx
import React from "react";
import NavBar from "./NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.brand}>
        <div className={styles.brandRow}>
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Rumi Logo"
            className={styles.logo}
          />
          <div className={styles.brandText}>
            <h1>Rumi</h1>
            <p className={styles.tagline}>
              Automating compliance, illuminating provenance.
            </p>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
