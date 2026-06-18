// src/components/MarketplaceCard.tsx
import React from "react";
import { Rumi } from "../types/rumi";
import styles from "./MarketplaceCard.module.css";

interface MarketplaceCardProps {
  item: Rumi;
  onClick: (item: Rumi) => void;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ item, onClick }) => {
  const cut = item.attributes.find((a) => a.trait_type === "Stone Cut")?.value;
  const type = item.attributes.find(
    (a) => a.trait_type === "Stone Type",
  )?.value;
  const mountedBy = item.attributes.find(
    (a) => a.trait_type === "Mounted By",
  )?.value;

  return (
    <div className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.thumb}>🪨</div>
      <div className={styles.meta}>
        <h3 className={styles.type}>{type}</h3>
        {cut && <span className={styles.badge}>{cut}</span>}{" "}
        {mountedBy && (
          <p className={styles.mountedBy}>
            <span className={styles.label}>Mounted by:</span> {mountedBy}
          </p>
        )}
      </div>
    </div>
  );
};

export default MarketplaceCard;
