// src/data/ProjectImage.js

// 🔹 숫자 + 한글 + 확장자 섞여도 안전한 정렬
const byFilename = (a, b) =>
  a.path.localeCompare(b.path, "ko", { numeric: true, sensitivity: "base" });

function toSortedList(mods) {
  return Object.entries(mods)
    .map(([path, mod]) => ({
      path,          // ✅ 원본 파일 경로 (01_로그인.jpg)
      src: mod.default,
    }))
    .sort(byFilename)
    .map(({ src }) => ({ src })); // 외부에는 src만 노출
}

// glob
const barofarmMods = import.meta.glob(
  "../assets/image/barofarm/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const novafundMods = import.meta.glob(
  "../assets/image/novafund/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const novatripMods = import.meta.glob(
  "../assets/image/novatrip/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

// export
export const screensBySlug = {
  barofarm: toSortedList(barofarmMods),
  novafund: toSortedList(novafundMods),
  novatrip: toSortedList(novatripMods),
};
