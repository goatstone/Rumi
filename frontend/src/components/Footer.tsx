// src/components/Footer.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.home")}
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) =>
            isActive ? `${styles.footerLink} ${styles.active}` : styles.footerLink
          }
        >
          {t("nav.marketplace")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.about")}
        </NavLink>
        <NavLink
          to="/faqs"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.faqs")}
        </NavLink>
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.privacy")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.contact")}
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.admin")}
        </NavLink>
        <NavLink
          to="/compliance"
          className={({ isActive }) =>
            isActive
              ? `${styles.footerLink} ${styles.active}`
              : styles.footerLink
          }
        >
          {t("nav.compliance")}
        </NavLink>
      </div>
      <div className={styles.footerCopy}>{t("footer.copyright")}</div>
    </footer>
  );
};

export default Footer;
