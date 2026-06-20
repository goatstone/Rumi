// src/components/Hero.tsx
import React, { useState } from "react";
import { Rumi } from "../types/rumi";
import { RumiFacade } from "../data/RumiFacade";
import Card from "./Card";
import StoneModal from "./StoneModal";
import styles from "./Hero.module.css";

const Hero = () => {
  const [open, setOpen] = useState<Rumi | null>(null);
  const featured = RumiFacade.fromJSON().getFeatured(3);

  return (
    <section className={styles.hero}>
      <div className={styles.heroDescription}>
        <p>
          In Quechua, <b>Umiña</b> means a single precious stone, while{" "}
          <b>Achala</b> means jewelry crafted from many stones.
        </p>
        <p>
          <b>Umiña Achala</b> unites Peru’s stones, minerals and jewelry with
          immutable records, authentic origins, and artisan storytelling. Every
          piece is traced from mine to craft, ensuring compliance, provenance,
          and cultural heritage.
        </p>
      </div>
      <div className={styles.heroGrid}>
        {featured.map((rumi) => (
          <Card key={rumi.properties.stone_id} item={rumi} onClick={setOpen} />
        ))}
      </div>
      <StoneModal open={open} setOpen={setOpen} />
      <section className={styles.heroCta}>
        <a href="/marketplace" className={styles.browseBtn}>
          Browse Marketplace
        </a>
      </section>
    </section>
  );
};

export default Hero;
