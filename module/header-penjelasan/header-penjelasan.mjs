function createHeader(conTarget, teks) {
  const container = document.createElement("header");
  const conTeks = document.createElement("p");

  conTarget.appendChild(container);
  container.appendChild(conTeks);

  conTeks.textContent = `${teks}`;

  Object.assign(container.style, {
    position: "relative",
    // height: "20rem",
    width: "100%",
    backgroundColor: "var(--bg2)",
    padding: "3rem 1rem 3rem 1rem",
    overflow: "hidden",
    borderRadius: "5px",
    // outline: " 2px solid rgb(176, 176, 176)",
  });

  Object.assign(conTeks.style, {
    position: "relative",
    zIndex: "2",
    fontWeight: "bold",
    color: "black",
    padding: "0 10% 0 0",
    color: "var(--font)",
  });
}

export { createHeader };
