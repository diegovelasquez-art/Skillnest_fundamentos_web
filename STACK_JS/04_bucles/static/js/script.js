function ejercicio1() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

function recorrerLista() {
    // Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre", 4, True, [2,4]]
    /* 
    alert (nombre)
    0
    let nombre = "Carlos";
    alert(nombre);
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres=[1]) --> Imprime Maria
    alert(nombres.length); --> 2
       */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo Bucle While */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos(){
let datosPendientes = 5;

while (datosPendientes > 0) {
    alert(`Cargando datos...${datosPendientes} de 5`);
    datosPendientes--;
}
}

function validarContrasena() {
    let contraseñaCorrecta = false;
// !variables = variables es distinta a verdadera - dentro de condición
while (!contraseñaCorrecta) {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === "1234") {
    contraseñaCorrecta = true;
    alert("Acceso concedido.");
    break; //rompe el bucle.
    } else {
    alert("Contraseña incorrecta, intenta de nuevo.");
    }
}
}