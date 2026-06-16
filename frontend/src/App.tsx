import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Marketplace from "./components/Marketplace";
import StoneModal from "./components/StoneModal";
import { Item } from "./types/stone";
import { filterItems } from "./utils/filterItems";
import { useItems } from "./hooks/useItems";

function App(): JSX.Element {
  const { items, filters, setFilters } = useItems();
  const [open, setOpen] = useState<Item | null>(null);

  const filtered = filterItems(items, filters);

  return (
    <div>
      <Header />
      <main className="container">
        <Hero items={filtered} setOpen={setOpen} />
        <footer className="site-footer">
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/faqs">FAQs</a>
            <a href="/privacy">Privacy & Cookies</a>
            <a href="/contact">Contact</a>
            <a href="/mint">Mint New NFT</a>
            <a href="/compliance">Compliance Dashboard</a>
          </div>
          <div className="footer-copy">
            © 2026 Rumi Project. All rights reserved.
          </div>
        </footer>
        {/* <Filters filters={filters} setFilters={setFilters} />
        <Marketplace items={filtered} setOpen={setOpen} /> */}
      </main>
      <StoneModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
