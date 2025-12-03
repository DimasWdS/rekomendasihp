// function cardHasil(conTarget, data) {
//   const container = document.createElement("section");
//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const conImg = document.createElement("div");
//   const conPrice = document.createElement("div");
//   const img = document.createElement("img");
//   const header = document.createElement("header");
//   const moreSpec = document.createElement("section");
//   const moreSpecHeader = document.createElement("header");
//   const moreSpecTeks = document.createElement("p");

//   conTarget.appendChild(container);
//   container.appendChild(div1);
//   container.appendChild(div2);
//   div1.appendChild(conImg);
//   div1.appendChild(conPrice);
//   conImg.appendChild(img);
//   div2.appendChild(header);

//   container.classList.add("dser");
//   div1.classList.add("safe");
//   div2.classList.add("iojk");
//   conPrice.classList.add("dhgu");

//   img.setAttribute("alt", "foto-hp");
//   img.setAttribute("loading", "lazy");
//   img.setAttribute("src", `asset/img-hp/${data.foto}`);

//   header.textContent = data.name;

//   Object.assign(conPrice.style, {
//     position: "absolute",
//     width: "90%",
//     height: "2rem",
//     bottom: "0",
//     marginBottom: "5%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: "10px",
//     color: "white",
//     fontWeight: "bold",
//   });

//   conPrice.textContent = `Rp ${data.price}`;

//   for (let i = 0; i < 5; i++) {
//     const section = document.createElement("section");
//     const icon = document.createElement("div");
//     const teks = document.createElement("p");

//     div2.appendChild(section);
//     section.appendChild(icon);
//     section.appendChild(teks);

//     section.classList.add("dase");
//     icon.classList.add("swok");

//     Object.assign(icon.style, {
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//     });

//     Object.assign(teks.style, {
//       fontFamily: "monospace",
//       fontWeight: "bold",
//     });

//     switch (true) {
//       case i === 0:
//         Object.assign(icon.style, {
//           backgroundImage: "url(asset/icon/screen.png)",
//         });
//         teks.textContent = `${data.screen}, ${data.refresRate
//           .map((items) => items + "Hz")
//           .join("/")}`;
//         break;
//       case i === 1:
//         Object.assign(icon.style, {
//           backgroundImage: "url(asset/icon/chipset.png)",
//         });
//         teks.textContent = data.chipset;
//         break;
//       case i === 2:
//         Object.assign(icon.style, {
//           backgroundImage: "url(asset/icon/ram.png)",
//         });
//         teks.textContent = `${data.ram.map((items) => items + "GB").join("/")}`;
//         break;
//       case i === 3:
//         Object.assign(icon.style, {
//           backgroundImage: "url(asset/icon/rom.png)",
//         });
//         teks.textContent = `${data.storage
//           .map((items) => items + "GB")
//           .join("/")}`;
//         break;
//       case i === 4:
//         Object.assign(icon.style, {
//           backgroundImage: "url(asset/icon/cam.png)",
//         });
//         teks.textContent = `Front Cam: ${data.frontCam}MP, Back Cam : ${data.backCam}MP`;
//         break;
//     }
//   }

//   div2.appendChild(moreSpec);
//   moreSpec.appendChild(moreSpecHeader);
//   moreSpec.appendChild(moreSpecTeks);
//   moreSpec.classList.add("tess");

//   moreSpecHeader.textContent = "More Spec";

//   Object.assign(moreSpecHeader.style, {
//     width: "100%",
//     padding: "0.3rem 0 0 0.4rem 0.8rem",
//   });

//   Object.assign(moreSpecTeks.style, {
//     padding: "0 0.3rem 3rem 0.8rem",
//     fontFamily: "Monospace",
//     fontWeight: "bold",
//   });

//   moreSpecTeks.textContent = `Speaker ${data.speaker}, Network ${data.network}, Battery ${data.battery}mAh`;
// }

function cardHasil(conTarget, data) {
  const container = document.createElement("section");
  const conKiri = document.createElement("section");
  const conKanan = document.createElement("section");

  container.classList.add("dcfgtds");

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
    const conHarga = document.createElement("div");
    const teksHarga = document.createElement("p");

    conKiri.appendChild(conImg);
    conImg.appendChild(conHarga);
    conHarga.appendChild(teksHarga);

    teksHarga.textContent = `${data.price.toLocaleString("id-ID")}`;

    Object.assign(conImg.style, {
      position: "relative",
      width: "85%",
      aspectRatio: "1/1",
      //   backgroundColor: "green",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(./asset/img-hp/${data.foto})`,
    });

    Object.assign(conHarga.style, {
      height: "3rem",
      width: "100%",
      //   backgroundColor: "yellow",
      backdropFilter: "blur(10px)",
      position: "absolute",
      bottom: "0",
      margin: "0 0 5% 0",
      borderRadius: "50px",
      border: "2px solid rgba(127, 127, 127, 1)",
      background: "#0000005b",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });

    Object.assign(teksHarga.style, {
      color: "var(--bg1)",
      // color: "",
      fontWeight: "900",
      fontSize: "1.3em",
    });
  }

  // container kanan
  {
    const ul = document.createElement("ul");
    const header = document.createElement("header");
    const headerTeks = document.createElement("p");

    conKanan.appendChild(header);
    header.appendChild(headerTeks);
    conKanan.appendChild(ul);

    headerTeks.textContent = `${data.name}`;

    Object.assign(header.style, {
      fontSize: "1.2em",
      fontWeight: "700",
      padding: "0 0 0 5%",
      color: "var(--accen)",
    });

    Object.assign(ul.style, {
      //   backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding: "0 0.5rem 0 0",
    });

    for (let i = 0; i < 6; i++) {
      const li = document.createElement("li");
      const conImg = document.createElement("div");
      const teks = document.createElement("p");

      ul.appendChild(li);
      li.appendChild(conImg);
      li.appendChild(teks);

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
        padding: "0 0 0.5rem 0",
        // backgroundColor: "green",
      });

      Object.assign(teks.style, {
        fontWeight: "800",
        color: "var(--font)",
        whiteSpace: "wrap",
      });

      switch (true) {
        case i === 0:
          teks.textContent = `${data.screen} ${data.refresRate
            .map((el) => el + "Hz")
            .join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/screen.png)",
          });
          break;
        case i === 1:
          teks.textContent = `${data.chipset}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/chipset.png)",
          });
          break;
        case i === 2:
          teks.textContent = `${data.ram.map((el) => el + "GB").join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/ram.png)",
          });
          break;
        case i === 3:
          teks.textContent = `${data.storage
            .map((el) => el + "GB")
            .join(" / ")}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/rom.png)",
          });
          break;
        case i === 4:
          teks.textContent = `Front Cam : ${data.frontCam}, Back Cam : ${data.backCam}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/cam.png)",
          });
          break;
        case i === 5:
          teks.textContent = `Speaker ${data.speaker}, Network ${data.network}`;
          Object.assign(conImg.style, {
            backgroundImage: "url(./asset/icon/.png)",
          });
          break;
      }
    }
  }
}

// cardHasil(conTarget);

export { cardHasil };
