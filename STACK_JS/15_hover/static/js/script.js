const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";
});
const btnTexto = document.getElementById("btnTexto");

btnTexto.addEventListener("mouseover", function () {
  btnTexto.textContent = "¡El ratón está encima!";
});

btnTexto.addEventListener("mouseout", function () {
  btnTexto.textContent = "Texto original";
});

const btnEstilo = document.getElementById("btnEstilo");

btnEstilo.addEventListener("mouseover", function () {
  btnEstilo.style.backgroundColor = "blue";
  btnEstilo.style.color = "purple";
});

btnEstilo.addEventListener("mouseout", function () {
  btnEstilo.style.backgroundColor = "";
  btnEstilo.style.color = "";
});