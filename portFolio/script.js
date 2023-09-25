// Función para escribir la palabra "CARGANDO..." letra por letra
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.querySelector('.loading-text').innerHTML += text.charAt(i);
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
        }, 100); // Velocidad de escritura (en milisegundos)
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000); // Espera 1 segundo después de completar la escritura
    }
}

// Inicia la animación de escritura
function startTextAnimation() {
    typeWriter('CARGANDO...', 0, function() {
        // Oculta el texto de carga
        document.querySelector('.loading-text').style.display = 'none';
        // Muestra el contenido después de la carga
        document.querySelector('.content').classList.remove('hidden');
    });
}

// Inicia la animación al cargar la página
window.addEventListener('load', startTextAnimation);
