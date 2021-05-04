// ----------------------------------FOOTER-DEKI TARIXIN AVTOMATIK DEYISMESI HER IL--------------------------------------------
var date = new Date();
document.querySelector(".tarix").innerText = date.getFullYear();
// ----------------------------------------------------------------------------
// --------------------------SEHIFENIN HEADERI---------------------------------------
document.querySelectorAll(".NavbarLeftLi")[0].style.backgroundImage =
  "linear-gradient(to right,#8423D3,#47176D)";
document.querySelectorAll(".NavbarLeftLi")[0].style.color = "white";
document.querySelectorAll(".NavbarLeftLi")[0].style.borderRadius = "3px";
//-----BURDAN ASAGİ ONCLİCK-DE BİR PAGE-DEN DİGERİNE KECMESİ İDİ A TEQİ İLE YAZDİM DEYE SKOMENTE ALİRAM--------------------------------------------

// for (let i = 0; i < document.querySelectorAll(".NavbarLeftLi").length; i++) {
//   document.querySelectorAll(".NavbarLeftLi")[i].onclick = function () {
//     for (
//       let index = 0;
//       index < document.querySelectorAll(".NavbarLeftLi").length;
//       index++
//     ) {
//       if (i != index) {
//         document.querySelectorAll(".NavbarLeftLi")[index].style.color =
//           "#7c7c7c";
//         document.querySelectorAll(".NavbarLeftLi")[
//           index
//         ].style.backgroundImage = "unset";
//       }
//     }
//     document.querySelectorAll(".NavbarLeftLi")[i].style.backgroundImage =
//       "linear-gradient(to right,#8423D3,#47176D)";
//     document.querySelectorAll(".NavbarLeftLi")[i].style.borderRadius = "3px";
//     document.querySelectorAll(".NavbarLeftLi")[i].style.color = "white";
//   };
// }
// for (let i = 0; i < document.querySelectorAll(".NavbarRightLi").length; i++) {
//   document.querySelectorAll(".NavbarRightLi")[i].onclick = function () {
//     for (
//       let index = 0;
//       index < document.querySelectorAll(".NavbarRightLi").length;
//       index++
//     ) {
//       if (i != index) {
//         document.querySelectorAll(".NavbarRightLi")[index].style.color =
//           "#7c7c7c";
//         document.querySelectorAll(".NavbarRightLi")[
//           index
//         ].style.backgroundImage = "unset";
//       }
//     }
//     document.querySelectorAll(".NavbarRightLi")[i].style.backgroundImage =
//       "linear-gradient(to right,#8423D3,#47176D)";
//     document.querySelectorAll(".NavbarRightLi")[i].style.borderRadius = "3px";
//     document.querySelectorAll(".NavbarRightLi")[i].style.color = "white";
//   };
// }
// ----------------------------------------------------------------------------------
var navitems = document.querySelectorAll(".onMobileMenu li");
for (let x = 0; x < navitems.length; x++) {
  navitems[x].onclick = function () {
    navitems[x].style.backgroundColor = "indigo";
    navitems[x].style.color = "white";
    for (let p = 0; p < navitems.length; p++) {
      if (x != p) {
        navitems[p].style.backgroundColor = "white";
        navitems[p].style.color = "grey";
      }
    }
  };
}
// ----------------------------------------------------------------------------------
// ---------------A1,A2,B1,B2,C1 KECIDLeri- ve A2-nin ozunde olan xirda kecidler---------------------------
document.getElementsByClassName("level")[0].style.backgroundImage =
  "linear-gradient(to right, #8423d2, #48176f)";
document.getElementsByClassName("level")[0].style.color = "white";
document.getElementsByClassName("level")[1].style.color = "grey";
document.getElementsByClassName("level")[2].style.color = "grey";
document.getElementsByClassName("level")[3].style.color = "grey";
document.getElementsByClassName("level")[4].style.color = "grey";

document.getElementsByClassName("ROWLEVELS")[0].style.display = "flex";
document.getElementsByClassName("ROWLEVELS")[1].style.display = "none";
document.getElementsByClassName("ROWLEVELS")[2].style.display = "none";
document.getElementsByClassName("ROWLEVELS")[3].style.display = "none";
document.getElementsByClassName("ROWLEVELS")[4].style.display = "none";

for (let f = 0; f < document.getElementsByClassName("level").length; f++) {
  document.getElementsByClassName("level")[f].onclick = function () {
    document.getElementsByClassName("level")[f].style.backgroundImage =
      "linear-gradient(to right, #8423d2, #48176f)";

    document.getElementsByClassName("level")[f].style.color = "white";
    document.getElementsByClassName("ROWLEVELS")[f].style.display = "flex";
    for (let k = 0; k < document.getElementsByClassName("level").length; k++) {
      if (f != k) {
        document.getElementsByClassName("level")[k].style.backgroundImage =
          "unset";
        document.getElementsByClassName("level")[k].style.color = "grey";
        document.getElementsByClassName("ROWLEVELS")[k].style.display = "none";
      }
    }
  };
}
// ---------------------------Luget sehifesinde movzu axtarisi isleyir-------------------------------------------------------
if (document.getElementsByClassName("InputIcon")[0]) {
  document.getElementsByClassName("InputIcon")[0].onclick = function () {
    if (document.getElementsByClassName("level")[0].style.color == "white") {
      for (let h = 0; h < 4; h++) {
        if (
          document.getElementById("SearchText").value ==
          document.getElementsByTagName("button")[h].innerText
        ) {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "flex";
          document.getElementsByClassName("ShadowCard")[
            h
          ].style.justifyContent = "center";
        } else {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "none";
        }
      }
    } else if (
      document.getElementsByClassName("level")[1].style.color == "white"
    ) {
      for (let h = 4; h < 8; h++) {
        if (
          document.getElementById("SearchText").value ==
          document.getElementsByTagName("button")[h].innerText
        ) {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "flex";
          document.getElementsByClassName("ShadowCard")[
            h
          ].style.justifyContent = "center";
        } else {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "none";
        }
      }
    } else if (
      document.getElementsByClassName("level")[2].style.color == "white"
    ) {
      for (let h = 8; h < 12; h++) {
        if (
          document.getElementById("SearchText").value ==
          document.getElementsByTagName("button")[h].innerText
        ) {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "flex";
          document.getElementsByClassName("ShadowCard")[
            h
          ].style.justifyContent = "center";
        } else {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "none";
        }
      }
    } else if (
      document.getElementsByClassName("level")[3].style.color == "white"
    ) {
      for (let h = 12; h < 16; h++) {
        if (
          document.getElementById("SearchText").value ==
          document.getElementsByTagName("button")[h].innerText
        ) {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "flex";
          document.getElementsByClassName("ShadowCard")[
            h
          ].style.justifyContent = "center";
        } else {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "none";
        }
      }
    } else if (
      document.getElementsByClassName("level")[4].style.color == "white"
    ) {
      for (let h = 16; h < 20; h++) {
        if (
          document.getElementById("SearchText").value ==
          document.getElementsByTagName("button")[h].innerText
        ) {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "flex";
          document.getElementsByClassName("ShadowCard")[
            h
          ].style.justifyContent = "center";
        } else {
          document.getElementsByClassName("ShadowCard")[h].style.display =
            "none";
        }
      }
    }
  };
}

// ------------------------------------ Daha cox-a klik edende hemin cardin acilmasi----------------------------------------------
document.getElementsByClassName("LongNavbar")[0].style.display = "flex";
for (
  let d = 0;
  d < document.getElementsByClassName("CardBottomSecond").length;
  d++
) {
  document.getElementsByClassName("CardBottomSecond")[d].style.display = "none";
}

for (let v = 0; v < document.querySelectorAll(".More").length; v++) {
  document.querySelectorAll(".More")[v].onclick = function () {
    // document.getElementsByClassName("More")[v] bu kard acilsin
    document.getElementsByClassName("LongNavbar")[0].style.display = "none";
    document.getElementsByClassName("ShadowCard")[v].parentNode.style.display =
      "contents";
    document.getElementsByClassName("CardBottomSecond")[v].style.display =
      "block";
    document.getElementsByClassName("CardBottom")[v].style.display = "none";

    for (let x = 0; x < document.querySelectorAll(".More").length; x++) {
      if (v != x) {
        document.getElementsByClassName("ShadowCard")[
          x
        ].parentNode.style.display = "none";
        // document.querySelectorAll(".More")[x].setAttribute("href", "#");
        // document.getElementsByClassName("CardBottom")[x].style.display = "flex";
      }
    }
  };
}
// ------------------------------------------------------------------------------------------
