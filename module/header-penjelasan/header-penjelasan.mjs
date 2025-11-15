function createHeader(conTarget, teks) {
  const container = document.createElement("header");
  const conTeks = document.createElement("p");
  const conImg = document.createElement("div");
  const hiasan = document.createElement("div");

  conTarget.appendChild(container);
  container.appendChild(conTeks);
  container.appendChild(conImg);
  container.appendChild(hiasan);

  conTeks.textContent = `${teks}`;

  Object.assign(container.style, {
    position: "relative",
    // height: "20rem",
    width: "100%",
    backgroundColor: "var(--bg2)",
    padding: "3rem 1rem 3rem 1rem",
    overflow: "hidden",
    borderRadius: "5px",
    outline: " 2px solid rgb(176, 176, 176)",
  });

  Object.assign(conTeks.style, {
    position: "relative",
    zIndex: "2",
    fontWeight: "bold",
    color: "black",
    padding: "0 10% 0 0",
    color: "var(--font)",
  });

  Object.assign(conImg.style, {
    position: "absolute",
    height: "100%",
    aspectRatio: "1/1",
    // backgroundColor: "red",
    top: "0",
    right: "0",
    rotate: "12deg",
    scale: "1.5",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(./asset/img-hp/samsungs25.png)",
  });
  Object.assign(hiasan.style, {
    position: "absolute",
    height: "5rem",
    aspectRatio: "1/1",
    top: "0",
    left: "0",
    borderRadius: "0 50% 50% 50%",
    backgroundColor: "var(--accen)",
  });
}

export { createHeader };
