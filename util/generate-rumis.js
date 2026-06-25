// generate-rumis.js
import fs from "fs";
import path from "path";

// Load example JSON schema as template
const example = JSON.parse(fs.readFileSync("../json/example.json", "utf-8"));

// Import your images object (or paste it here)
import { images } from "./image_map.js"; // adjust path if needed

const stoneTypes = Object.keys(images); // derive types directly from images object

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

function pickImage(type, isCut, mounted) {
  const stoneKey = type.toLowerCase().replace(" ", "_");
  const stoneImages = images[stoneKey];

  if (!stoneImages) return "";

  if (mounted) {
    return isCut
      ? randomChoice(stoneImages.mounted.cut)
      : randomChoice(stoneImages.mounted.uncut);
  } else {
    return isCut
      ? randomChoice(stoneImages.cut)
      : randomChoice(stoneImages.uncut);
  }
}

function makeRumi(index, type) {
  const rumi = JSON.parse(JSON.stringify(example));

  const id = `RUMI-2026-${type.substring(0,2).toUpperCase()}-${String(index).padStart(2,"0")}`;

  const isCut = Math.random() < 0.8;
  const cutArtisan = isCut ? randomArtisan() : { id: "", name: "" };
  const mounted = Math.random() < 0.5;
  const mountArtisan = mounted ? randomArtisan() : { id: "", name: "" };

  const name = `Rumi Stone #${String(index).padStart(3,"0")} - ${type}`;
  const description = isCut
    ? mounted
      ? `Certified Mine-to-Market ${type}, cut by ${cutArtisan.name} and mounted by ${mountArtisan.name}.`
      : `Certified Mine-to-Market ${type}, cut by ${cutArtisan.name}, unmounted specimen.`
    : `Certified Mine-to-Market ${type}, uncut specimen.`;

  // ✅ Use public folder image reference
  const imagePath = pickImage(type, isCut, mounted);
  rumi.name = name;
  rumi.description = description;
  rumi.image = `/${imagePath}`; // served from /public/images/... in Vite

  rumi.properties.stone_id = id;
  rumi.properties.mining_concession = `Peru-${type}-${index}`;
  rumi.properties.cut_by_id = cutArtisan.id;
  rumi.properties.mounted_by_id = mountArtisan.id;

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
        return attr;
    }
  });

  return rumi;
}

const quantity = parseInt(process.argv[2], 10) || 10;

const rumis = Array.from({ length: quantity }, (_, idx) => {
  const type = stoneTypes[idx % stoneTypes.length];
  return makeRumi(idx+1, type);
});

fs.writeFileSync("rumis.json", JSON.stringify(rumis, null, 2));
console.log(`Generated rumis.json with ${rumis.length} stones`);
