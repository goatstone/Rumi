// src/hooks/useItems.ts
import { useEffect, useState } from "react";
import { Item } from "../types/stone";
import { FiltersState } from "../utils/filterItems";

export function useItems(): {
  items: Item[];
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
} {
  const [items, setItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState<FiltersState>({
    types: [],
    regions: [],
    cuts: [],
    type: "",
    region: "",
    cut: "",
    mounted: "",
    q: "",
  });

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

  return { items, filters, setFilters };
}
