// Funcionalidad 1: Al hacer clic en "¿Cómo funciona?", despliega un alert con las instrucciones[cite: 2]
document.getElementById('how-it-works').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Busca a tus Amigos y reparte a través de nuestra página abrazos a todos.');
});

// Funcionalidad 2: Al hacer clic en "Enviar Abrazo", incrementa en 1 la cantidad de abrazos para esa persona
function incrementHugs(elementId) {
    const countElement = document.getElementById(elementId);
    let currentHugs = parseInt(countElement.innerText, 10);
    currentHugs += 1;
    countElement.innerText = currentHugs;
}

// Funcionalidad 3: Al hacer clic en "Aceptar", oculta/elimina la sección de avisos de cookies[cite: 1]
document.getElementById('accept-cookies-btn').addEventListener('click', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'none';
});