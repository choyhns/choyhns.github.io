// src/data/projectImage.js
const NOVAFUND = import.meta.glob("../assets/image/novafund/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });
const NOVATRIP = import.meta.glob("../assets/image/novatrip/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });
const BAROFARM = import.meta.glob("../assets/image/barofarm/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });

function toSortedArray(obj) {
  return Object.entries(obj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => ({ path, src }));
}

export const screensBySlug = {
  novafund: toSortedArray(NOVAFUND),
  novatrip: toSortedArray(NOVATRIP),
  barofarm: toSortedArray(BAROFARM),
};
