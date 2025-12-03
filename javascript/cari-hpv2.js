import {
  rules,
  data,
  cardHasil,
  createHeader,
  prosesorGaming,
  switchCase,
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
const headerTarget = document.querySelector(".container-header");

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

          if (nilaiDariPengguna !== nilaiYangDibutuhkan) {
            premisCocokSemua = false;
            break;
          }
        }

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

  // containerHasil.innerHTML = `
  //     <div class="final-item"><strong>Dana:</strong> ${jawaban1}</div>
  //     <div class="final-item"><strong>Kebutuhan:</strong> ${jawaban2}</div>
  //     <div class="final-item"><strong>Baterai awet:</strong> ${jawaban3}</div>
  // `;

  containerHasil.innerHTML = `<section class="hbjhk">
  <div><p>Dana : <p/><strong>${jawaban1}</strong></div>
  <span>|</span>
  <div><p>kebutuhan : <p/><strong>${jawaban2}</strong></div>
  <span>|</span>
  <div><p>Ketahanan baterai : <p/><strong>${jawaban3}</strong></div>
  </section>`;
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

  switchCase(resultRule);
});

export { conTarget, headerTarget };
