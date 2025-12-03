const conTarget = document.querySelector(".container-hasil");

function cardHasil(conTarget) {
  const container = document.createElement("section");
  const conKiri = document.createElement("section");
  const conKanan = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(conKiri);
  container.appendChild(conKanan);

  Object.assign(container.style, {
    // height: "20rem",
    width: "100%",
    // backgroundColor: "green",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "8px",
    display: "flex",
  });

  Object.assign(conKiri.style, {
    width: "40%",
    height: "100% !important",
    // backgroundColor: "cyan",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  Object.assign(conKanan.style, {
    width: "60%",
    // backgroundColor: "yellow",
    padding: "2rem 0.5rem",
  });
  //container kiri
  {
    const conImg = document.createElement("div");

    conKiri.appendChild(conImg);

    Object.assign(conImg.style, {
      position: "relative",
      width: "85%",
      aspectRatio: "1/1",
      //   backgroundColor: "green",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(./asset/img-hp/samsungs25.png)",
    });
  }

  // container kanan
  {
    const ul = document.createElement("ul");
    const header = document.createElement("header");

    conKanan.appendChild(header);
    conKanan.appendChild(ul);

    header.textContent = "Samsung";

    Object.assign(header.style, {
      fontSize: "1.2em",
      fontWeight: "700",
    });

    Object.assign(ul.style, {
      //   backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    });

    for (let i = 0; i < 6; i++) {
      const li = document.createElement("li");
      const conImg = document.createElement("div");
      const teks = document.createElement("p");

      ul.appendChild(li);
      li.appendChild(conImg);
      li.appendChild(teks);

      teks.textContent = "gdiagd";
      Object.assign(conImg.style, {
        height: "2.5rem",
        aspectRatio: "1/1",
        // backgroundColor: "gray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });

      Object.assign(li.style, {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      });

      switch (true) {
        case i === 0:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/screen.png)",
          });
          break;
        case i === 1:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/chipset.png)",
          });
          break;
        case i === 2:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/ram.png)",
          });
          break;
        case i === 3:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/rom.png)",
          });
          break;
        case i === 4:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/cam.png)",
          });
          break;
        case i === 5:
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/.png)",
          });
          break;
      }
    }
  }
}

cardHasil(conTarget);
