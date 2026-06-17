// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerLinks}>
        <a href="/" className={styles.footerLink}>Home</a>
        <a href="/about" className={styles.footerLink}>About</a>
        <a href="/faqs" className={styles.footerLink}>FAQs</a>
        <a href="/privacy" className={styles.footerLink}>Privacy & Cookies</a>
        <a href="/contact" className={styles.footerLink}>Contact</a>
        <a href="/admin" className={styles.footerLink}>Admin NFT</a>
        <a href="/compliance" className={styles.footerLink}>Compliance Dashboard</a>
      </div>
      <div className={styles.footerCopy}>
        © 2026 Rumi Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
