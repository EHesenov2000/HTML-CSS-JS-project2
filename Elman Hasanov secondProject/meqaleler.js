// ----------------------------------FOOTER-DEKI TARIXIN AVTOMATIK DEYISMESI HER IL--------------------------------------------
var date = new Date();
document.querySelector(".tarix").innerText = date.getFullYear();
// ----------------------------------------------------------------------------
// --------------------------SEHIFENIN HEADERI---------------------------------------

document.querySelectorAll(".NavbarLeftLi")[0].style.backgroundImage =
  "linear-gradient(to right,#8423D3,#47176D)";
document.querySelectorAll(".NavbarLeftLi")[0].style.color = "white";
document.querySelectorAll(".NavbarLeftLi")[0].style.borderRadius = "3px";
// --------------------
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
// ---------------------------Meqale sehifesinde movzu axtarisi isleyir-------------------------------------------------------
document.getElementsByClassName("InputIcon")[0].onclick = function () {
  for (let h = 0; h < 8; h++) {
    if (
      document.getElementById("SearchText").value ==
      document.getElementsByTagName("button")[h].innerText
    ) {
      document.getElementsByClassName("ShadowCard")[h].style.display = "flex";
      document.getElementsByClassName("ShadowCard")[
        h
      ].parentNode.parentNode.style.display = "block";
    } else {
      document.getElementsByClassName("ShadowCard")[h].style.display = "none";
    }
  }
};
