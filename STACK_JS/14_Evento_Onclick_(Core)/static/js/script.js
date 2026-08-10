function cambiarSesion() {
    let btn = document.getElementById("btn-login");
    
    if (btn.innerText === "Iniciar sesión") {
        alert("Has iniciado sesión correctamente");
        btn.innerText = "Cerrar sesión";
    } else {
        alert("Has cerrado sesión correctamente");
        btn.innerText = "Iniciar sesión";
    }
}

function mostrarAlerta() {
    let btnLogin = document.getElementById("btn-login");

    if (btnLogin.innerText === "Cerrar sesión") {
        alert("Perfil del usuario: Usuario Activo");
    } else {
        alert("Perfil de usuario inexistente");
    }
}

function aumentarLikes(boton) {
    let span = boton.querySelector(".likes");
    let cantidad = parseInt(span.innerText);
    cantidad++;
    span.innerText = cantidad;
}