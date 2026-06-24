// src/components/Header.tsx
import React from "react";
import NavBar from "./NavBar";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language?.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
  };

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
            <h1>{t("site.title")}</h1>
            <p className={styles.tagline}>
              <b>{t("site.tagline")}</b>
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button onClick={toggleLanguage} className={styles.langButton}>
          {i18n.language?.startsWith("es") ? "EN" : "ES"}
        </button>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
