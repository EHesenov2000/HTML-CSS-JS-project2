// ----------------------------------FOOTER-DEKI TARIXIN AVTOMATIK DEYISMESI HER IL--------------------------------------------
var date = new Date();
document.querySelector(".tarix").innerText = date.getFullYear();
// ----------------------------------------------------------------------------
// --------------------------SEHIFENIN HEADERI---------------------------------------
document.querySelectorAll(".NavbarLeftLi")[3].style.backgroundImage =
  "linear-gradient(to right,#8423D3,#47176D)";
document.querySelectorAll(".NavbarLeftLi")[3].style.color = "white";
document.querySelectorAll(".NavbarLeftLi")[3].style.borderRadius = "3px";
document.querySelectorAll(".NavbarRightLi")[0].style.backgroundImage =
  "linear-gradient(to right,#8423D3,#47176D)";
document.querySelectorAll(".NavbarRightLi")[0].style.color = "white";
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
navitems[3].style.backgroundColor = "indigo";
navitems[3].style.color = "white";
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
// --------------------------------------------------------
function NameInput() {
  // console.log(document.getElementById("name").value);
  if (document.getElementById("name").value) {
    document.getElementsByClassName("NameError")[0].innerText = "";
    return true;
  } else {
    document.getElementsByClassName("NameError")[0].innerText =
      "Adinizi duzgun daxil edin";
    return false;
  }
}
function PhoneInput() {
  // console.log(document.getElementById("number").value);
  if (document.getElementById("number").value) {
    var numberCount = 0;
    var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let l = 0; l < document.getElementById("number").value.length; l++) {
      for (let p = 0; p < numberList.length; p++) {
        if (document.getElementById("number").value[l] == numberList[p]) {
          numberCount++;
        }
      }
    }
  }
  if (numberCount == document.getElementById("number").value.length) {
    document.getElementsByClassName("PhoneError")[0].innerText = "";
    return true;
  } else {
    document.getElementsByClassName("PhoneError")[0].innerText =
      "Nomrenizi duzgun daxil edin";
    return false;
  }
}
function MessageInput() {
  // console.log(document.getElementById("message").value);
  if (document.getElementById("message").value) {
    document.getElementsByClassName("MessageError")[0].innerText = "";
    return true;
  } else {
    document.getElementsByClassName("MessageError")[0].innerText =
      "Mesajinizi daxil edin";
    return false;
  }
}

document.querySelector(".buttonClick").onclick = function () {
  if (!document.getElementById("name").value) {
    document.getElementsByClassName("NameError")[0].innerText =
      "Adinizi duzgun daxil edin";
  } else if (document.getElementById("name").value && NameInput()) {
    document.getElementsByClassName("NameError")[0].innerText = "";
  }
  if (!document.getElementById("number").value) {
    document.getElementsByClassName("PhoneError")[0].innerText =
      "Nomrenizi duzgun daxil edin";
  } else if (document.getElementById("number").value && PhoneInput()) {
    document.getElementsByClassName("PhoneError")[0].innerText = "";
  }
  if (!document.getElementById("message").value) {
    document.getElementsByClassName("MessageError")[0].innerText =
      "Mesajinizi daxil edin";
  } else if (document.getElementById("message").value && MessageInput()) {
    document.getElementsByClassName("MessageError")[0].innerText = "";
  }
};
