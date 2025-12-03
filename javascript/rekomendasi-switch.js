const conSelection = document.querySelector(".csdeeds");
const btnStart = document.getElementById("cari-rekomendasi");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

btnStart.addEventListener("click", () => {
  const card = document.querySelectorAll(".dcfgtds");

  console.log(card.length);

  conSelection.style.display = card.length > 1 ? "flex" : "none";

  card.forEach((el) => el.classList.add("adabyu"));

  card[0].classList.remove("adabyu");

  nextBtn.addEventListener("click", () => {
    card[currentIndex].classList.add("adabyu");

    currentIndex++;
    if (currentIndex >= card.length) currentIndex = 0;

    card[currentIndex].classList.remove("adabyu");
  });

  prevBtn.addEventListener("click", () => {
    card[currentIndex].classList.add("adabyu");

    currentIndex--;
    if (currentIndex < 0) currentIndex = card.length - 1;

    card[currentIndex].classList.remove("adabyu");
  });

  console.log(card);
});
