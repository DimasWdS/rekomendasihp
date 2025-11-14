const rules = [
  {
    id: "R1",
    premises: { prioritas: "game", anggaran: "tinggi", baterai: "ya" },
    goal: "HP Flagship Gaming",
    desc: "gaming-flagship",
  },
  {
    id: "R1V2",
    premises: {
      prioritas: "game",
      anggaran: "tinggi", // PERBAIKAN: Ganti 'battery' menjadi 'baterai'
      baterai: "tidak",
    },
    goal: "HP Flagship Gaming Ignore Battery",
    desc: "gaming-flagship-Ignory-Battery",
  },
  {
    id: "R2",
    premises: { prioritas: "game", anggaran: "menengah", baterai: "ya" },
    goal: "HP Gaming Mid-Range",
    desc: "gaming-midrange",
  },
  {
    id: "R3",
    premises: { prioritas: "game", anggaran: "rendah", baterai: "ya" },
    goal: "HP Gaming Entry-Level",
    desc: "gaming-entrylevel",
  },
  {
    id: "R4",
    premises: { prioritas: "foto", anggaran: "tinggi", baterai: "ya" },
    goal: "HP Flagship Kamera Terbaik",
    desc: "flagship-kamera",
  },
  {
    id: "R5",
    premises: { prioritas: "foto", anggaran: "menengah", baterai: "ya" },
    goal: "HP Kamera Mid-Range Terbaik",
    desc: "midrange-kamera",
  },
  {
    id: "R6",
    premises: { prioritas: "foto", anggaran: "rendah", baterai: "ya" },
    goal: "HP Kamera Entry-level Terbaik",
    desc: "entrylevel-kamera",
  },

  // Tambahkan lebih banyak aturan di sini
];

export { rules };
