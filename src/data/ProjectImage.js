// src/data/ProjectImage.js

// 🔹 파일명 앞 숫자 추출 (01_로그인.jpg → 1)
// ✅ Windows / Mac / Linux 전부 대응
function extractOrder(path) {
  const filename = path.split(/[/\\]/).pop() || ""; // ⭐ 핵심 수정
  const match = filename.match(/^(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function toSortedList(mods) {
  return Object.entries(mods)
    .map(([path, mod]) => ({
      path,
      src: mod.default,
      order: extractOrder(path),
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ src }) => ({ src }));
}

// glob
const barofarmMods = import.meta.glob(
  "../assets/image/barofarm/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const novafundMods = import.meta.glob(
  "../assets/image/novafund/*.{PNG,png,jpg,jpeg,webp}",
  { eager: true }
);
const novatripMods = import.meta.glob(
  "../assets/image/novatrip/*.{png,jpg,JPG,jpeg,webp}",
  { eager: true }
);

export const screensBySlug = {
  barofarm: toSortedList(barofarmMods),
  novafund: toSortedList(novafundMods),
  novatrip: toSortedList(novatripMods),
};
