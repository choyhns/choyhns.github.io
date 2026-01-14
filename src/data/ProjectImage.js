// src/data/ProjectImage.js

function extractOrder(path) {
  const filename = path.split(/[/\\]/).pop() || "";
  const match = filename.match(/^(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function extractFilename(path) {
  return (path.split(/[/\\]/).pop() || "").toLowerCase();
}

function toSortedList(mods) {
  return Object.entries(mods)
    .map(([path, mod]) => ({
      path,
      src: mod.default,
      order: extractOrder(path),
      name: extractFilename(path),
    }))
    .sort((a, b) => (a.order !== b.order ? a.order - b.order : a.name.localeCompare(b.name, "ko")))
    .map(({ src }) => ({ src }));
}

const barofarmMods = import.meta.glob(
  "../assets/image/barofarm/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true }
);
const novafundMods = import.meta.glob(
  "../assets/image/novafund/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true }
);
const novatripMods = import.meta.glob(
  "../assets/image/novatrip/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true }
);

console.log("barofarm images:", Object.keys(barofarmMods).length);
console.log("novafund images:", Object.keys(novafundMods).length);
console.log("novatrip images:", Object.keys(novatripMods).length);


export const screensBySlug = {
  barofarm: toSortedList(barofarmMods),
  novafund: toSortedList(novafundMods),
  novatrip: toSortedList(novatripMods),
};
