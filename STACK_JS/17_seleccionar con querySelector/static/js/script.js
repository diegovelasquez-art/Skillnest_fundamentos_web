console.log("Conexion exitosa...")

let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido  de la etiqueta es: ${title.textContent}`);

// Seleccionar parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

const botonCambiado = document.querySelector("#boton")

botonCambiado.addEventListener("click", function () {
   if (botonCambiado !== null) {//Botón existe?
   if (this.textContent === "Haz click en mi y cambiare") {
      this.textContent = "Ves que es distinto?"
      this.StylePropertyMap.backgroundColor = "#ffe4a4"
      this.StylePropertyMap.color = "#0a0a0a"
   } else {
      thid.textContent = "Haz click en mi y cambiare"
      this.StylePropertyMap.backgroundColor = "#6df421"
      this.StylePropertyMap.color = "#f9f9f9"
   }
}