let persona = {
   nombre: "Ana",
   saludar: function () {
      console.log("Hola");
   }
};
let hamburguesaEspecial = {
   pan: "Pan brioche",
   carne: "Pollo crujiente",
   queso: "Suizo",
   extras: [
      "Lechuga",
      "Pepinos",
      "Miel"
   ],
   mostrarIngredientes: function () {
      console.log("Pan:", this.pan);
      console.log("Carne:", this.carne);
      console.log("Queso:", this.queso);
      console.log(
         "Extras:",
         this.extras.join(", ")
      );
   }
};

function mostrarVehiculo(){
   let auto ={
      Auto: "Honda Civic",
      Modelo: "EJ1 Coupé (1993)",
      Motor: "Spoon Engines",
      Turbo: "T66 Turbo",
      OxidoNitroso: "NOS",
      Escape: "Motec system exhaust",
      Extras: [
         "Wings West",
         "Aleron aluminio estilo R33 GT-R",
         "Llantas Axis Se7ven de 17 o 18 pulgadas",
         "Suspensión TEIN Flex Z/ Street Advance Z"
      ],


piezasdeauto: function () {
   alert(`Auto: ${this.Auto}
      Modelo: ${this.Modelo}
      Motor: ${this.Motor}
      Turbo: ${this.Turbo}
      OxidoNitroso: ${this.OxidoNitroso}
      Escape: ${this.Escape}
      Extras: ${thisextras.join(" - ")}`)
   }
};
auto.piezasdeauto; //Fuera de la función llamamos al método.
}

function metodoCasa() {
   let casa ={
      direccion: "Av Siempre Viva 742",
      habitaciones: 4,
      baños: 2,
      mostrarInformacion: function () {
         alert(`Direccion: ${this.direccion}`)
         alert(`Habitaciones: ${this.habitaciones}`)
         alert(`Baños: ${this.baños}`);
      }
};
casa.mostrarInformacion();
}