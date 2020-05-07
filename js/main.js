let modal1 = document.getElementById("fondoModal1");
let contenido1 = document.getElementById("contenido-modal1");

let cerrar = document.getElementById("close");
let cerrar2 = document.getElementById("close2");
let cerrar3 = document.getElementById("close3");
let cerrar4 = document.getElementById("close4");
let cerrar5 = document.getElementById("close5");
let cerrar6 = document.getElementById("close6");
let cerrar7 = document.getElementById("close7");
let cerrar8 = document.getElementById("close8");
let cerrar9 = document.getElementById("close9");
let cerrar10 = document.getElementById("close10");

function primeraImagen() {
  document.getElementById("fondoModal1").style.display = "flex";
}
function segundaImagen() {
  document.getElementById("fondoModal2").style.display = "flex";
}
function terceraImagen() {
  document.getElementById("fondoModal3").style.display = "flex";
}
function cuartaImagen() {
  document.getElementById("fondoModal4").style.display = "flex";
}
function quintaImagen() {
  document.getElementById("fondoModal5").style.display = "flex";
}
function sextaImagen() {
  document.getElementById("fondoModal6").style.display = "flex";
}
function septimaImagen() {
  document.getElementById("fondoModal7").style.display = "flex";
}
function octavaImagen() {
  document.getElementById("fondoModal8").style.display = "flex";
}
function novenaImagen() {
  document.getElementById("fondoModal9").style.display = "flex";
}
function decimaImagen() {
  document.getElementById("fondoModal10").style.display = "flex";
}

window.addEventListener("click", function (e) {
  if (e.target == contenido1) {
    modal1.style.display = "none";
  }
});

cerrar.addEventListener("click", function () {
  document.getElementById("fondoModal1").style.display = "none";
});
cerrar2.addEventListener("click", function () {
  document.getElementById("fondoModal2").style.display = "none";
});
cerrar3.addEventListener("click", function () {
  document.getElementById("fondoModal3").style.display = "none";
});
cerrar4.addEventListener("click", function () {
  document.getElementById("fondoModal4").style.display = "none";
});
cerrar5.addEventListener("click", function () {
  document.getElementById("fondoModal5").style.display = "none";
});
cerrar6.addEventListener("click", function () {
  document.getElementById("fondoModal6").style.display = "none";
});
cerrar7.addEventListener("click", function () {
  document.getElementById("fondoModal7").style.display = "none";
});
cerrar8.addEventListener("click", function () {
  document.getElementById("fondoModal8").style.display = "none";
});
cerrar9.addEventListener("click", function () {
  document.getElementById("fondoModal9").style.display = "none";
});
cerrar10.addEventListener("click", function () {
  document.getElementById("fondoModal10").style.display = "none";
});
