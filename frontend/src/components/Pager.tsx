// src/components/Pager.tsx
import React from "react";
import styles from "./Pager.module.css";
import { useTranslation } from "react-i18next";

interface PagerProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({ page, totalPages, setPage }) => {
  const { t } = useTranslation();
  if (totalPages <= 1) return null; // show nothing if only one page

  return (
    <div className={styles.paging}>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={styles.navButton}
      >
        {t("pager.previous")}
      </button>

      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
          <button
            key={num}
            className={num === page ? styles.activePage : styles.pageButton}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={styles.navButton}
      >
        {t("pager.next")}
      </button>
    </div>
  );
};

export default Pager;
