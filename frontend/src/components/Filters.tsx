// src/components/Filters.tsx
import React from "react";
import styles from "./Filters.module.css";

interface FiltersProps {
  filters: {
    type: string;
    types: string[];
    cut: string;
    cuts: string[];
    mounted: string;
  };
  setFilters: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => (
  <section className={styles.filters}>
    <label className={styles.label}>
      Type:
      <select
        className={styles.select}
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">All</option>
        {filters.types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </label>

    <label className={styles.label}>
      Cut:
      <select
        className={styles.select}
        value={filters.cut}
        onChange={(e) => setFilters({ ...filters, cut: e.target.value })}
      >
        <option value="">All</option>
        {filters.cuts.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </label>

    <label className={styles.label}>
      Mounted:
      <select
        className={styles.select}
        value={filters.mounted}
        onChange={(e) => setFilters({ ...filters, mounted: e.target.value })}
      >
        <option value="">All</option>
        <option value="true">Mounted</option>
        <option value="false">Unmounted</option>
      </select>
    </label>
  </section>
);

export default Filters;
