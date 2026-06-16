// src/components/Hero.tsx
import React from "react";
import { Item } from "../types/stone";

interface HeroProps {
  items: Item[];
  setOpen: React.Dispatch<React.SetStateAction<Item | null>>;
}

const Hero = ({ items, setOpen }: HeroProps) => {
  // Take the first 3 items as featured Rumis
  const featured = items.slice(0, 3);

  return (
    <section className="hero">
      <div className="hero-description">
        <p>
          Discover artisan‑crafted stones with verified provenance and
          transparent compliance.
        </p>
      </div>
      <div className="hero-grid">
        {featured.map((stone, idx) => (
          <div key={idx} className="hero-card">
            <div className="hero-image">🪨</div>
            <div className="hero-info">
              <h3>{stone?.name || "Featured stone"}</h3>
              <p>
                Origin: {stone?.properties.mining_concession || "—"} · Artisan:{" "}
                {stone?.attributes.find((a) => a.trait_type === "Artisan")
                  ?.value || "—"}{" "}
                · Cut:{" "}
                {stone?.attributes.find((a) => a.trait_type === "Stone Cut")
                  ?.value || "—"}
              </p>
              <div className="hero-actions">
                <button onClick={() => setOpen(stone)}>View Stone</button>
                <button>Buy with RUMI</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-cta">
        <button className="browse-btn">Browse Collection</button>
      </div>
    </section>
  );
};

export default Hero;
