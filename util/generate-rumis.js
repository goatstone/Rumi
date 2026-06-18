// generate-rumis.js
import fs from "fs";

// Load example JSON schema as template
const example = JSON.parse(fs.readFileSync("../json/example.json", "utf-8"));

const stoneTypes = [
  "Amethyst", "Quartz", "Chrysocolla", "Obsidian", "Jade",
  "Tourmaline", "Lapis Lazuli", "Malachite", "Ruby", "Sapphire"
];

const stoneCuts = [
  "Cabochon", "Faceted", "Brilliant Cut", "Step Cut", "Rose Cut",
  "Emerald Cut", "Oval Cut", "Pear Cut", "Princess Cut", "Cushion Cut"
];

const artisanNames = [
  "Juan Pérez", "María López", "Carlos Sánchez", "Ana Torres",
  "Luis Fernández", "Carmen Díaz", "José Ramírez", "Elena Castillo",
  "Miguel Herrera", "Patricia Rojas"
];

const artisanTechniques = [
  "Wire Wrapping", "Bezel Setting", "Channel Setting", "Pavé",
  "Engraving", "Prong Setting", "Inlay", "Filigree"
];

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomArtisan() {
  const idNum = Math.floor(Math.random() * 900) + 100; // 100–999
  return {
    id: `ARTISAN-${idNum}`,
    name: randomChoice(artisanNames)
  };
}

function makeRumi(index, type) {
  // Clone the example template deeply
  const rumi = JSON.parse(JSON.stringify(example));

  // Generate IDs
  const id = `RUMI-2026-${type.substring(0,2).toUpperCase()}-${String(index).padStart(2,"0")}`;

  // Random artisan involvement
  const isCut = Math.random() < 0.8; // 80% chance cut
  const cutArtisan = isCut ? randomArtisan() : { id: "", name: "" };
  const mounted = Math.random() < 0.5; // 50% chance mounted
  const mountArtisan = mounted ? randomArtisan() : { id: "", name: "" };

  // Dynamic name and description
  const name = `Rumi Stone #${String(index).padStart(3,"0")} - ${type}`;
  const description = isCut
    ? mounted
      ? `Certified Mine-to-Market ${type}, cut by ${cutArtisan.name} and mounted by ${mountArtisan.name}.`
      : `Certified Mine-to-Market ${type}, cut by ${cutArtisan.name}, unmounted specimen.`
    : `Certified Mine-to-Market ${type}, uncut specimen.`;

  // Update top-level metadata
  rumi.name = name;
  rumi.description = description;
  rumi.image = `ipfs://Qm${type.replace(" ","")}ThumbHash`;

  // Update properties (override only dynamic fields)
  rumi.properties.stone_id = id;
  rumi.properties.mining_concession = `Peru-${type}-${index}`;
  rumi.properties.cut_by_id = cutArtisan.id;
  rumi.properties.mounted_by_id = mountArtisan.id;

    // Update attributes selectively
  rumi.attributes = rumi.attributes.map(attr => {
    switch (attr.trait_type) {
      case "Stone Type":
        return { ...attr, value: type };
      case "Stone Cut":
        return { ...attr, value: isCut ? randomChoice(stoneCuts) : "" };
      case "Cut By":
        return { ...attr, value: isCut ? `${cutArtisan.name} (${cutArtisan.id})` : "" };
      case "Mounted By":
        return { ...attr, value: mounted ? `${mountArtisan.name} (${mountArtisan.id})` : "" };
      case "Mount Technique":
        return { ...attr, value: mounted ? randomChoice(artisanTechniques) : "" };
      case "Name":
        return { ...attr, value: name };
      case "Description":
        return { ...attr, value: description };
      default:
        return attr; // keep template value
    }
  });

  return rumi;
}

// Quantity comes from command line argument, default 10
const quantity = parseInt(process.argv[2], 10) || 10;

// Iterate through stoneTypes cyclically if quantity > stoneTypes.length
const rumis = Array.from({ length: quantity }, (_, idx) => {
  const type = stoneTypes[idx % stoneTypes.length];
  return makeRumi(idx+1, type);
});

fs.writeFileSync("rumis.json", JSON.stringify(rumis, null, 2));
console.log(`Generated rumis.json with ${rumis.length} stones`);
