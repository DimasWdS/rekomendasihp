function cardHasil(conTarget, data) {
  const container = document.createElement("section");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const conImg = document.createElement("div");
  const conPrice = document.createElement("div");
  const img = document.createElement("img");
  const header = document.createElement("header");
  const moreSpec = document.createElement("section");
  const moreSpecHeader = document.createElement("header");
  const moreSpecTeks = document.createElement("p");

  conTarget.appendChild(container);
  container.appendChild(div1);
  container.appendChild(div2);
  div1.appendChild(conImg);
  div1.appendChild(conPrice);
  conImg.appendChild(img);
  div2.appendChild(header);

  container.classList.add("dser");
  div1.classList.add("safe");
  div2.classList.add("iojk");
  conPrice.classList.add("dhgu");

  img.setAttribute("alt", "foto-hp");
  img.setAttribute("loading", "lazy");
  img.setAttribute("src", `asset/img-hp/${data.foto}`);

  header.textContent = data.name;

  Object.assign(conPrice.style, {
    position: "absolute",
    width: "90%",
    height: "2rem",
    bottom: "0",
    marginBottom: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
  });

  conPrice.textContent = `Rp ${data.price}`;

  for (let i = 0; i < 5; i++) {
    const section = document.createElement("section");
    const icon = document.createElement("div");
    const teks = document.createElement("p");

    div2.appendChild(section);
    section.appendChild(icon);
    section.appendChild(teks);

    section.classList.add("dase");
    icon.classList.add("swok");

    Object.assign(icon.style, {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    });

    Object.assign(teks.style, {
      fontFamily: "monospace",
      fontWeight: "bold",
    });

    switch (true) {
      case i === 0:
        Object.assign(icon.style, {
          backgroundImage: "url(asset/icon/screen.png)",
        });
        teks.textContent = `${data.screen}, ${data.refresRate
          .map((items) => items + "Hz")
          .join("/")}`;
        break;
      case i === 1:
        Object.assign(icon.style, {
          backgroundImage: "url(asset/icon/chipset.png)",
        });
        teks.textContent = data.chipset;
        break;
      case i === 2:
        Object.assign(icon.style, {
          backgroundImage: "url(asset/icon/ram.png)",
        });
        teks.textContent = `${data.ram.map((items) => items + "GB").join("/")}`;
        break;
      case i === 3:
        Object.assign(icon.style, {
          backgroundImage: "url(asset/icon/rom.png)",
        });
        teks.textContent = `${data.storage
          .map((items) => items + "GB")
          .join("/")}`;
        break;
      case i === 4:
        Object.assign(icon.style, {
          backgroundImage: "url(asset/icon/cam.png)",
        });
        teks.textContent = `Front Cam: ${data.frontCam}MP, Back Cam : ${data.backCam}MP`;
        break;
    }
  }

  div2.appendChild(moreSpec);
  moreSpec.appendChild(moreSpecHeader);
  moreSpec.appendChild(moreSpecTeks);
  moreSpec.classList.add("tess");

  moreSpecHeader.textContent = "More Spec";

  Object.assign(moreSpecHeader.style, {
    width: "100%",
    padding: "0.3rem 0 0 0.4rem 0.8rem",
  });

  Object.assign(moreSpecTeks.style, {
    padding: "0 0.3rem 3rem 0.8rem",
    fontFamily: "Monospace",
    fontWeight: "bold",
  });

  moreSpecTeks.textContent = `Speaker ${data.speaker}, Network ${data.network}, Battery ${data.battery}mAh`;
}

export { cardHasil };
