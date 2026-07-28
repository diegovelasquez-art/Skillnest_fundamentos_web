console.log("Conexión exitosa");

// Ejemplo Función simple (sin parámetros)
function saludar(/* parámetros */) {
    alert("¡Hola, bienvenido!");
}

//saludar(); //Ejecución
//¡Hola, bienvenido!

// saludar();
// saludar();
// saludar();

function saludarParam(nombre) { //parámetro nombre
    alert("¡Hola, " + nombre + "!");
}

// saludarParam("Diego");
// saludarParam("Catalina");

// ¡Hola, Luis!
// ¡Hola, Ana!
function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; //Este valor se devuelve porque cumple la condicion
        } else {
            return b;
        }
    }

    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    //Máximo guardara el valor de retorno.
    alert(`El número mayor entre, ${numero1}, y, ${numero2}, es:, ${maximo}`);
}

//Tarea
/*
Crear una funcion que reciba 3 parámetros, a, b y c. 
debe sumar a + b y el resultado restarlo por c. 
devolver el valor final y mostrar con un alert.
*/
function tresParametros(){
function sumaResta(){
    let suma = a + b ;
    let resultado = suma - c;
    return resultado;
    }
    let resultadoFinal = tresParametros(5, 10, 3);
    alert(`El resultado final es: ${resultadoFinal}`);
}
