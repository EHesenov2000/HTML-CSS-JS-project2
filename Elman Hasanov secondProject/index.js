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
// ---------------------------------------
// -------------------------/
var date = new Date();
document.querySelector(".tarix").innerText = date.getFullYear();
// ------------------------------
// ---------------------------------AXTARİS SİSTEMİNİ QURMAQ------------------
// ----------------------------------
// let myPromise = new Promise(function (ikinci) {
//   let r = Math.ceil(Math.random() * 100);
//   let url = "https://api.3sual.az/api/task";
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (data) {
//       if (!data.completed) {
//         ikinci(data);
//       }
//     });
// });

// ---------------- BIR DEFE AXTARISA VERILEN SOZUN LOCALA ELAVE EDILMESI-----------------
// ---------------------klikde diger sehifeye kecid de burdadir -------------------------
// var SearchedWordsLocalList = [];
// function salam(e) {
//   e.preventDefault();
//   myPromise.then((number) => {
//     for (let k = 0; k < number.length; k++) {
//       if (
//         number[k].espanol ==
//         document.getElementsByClassName("SearchText")[0].value
//       ) {
//         console.log(number[k].azerbaijani);
//         localStorage.getItem(
//           "SearchedWords",
//           JSON.stringify(SearchedWordsLocalList)
//         );
//         if (
//           !SearchedWordsLocalList.includes(
//             document.getElementsByClassName("SearchText")[0].value
//           )
//         ) {
//           SearchedWordsLocalList.push(
//             document.getElementsByClassName("SearchText")[0].value
//           );
//         }

//         localStorage.setItem(
//           "SearchedWords",
//           JSON.stringify(SearchedWordsLocalList)
//         );
//         document
//           .getElementsByClassName("InputIcon")[0]
//           .setAttribute("href", "./tercume.html");
//         document.getElementsByClassName("InputIcon")[0].onclick = function () {
//           document.getElementsByClassName("SearchText")[0].value = "";
//         };
//         return number[k].azerbaijani;
//       } else if (
//         number[k].azerbaijani ==
//         document.getElementsByClassName("SearchText")[0].value
//       ) {
//         console.log(number[k].espanol);
//         localStorage.getItem(
//           "SearchedWords",
//           JSON.stringify(SearchedWordsLocalList)
//         );
//         if (
//           !SearchedWordsLocalList.includes(
//             document.getElementsByClassName("SearchText")[0].value
//           )
//         ) {
//           SearchedWordsLocalList.push(
//             document.getElementsByClassName("SearchText")[0].value
//           );
//         }
//         localStorage.setItem(
//           "SearchedWords",
//           JSON.stringify(SearchedWordsLocalList)
//         );
//         document
//           .getElementsByClassName("InputIcon")[0]
//           .setAttribute("href", "./tercume.html");
//         document.getElementsByClassName("InputIcon")[0].onclick = function () {
//           document.getElementsByClassName("SearchText")[0].value = "";
//         };

//         return number[k].espanol;
//       }
//     }
//   });
// }
// salam();
// ---------------------autocomplete yaradiiram-----------------------------

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = [];
async function cahirdim() {
  await fetch("https://api.3sual.az/api/task ")
    .then((response) => response.json())
    .then(function (json) {
      var random1 = Math.random() * json.length;
      random1 = Math.floor(random1);
      console.log(random1);
      document.querySelector(".CardTextBottomFirst").innerText =
        json[random1].espanol;

      var random2 = Math.random() * json.length;
      random2 = Math.floor(random2);
      console.log(random2);
      document.querySelector(".CardTextBottomSecond").innerText =
        json[random2].espanol;
      for (let k = 0; k < json.length; k++) {
        countries.push(json[k].azerbaijani);
        countries.push(json[k].espanol);
      }
    });
}
// var countries = salam;
cahirdim();

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);
// ---------------------autocomplete yaratdim-----------------------------
var navitems = document.querySelectorAll(".onMobileMenu li");
navitems[0].style.backgroundColor = "indigo";
navitems[0].style.color = "white";
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
// ---------------------------------------AUDIO---------------------
function togglePlay0(video) {
  var audio = document.getElementsByTagName("audio")[0];
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
function togglePlay0(video) {
  var audio = document.getElementsByTagName("audio")[0];
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
function togglePlay1(video) {
  var audio1 = document.getElementsByTagName("audio")[1];
  if (audio1) {
    if (audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
  }
}
// --------------------------------------------------------------

// ----------------------BURDA İSTİFADECİNİN BİR DEFE AXTARDİQLARİNİ TEKLİF KİMİ CİXARİRAM--------------------------------
function InputValue() {
  document.getElementsByClassName("suggest")[0].style.display = "none";
  // console.log();
  // console.log(document.getElementsByClassName("SearchText")[0].value);
  for (let k = 0; k < countries.length; k++) {
    if (
      countries[k] == document.getElementsByClassName("SearchText")[0].value
    ) {
      // console.log("true");
      document
        .getElementsByClassName("InputIcon")[0]
        .setAttribute("href", "./tercume.html");
      return document.getElementsByClassName("SearchText")[0].value;
    } else {
      document
        .getElementsByClassName("InputIcon")[0]
        .removeAttribute("href", "./tercume.html");
    }
  }
}
var LocalList = [];
function CheckAndAddLocal() {
  console.log(InputValue());
  if (InputValue()) {
    var value = InputValue();
    if (localStorage.getItem("LocalWords") != null) {
      sessionStorage.setItem("SendToAnotherPage", InputValue());

      localStorage.setItem(
        "LocalWords",
        localStorage.getItem("LocalWords") + "," + value
      );
    } else {
      localStorage.setItem("LocalWords", value);
    }
  } else {
    return false;
  }
}

if (localStorage.getItem("LocalWords")) {
  var Lists = [];
  for (
    let m = 0;
    m < localStorage.getItem("LocalWords").split(",").length;
    m++
  ) {
    var newElement = document.createElement("li");
    newElement.setAttribute("type", "none");
    newElement.setAttribute("style", "background-color:grey");
    newElement.setAttribute("onclick", "WriteToInput(event)");
    newElement.innerText = localStorage.getItem("LocalWords").split(",")[m];
    var link = document.createElement("a");
    link.setAttribute("href", "./tercume.html");
    link.setAttribute("style", "text-decoration:none;color:black");
    if (!Lists.includes(newElement.innerText)) {
      Lists.push(newElement.innerText);
      link.appendChild(newElement);
      document.getElementsByClassName("suggest")[0].appendChild(link);
    }
    console.log(newElement);
    console.log(localStorage.getItem("LocalWords").split(",")[m]);
  }
}
// ------------------------------------------------------
$(document).ready(function () {
  document.getElementsByClassName("suggest")[0].style.display = "none";
  $(".suggest").slideUp();
  $(".SearchText").focus(function () {
    $(".suggest").slideDown();
  });
  $(".SearchText").blur(function () {
    $(".suggest").slideUp();
  });
});
// ----------------------------------------------------------------------
function WriteToInput(e) {
  document.getElementsByClassName("SearchText")[0].value = e.target.innerText;
  sessionStorage.setItem("SendToAnotherPage", InputValue());
}
// ----------------------------------------------------------------------
document.querySelectorAll(".NavbarRightLi")[0].style.backgroundImage =
  "linear-gradient(to right,#8423D3,#47176D)";
document.querySelectorAll(".NavbarRightLi")[0].style.color = "white";
function Ispan() {
  document.querySelectorAll(".NavbarRightLi")[0].style.backgroundImage =
    "linear-gradient(to right,#8423D3,#47176D)";
  document.querySelectorAll(".NavbarRightLi")[0].style.color = "white";
  document.getElementsByClassName("NavbarLeftLi")[0].innerText =
    "Página de inicio";
  document.getElementsByClassName("NavbarLeftLi")[1].innerText =
    "Nuestros servicios";
  document.getElementsByClassName("NavbarLeftLi")[2].innerText = "Conocernos";
  document.getElementsByClassName("NavbarLeftLi")[3].innerText = "Contacto";
  document.getElementsByClassName("mobil")[0].innerText = "Página de inicio";
  document.getElementsByClassName("mobil")[1].innerText = "Nuestros servicios";
  document.getElementsByClassName("mobil")[2].innerText = "Conocernos";
  document.getElementsByClassName("mobil")[3].innerText = "Contacto";
  document.getElementsByClassName("HeadTextContent")[0].innerText =
    "La primera plataforma de idioma español en línea de Azerbaiyán";
  document
    .getElementsByTagName("input")[0]
    .setAttribute("placeholder", "Buscar");
  document.getElementsByClassName("CardText")[0].innerText = "Traducción";
  document.getElementsByClassName("CardText")[1].innerText = "Descripción";
  document.getElementsByClassName("CardText")[2].innerText = "Diccionario";
  document.getElementsByClassName("CardText")[3].innerText = "Artículos";
  document.getElementsByClassName("CardText")[4].innerText = "Textos";
  document.getElementsByClassName("CardTextBottom")[0].innerText =
    "La palabra más buscada";
  document.getElementsByClassName("CardTextBottom")[1].innerText =
    "Palabra del DIA";
}

function Azerbaijan() {
  document.getElementsByClassName("NavbarLeftLi")[0].innerText = "Ana sehife";
  document.getElementsByClassName("NavbarLeftLi")[1].innerText =
    "Xidmetlerimiz";
  document.getElementsByClassName("NavbarLeftLi")[2].innerText = "Bizi tani";
  document.getElementsByClassName("NavbarLeftLi")[3].innerText = "Elaqe";
  document.getElementsByClassName("mobil")[0].innerText = "Ana sehife";
  document.getElementsByClassName("mobil")[1].innerText = "Xidmetlerimiz";
  document.getElementsByClassName("mobil")[2].innerText = "Bizi tani";
  document.getElementsByClassName("mobil")[3].innerText = "Elaqe";
  document.getElementsByClassName("HeadTextContent")[0].innerText =
    "Azerbaycanin ilk online Ispan dili platformasi";
  document
    .getElementsByTagName("input")[0]
    .setAttribute("placeholder", "Axtarin... ");
  document.getElementsByClassName("CardText")[0].innerText = "Tercume";
  document.getElementsByClassName("CardText")[1].innerText = "Tesriflenme";
  document.getElementsByClassName("CardText")[2].innerText = "Sozluk";
  document.getElementsByClassName("CardText")[3].innerText = "Meqaleler";
  document.getElementsByClassName("CardText")[4].innerText = "Metnler";
  document.getElementsByClassName("CardTextBottom")[0].innerText =
    "En cox axtarilan soz";
  document.getElementsByClassName("CardTextBottom")[1].innerText =
    "En cox axtarilan soz";
}

document.querySelectorAll(".NavbarRightLi")[0].onclick = function () {
  Azerbaijan();

  document.querySelectorAll(".NavbarRightLi")[0].style.backgroundImage =
    "linear-gradient(to right,#8423D3,#47176D)";
  document.querySelectorAll(".NavbarRightLi")[0].style.color = "white";
  document.querySelectorAll(".NavbarRightLi")[1].style.backgroundImage =
    "unset";
  document.querySelectorAll(".NavbarRightLi")[1].style.color = "unset";
};

document.querySelectorAll(".NavbarRightLi")[1].onclick = function () {
  Ispan();

  document.querySelectorAll(".NavbarRightLi")[1].style.backgroundImage =
    "linear-gradient(to right,#8423D3,#47176D)";
  document.querySelectorAll(".NavbarRightLi")[1].style.color = "white";
  document.querySelectorAll(".NavbarRightLi")[0].style.backgroundImage =
    "unset";
  document.querySelectorAll(".NavbarRightLi")[0].style.color = "unset";
};
// ---------------------------------------------------------------------------
