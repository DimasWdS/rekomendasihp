{
  const btnClose = document.getElementById("btn-close-carihp");

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");

    btnClose.appendChild(div);

    Object.assign(div.style, {
      position: "absolute",
      width: "60%",
      height: "0.2rem",
      backgroundColor: "var(--accen)",
      borderRadius: "5px",
      opacity: "0.5",
    });
    if (i === 0) {
      Object.assign(div.style, {
        rotate: "45deg",
      });
    } else {
      Object.assign(div.style, {
        rotate: "-45deg",
      });
    }
    btnClose.addEventListener("mouseenter", () => {
      Object.assign(div.style, {
        opacity: "1",
      });
    });
    btnClose.addEventListener("mouseleave", () => {
      Object.assign(div.style, {
        opacity: "0.5",
      });
    });
  }
}
