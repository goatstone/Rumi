// src/components/Pager.tsx
import React from "react";
import styles from "./Pager.module.css";

interface PagerProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({ page, totalPages, setPage }) => {
  if (totalPages <= 1) return null; // show nothing if only one page

  return (
    <div className={styles.paging}>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={styles.navButton}
      >
        Previous
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
        Next
      </button>
    </div>
  );
};

export default Pager;
