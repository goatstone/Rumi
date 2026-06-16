import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
        <Filters filters={filters} setFilters={setFilters} />
        <Marketplace items={filtered} setOpen={setOpen} />
      </main>
      <StoneModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
