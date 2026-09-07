document.addEventListener('DOMContentLoaded', () => {

    const botonLogin = document.getElementById('botonLogin');
    const campoCorreo = document.getElementById('campoCorreo');

    botonLogin.addEventListener('click', () => {
        const valorCorreo = campoCorreo.value.trim();
        alert(`Bienvenido\n${valorCorreo}`);
    });


    const contadorCarrito = document.getElementById('contadorCarrito');
    const botonesAgregar = document.querySelectorAll('.boton-agregar');
    let contador = 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            contador++;
            contadorCarrito.textContent = contador;
        });
    });


    const imagenPrincipal = document.getElementById('imagenPrincipal');
    const imagenOriginal = "static/images/comida-mexicana.jpg";
    const imagenHover = "static/images/comida-mexicana2.jpg";

    imagenPrincipal.addEventListener('mouseenter', () => {
        imagenPrincipal.src = imagenHover;
    });

    imagenPrincipal.addEventListener('mouseleave', () => {
        imagenPrincipal.src = imagenOriginal;
    });
});