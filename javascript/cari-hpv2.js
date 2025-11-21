import {
  rules,
  data,
  cardHasil,
  createHeader,
  prosesorGaming,
} from "./../module/module.mjs";

//DATA PERTANYAAN
const pertanyaanGrup1 = [
  "Apakah anda mempunyai budget Tinggi (Rp 8jt++)?",
  "Apakah anda mempunyai budget Menengah (Rp 5jt - 8jt)?",
  "Apakah anda mempunyai budget Rendah (Dibawah Rp 5jt)?",
];

const pertanyaanGrup2 = [
  "Apakah pioritas anda Gaming / Performa Tinggi/ Edit video",
  "Apakah pioritas anda Kamera / Fotografi",
  "Apakah pioritas anda Bisnis / Produktivitas / multitasking",
  "Apakah pioritas anda Keperluan kerja di lapangan (seperti ojek online)",
];

const pertanyaanGrup3 = [
  "Apakah anda ingin baterai besar ? Di atas 5000mAh",
  "Apakan anda tidak peduli dengan ketahanan baterai",
];

//

// 2. STATE VARIABLES
let fase = 1;
let indexSaatIni = 0;

let jawaban1 = ""; // Hasil Grup 1
let jawaban2 = ""; // Hasil Grup 2
let jawaban3 = ""; // Hasil Grup 3 (Baru)

// Elemen HTML
const textPertanyaan = document.getElementById("question-text");
const textJudulFase = document.getElementById("phase-title");
const boxKuis = document.getElementById("quiz-box");
const boxHasil = document.getElementById("result-area");
const containerHasil = document.getElementById("final-result-container");
const btnCariRekomendasi = document.getElementById("cari-rekomendasi");
const conTarget = document.querySelector(".container-hasil");

const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

btnYes.addEventListener("click", function () {
  jawab(true);
});

btnNo.addEventListener("click", function () {
  jawab(false);
});

function penalaranMundur(faktaPengguna) {
  // njukok kabel goal soko rulebase
  const daftarTujuan = [...new Set(rules.map((aturan) => aturan.goal))];

  // looping goal
  for (const tujuan of daftarTujuan) {
    // golek aturan sing podo karo tujuan
    for (const aturan of rules) {
      // jika goal di rulebase sama dengan tujuan
      if (aturan.goal === tujuan) {
        // dianggep kabeh bener kek
        let premisCocokSemua = true;

        // Cek semua premis pada aturan
        for (const namaPremis in aturan.premises) {
          //
          const nilaiYangDibutuhkan = aturan.premises[namaPremis];
          const nilaiDariPengguna = faktaPengguna[namaPremis];

          // Jika ada premis yang tidak sesuai fakta → aturan gagal
          if (nilaiDariPengguna !== nilaiYangDibutuhkan) {
            premisCocokSemua = false;
            break;
          }
        }

        // Jika semua premis sesuai, maka aturan ini adalah hasilnya
        if (premisCocokSemua) {
          return aturan;
        }
      }
    }
  }

  // Jika tidak ada aturan yang cocok
  return null;
}

function tampilkanPertanyaan() {
  let arrayAktif = [];
  let judulFase = "";

  if (fase === 1) {
    arrayAktif = pertanyaanGrup1;
    judulFase = "Pertanyaan budget";
  } else if (fase === 2) {
    arrayAktif = pertanyaanGrup2;
    judulFase = "Pertanyaan kegunaan hp";
  } else if (fase === 3) {
    arrayAktif = pertanyaanGrup3;
    judulFase = "Pertanyaan baterai";
  }

  textJudulFase.innerText = judulFase;

  if (indexSaatIni < arrayAktif.length) {
    textPertanyaan.innerText = arrayAktif[indexSaatIni];
  } else {
    indexSaatIni = 0;
    tampilkanPertanyaan();
  }
}

function jawab(isIya) {
  let arrayAktif = [];
  if (fase === 1) arrayAktif = pertanyaanGrup1;
  else if (fase === 2) arrayAktif = pertanyaanGrup2;
  else if (fase === 3) arrayAktif = pertanyaanGrup3;

  if (isIya) {
    if (fase === 1) {
      jawaban1 = arrayAktif[indexSaatIni];

      switch (true) {
        case jawaban1 === "Apakah anda mempunyai budget Tinggi (Rp 8jt++)?":
          jawaban1 = "tinggi";
          break;
        case jawaban1 ===
          "Apakah anda mempunyai budget Menengah (Rp 5jt - 8jt)?":
          jawaban1 = "menengah";
          break;
        case jawaban1 ===
          "Apakah anda mempunyai budget Rendah (Dibawah Rp 5jt)?":
          jawaban1 = "rendah";
          break;
      }
      console.log("Jawaban 1:", jawaban1);

      fase = 2;
      indexSaatIni = 0;
      tampilkanPertanyaan();
    } else if (fase === 2) {
      jawaban2 = arrayAktif[indexSaatIni];

      switch (true) {
        case jawaban2 ===
          "Apakah pioritas anda Gaming / Performa Tinggi/ Edit video":
          jawaban2 = "game";
          break;
        case jawaban2 === "Apakah pioritas anda Kamera / Fotografi":
          jawaban2 = "foto";
          break;
        case jawaban2 ===
          "Apakah pioritas anda Bisnis / Produktivitas / multitasking":
          jawaban2 = "bisnis";
          break;
        case jawaban2 ===
          "Apakah pioritas anda Keperluan kerja di lapangan (seperti ojek online)":
          jawaban2 = "outdoor";
          break;
      }
      console.log("Jawaban 2:", jawaban2);

      fase = 3;
      indexSaatIni = 0;
      tampilkanPertanyaan();
    } else if (fase === 3) {
      jawaban3 = arrayAktif[indexSaatIni];

      if (jawaban3 === "Apakah anda ingin baterai besar ? Di atas 5000mAh") {
        jawaban3 = "ya";
      } else {
        jawaban3 = "tidak";
      }

      console.log("Jawaban 3:", jawaban3);

      tampilkanHasilAkhir();
    }
  } else {
    indexSaatIni++;
    tampilkanPertanyaan();
  }
}

function tampilkanHasilAkhir() {
  boxKuis.style.display = "none";
  boxHasil.style.display = "block";

  containerHasil.innerHTML = `
      <div class="final-item"><strong>Dana:</strong> ${jawaban1}</div>
      <div class="final-item"><strong>Kebutuhan:</strong> ${jawaban2}</div>
      <div class="final-item"><strong>Baterai awet:</strong> ${jawaban3}</div>
  `;
}

tampilkanPertanyaan();

btnCariRekomendasi.addEventListener("click", () => {
  const userFacts = {
    anggaran: jawaban1,
    prioritas: jawaban2,
    baterai: jawaban3,
  };

  console.log(userFacts);

  const resultRule = penalaranMundur(userFacts);

  conTarget.innerHTML = "";

  switch (true) {
    case resultRule.desc === "hp-outdoor-midrange-ignore-battery":
      {
        const teks =
          "Tidak ada rekomendasi hp midrange yang cocok untk outdoor";
        createHeader(conTarget, teks);
      }

      break;
    case resultRule.desc === "hp-outdoor-midrange":
      {
        const teks =
          "Tidak ada rekomendasi hp midrange yang cocok untk outdoor";
        createHeader(conTarget, teks);
      }

      break;
    case resultRule.desc === "hp-outdoor-flagship-ignore-battery":
      {
        const teks =
          "Tidak ada rekomendasi hp flagship yang cocok untk outdoor";
        createHeader(conTarget, teks);
      }
      break;
    case resultRule.desc === "hp-outdoor-flagship":
      {
        const teks =
          "Tidak ada rekomendasi hp flagship yang cocok untk outdoor";
        createHeader(conTarget, teks);
      }
      break;
    case resultRule.desc === "hp-outdoor-entrylevel-ignore-battery":
      {
        const teks =
          "Berikut Rekomendasi hp yang cocok digunakan untuk outdoor dengan layar ips yang cocok dengan konsisi outdoor.";
        createHeader(conTarget, teks);
        const find = data.filter((hp) => {
          const isScreenOk = hp.screen === "ips";

          return isScreenOk;
        });

        find.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-outdoor-entrylevel":
      {
        const teks =
          "Berikut Rekomendasi hp yang cocok digunakan untuk outdoor dengan layar ips yang cocok dengan konsisi outdoor.";
        createHeader(conTarget, teks);
        const find = data.filter((hp) => {
          const isScreenOk = hp.screen === "ips";

          return isScreenOk;
        });

        find.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-entrylevel-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp entry level untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);
        const bisnisMidrange = data.filter((hp) => {
          const find = hp.name.includes("poco x6 pro 5g");
          return find;
        });

        bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-entrylevel":
      {
        const teks =
          "Berikut rekomendasi hp entry level untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);

        const bisnisMidrange = data.filter((hp) => {
          const find = hp.name.includes("poco x6 pro 5g");
          return find;
        });

        bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-midrange-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);
        const bisnisMidrange = data.filter((hp) => {
          const find = hp.name.includes("vivo v40 5g");
          return find;
        });

        bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-midrange":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan bisnis anda. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);
        const bisnisMidrange = data.filter((hp) => {
          const find = hp.name.includes("vivo v40 5g");
          return find;
        });

        bisnisMidrange.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-flagship-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp flagship untuk keperluan bisnis anda yang menghiraukan ketahanan baterai tahan lama. hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);
        const bisnisFlagship = data.filter((hp) => {
          const find =
            hp.name.includes("samsung s24 ultra") ||
            hp.name.includes("iphone 15");
          return find;
        });

        bisnisFlagship.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "hp-bisnis-flagship":
      {
        const teks =
          "Berikut rekomendasi hp flagship untuk keperluan bisnis anda . hp dengan fokus yang anda pilih bisa dikatakan hp all-rounder";
        createHeader(conTarget, teks);
        const bisnisFlagship = data.filter((hp) => {
          const find = hp.name.includes("samsung s24 ultra");
          return find;
        });

        bisnisFlagship.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "entrylevel-kamera-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp entry level untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const entrylevelKamera = data.filter((hp) => {
          const find =
            hp.name.includes("redmi note 13 pro 5g") ||
            hp.name.includes("infinix note 40 4g");
          return find;
        });

        entrylevelKamera.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "entrylevel-kamera":
      {
        const teks =
          "Berikut rekomendasi hp entry level untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const entrylevelKamera = data.filter((hp) => {
          const find =
            hp.name.includes("redmi note 13 pro 5g") ||
            hp.name.includes("infinix note 40 4g");
          return find;
        });

        entrylevelKamera.forEach((items) => cardHasil(conTarget, items));
      }

      break;
    case resultRule.desc === "midrange-kamera-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const midrangeKamera = data.filter((hp) => {
          const find = hp.name.includes("vivo v40 5g");

          return find;
        });

        midrangeKamera.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "midrange-kamera":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const midrangeKamera = data.filter((hp) => {
          const find = hp.name.includes("vivo v40 5g");

          return find;
        });

        midrangeKamera.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "flagship-kamera-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp flagship untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const flagshipKamera = data.filter((hp) => {
          const find =
            hp.name.includes("samsung s24 ultra") ||
            hp.name.includes("iphone 15");

          return find;
        });

        flagshipKamera.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "flagship-kamera":
      {
        const teks =
          "Berikut rekomendasi hp flagship untuk keperluan fotografer anda. hp dengan fokus yang anda pilih sudah termasuk ROM besar dan layar amoled.";
        createHeader(conTarget, teks);
        const flagshipKamera = data.filter((hp) => {
          const find = hp.name.includes("samsung s24 ultra");
          return find;
        });

        flagshipKamera.forEach((items) => cardHasil(conTarget, items));
      }
      break;
    case resultRule.desc === "gaming-entrylevel-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp entrylevel untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const hpGamingEntryLevelIgnoreBattery = data.filter((hp) => {
        const isPriceOk = hp.price <= 5000000;
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        return isPriceOk && isChipsetOk;
      });

      hpGamingEntryLevelIgnoreBattery.forEach((el) => cardHasil(conTarget, el));
      break;
    case resultRule.desc === "gaming-entrylevel":
      {
        const teks =
          "Berikut rekomendasi hp entrylevel untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const hpGamingEntryLevel = data.filter((hp) => {
        const isPriceOk = hp.price <= 5000000;
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        return isPriceOk && isChipsetOk;
      });

      hpGamingEntryLevel.forEach((el) => cardHasil(conTarget, el));
      break;
    case resultRule.desc === "gaming-midrange":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const hpGamingMidrange = data.filter((hp) => {
        const isPriceOk = hp.price >= 5000000 && hp.price <= 8000000;
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        return isPriceOk && isChipsetOk;
      });

      hpGamingMidrange.forEach((items) => cardHasil(conTarget, items));

      break;
    case resultRule.desc === "gaming-midrange-ignore-battery":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const hpGamingMidrangeIgnoreBattery = data.filter((hp) => {
        const isPriceOk = hp.price >= 5000000 && hp.price <= 8000000;
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        return isPriceOk && isChipsetOk;
      });

      hpGamingMidrangeIgnoreBattery.forEach((items) =>
        cardHasil(conTarget, items)
      );

      break;
    case resultRule.desc === "gaming-flagship":
      {
        const teks =
          "Berikut rekomendasi hp flagship untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, baterai tahan lama,  dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const flagshipGaming = data.filter((hp) => {
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        const isPiceOK = hp.price >= 8000000;
        const isBatteryOk = hp.battery >= 5000;

        return isChipsetOk && isPiceOK && isBatteryOk;
      });
      flagshipGaming.forEach((data) => cardHasil(conTarget, data));

      break;
    case resultRule.desc === "gaming-flagship-Ignory-Battery":
      {
        const teks =
          "Berikut rekomendasi hp midrange untuk keperluan gaming anda. hp dengan fokus yang anda pilih sudah termasuk RAM besar, ROM besar, chipset kencang untuk 3 tahun kedepan, speker stereo, dan layar amoled.";
        createHeader(conTarget, teks);
      }
      const flagshipGamingIgnoreBattery = data.filter((hp) => {
        const isChipsetOk = prosesorGaming.some((items) =>
          hp.chipset.includes(items)
        );
        const isPiceOK = hp.price >= 8000000;

        return isChipsetOk && isPiceOK;
      });
      flagshipGamingIgnoreBattery.forEach((data) => cardHasil(conTarget, data));

      console.log(flagshipGamingIgnoreBattery);

      break;
  }
});
