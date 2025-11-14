function cardHasil(conTarget, data) {
  const container = document.createElement("section");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const conImg = document.createElement("div");
  const img = document.createElement("img");
  const header = document.createElement("header");

  conTarget.appendChild(container);
  container.appendChild(div1);
  container.appendChild(div2);
  div1.appendChild(conImg);
  conImg.appendChild(img);
  div2.appendChild(header);

  container.classList.add("dser");
  div1.classList.add("safe");
  div2.classList.add("iojk");

  img.setAttribute("alt", "foto-hp");
  img.setAttribute("loading", "lazy");
  img.setAttribute("src", `asset/img-hp/${data.foto}`);

  header.textContent = data.name;

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
}

export { cardHasil };
