import { rules, data, cardHasil } from "./../module/module.mjs";

// console.log(data);

function backwardChaining(facts) {
  // ... (Kode untuk mendapatkan possibleGoals)
  const possibleGoals = [...new Set(rules.map((rule) => rule.goal))];

  for (const goal of possibleGoals) {
    // Cek setiap aturan untuk mencapai 'goal' ini
    for (const rule of rules) {
      if (rule.goal === goal) {
        let allPremisesMet = true;

        // Cek semua Premis (JIKA) di aturan ini
        // Iterasi ini akan secara otomatis memeriksa `battery` jika ada di rule.premises
        for (const key in rule.premises) {
          const requiredValue = rule.premises[key];
          const userFactValue = facts[key];

          // Jika fakta pengguna tidak cocok dengan premis yang dibutuhkan
          if (userFactValue !== requiredValue) {
            allPremisesMet = false;
            break;
          }
        }

        if (allPremisesMet) {
          return rule; // BERHASIL: Mengembalikan R1V2 jika semua premis (prioritas, anggaran, battery) cocok.
        }
      }
    }
  }
  return null;
}

const prosesorGaming = [
  "mediatek dimensity 9400+",
  "qualcomm snapdragon 8 elite gen 4",
  "qualcomm snapdragon 8 elite gen 3",
  "qualcomm snapdragon 8 gen 3",
  "apple a18 pro",
  "mediatek dimensity 9400e",
  "apple A18",
  "mediatek dimensity 9400",
  "mediatek dimensity 9300+",
  "snapdragon 8s gen 4",
  "apple a17 pro",
  "mediatek dimensity 9300",
  "qualcom snapdragon 8 gen 3",
  "apple a16 bionic",
  "samsung exynos 2400",
  "samsung exynos 2400e",
  "mediatek dimensity 8450",
  "apple a15 bionic",
  "mediatek dimensity 8400",
  "mediatek dimensity 8300 ultra",
];

const conTarget = document.querySelector(".container-hasil");

document
  .getElementById("expertSystemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit default

    const form = event.target;

    // Ambil data dari input pengguna (menjadi 'Fakta' awal)
    const userFacts = {
      anggaran: form.anggaran.value,
      prioritas: form.prioritas.value,
      baterai: form.baterai.value,
    };

    console.log(userFacts);

    const resultRule = backwardChaining(userFacts);
    // const resultElement = document.getElementById("rekomendasi-text");

    console.log(resultRule);

    switch (true) {
      case resultRule.desc === "gaming-flagship":
        conTarget.innerHTML = "";
        const flagshipGaming = data.filter((hp) => {
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          const isPiceOK = hp.price >= 8000000;
          const isBatteryOk = hp.battery >= 5000;

          return isChipsetOk && isPiceOK && isBatteryOk;
        });
        flagshipGaming.forEach((data) => cardHasil(conTarget, data));

        console.log(flagshipGaming);

        console.log("hp-gaming-baterai-badak");
        break;
      case resultRule.desc === "gaming-flagship-Ignory-Battery":
        conTarget.innerHTML = "";
        const flagshipGamingIgnoreBattery = data.filter((hp) => {
          const isChipsetOk = prosesorGaming.some((items) =>
            hp.chipset.includes(items)
          );
          const isPiceOK = hp.price >= 8000000;

          return isChipsetOk && isPiceOK;
        });
        flagshipGamingIgnoreBattery.forEach((data) =>
          cardHasil(conTarget, data)
        );

        console.log(flagshipGamingIgnoreBattery);

        break;
    }
  });

// cardHasil(conTarget);
