import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Filters from "./components/Filters";
import Marketplace from "./components/Marketplace";
import StoneModal from "./components/StoneModal";
import { Item } from './types/stone';

function App(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState({
    types: [] as string[],
    regions: [] as string[],
    cuts: [] as string[],
    type: "",
    region: "",
    cut: "",
    mounted: "",
    q: "",
  });
  const [open, setOpen] = useState<Item | null>(null);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || "./";
    fetch(`${baseUrl}data/example_1.json`)
      .then((r) => r.json())
      .then((item: Item) => {
        const list: Item[] = [item];
        for (let i = 2; i <= 8; i++) {
          const clone = JSON.parse(JSON.stringify(item)) as Item;
          clone.properties.stone_id = `RUMI-2026-CH-${String(i).padStart(2, "0")}`;
          clone.name = `${item.name} Demo ${i}`;
          list.push(clone);
        }
        setItems(list);
        const types = new Set<string>();
        const regions = new Set<string>();
        const cuts = new Set<string>();
        list.forEach((i) => {
          types.add(
            i.attributes.find((a) => a.trait_type === "Stone Type")?.value ||
              i.properties.stone_id ||
              "",
          );
          regions.add(i.properties.mining_concession || "");
          cuts.add(
            i.attributes.find((a) => a.trait_type === "Stone Cut")?.value || "",
          );
        });
        setFilters((f) => ({
          ...f,
          types: Array.from(types),
          regions: Array.from(regions),
          cuts: Array.from(cuts),
        }));
      })
      .catch((e) => console.error(e));
  }, []);

  const filtered = items.filter((i) => {
    if (
      filters.type &&
      !i.attributes.some(
        (a) => a.trait_type === "Stone Type" && a.value === filters.type,
      )
    )
      return false;
    if (filters.region && i.properties.mining_concession !== filters.region)
      return false;
    if (
      filters.cut &&
      !i.attributes.some(
        (a) => a.trait_type === "Stone Cut" && a.value === filters.cut,
      )
    )
      return false;
    if (
      filters.mounted === "true" &&
      !i.attributes.some((a) => a.trait_type === "Artisan")
    )
      return false;
    if (
      filters.mounted === "false" &&
      i.attributes.some((a) => a.trait_type === "Artisan")
    )
      return false;
    if (filters.q) {
      const hay = (
        i.properties.stone_id +
        " " +
        (i.attributes.find((a) => a.trait_type === "Artisan")?.value || "") +
        " " +
        (i.properties.vendor_ruc || "")
      ).toLowerCase();
      if (!hay.includes(filters.q.toLowerCase())) return false;
    }
    return true;
  });

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
