// src/components/Hero.tsx
import React from "react";
import { Item } from "../types/stone";

interface HeroProps {
  items: Item[];
  setOpen: React.Dispatch<React.SetStateAction<Item | null>>;
}

const Hero = ({ items, setOpen }: HeroProps) => {
  const featured = items[0];

  return (
    <section className="hero">
      <div className="hero-image">🪨</div>
      <div className="hero-info">
        <h2>{featured?.name || "Featured stone"}</h2>
        <p>
          Origin: {featured?.properties.mining_concession || "—"} · Artisan:{" "}
          {featured?.attributes.find((a) => a.trait_type === "Artisan")
            ?.value || "—"}{" "}
          · Cut:{" "}
          {featured?.attributes.find((a) => a.trait_type === "Stone Cut")
            ?.value || "—"}
        </p>
        <div className="hero-actions">
          <button onClick={() => setOpen(featured || null)}>View Stone</button>
          <button>Buy with RUMI</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
