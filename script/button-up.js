// Scroll up
// Selecciona el elemento con el ID "button-up" y agrega un event listener para el evento "click".
document.getElementById("button-up").addEventListener("click", scrollUp);

// Definición de la función scrollUp que se ejecuta cuando se hace clic en el botón.
function scrollUp() {
    // Obtiene la posición actual de desplazamiento vertical del documento.
    var currentScroll = document.documentElement.scrollTop;

    // Verifica si la posición de desplazamiento actual es mayor que cero.
    if (currentScroll > 0) {
        // Solicita una animación suave llamando a la función scrollUp en el próximo ciclo de animación.
        window.requestAnimationFrame(scrollUp);

        // Ajusta la posición de desplazamiento vertical para desplazar la página hacia arriba de manera gradual.
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

// Selecciona el elemento con el ID "button-up" y almacénalo en la variable buttonUp.
var buttonUp = document.getElementById("button-up");

// Asigna una función al evento "scroll" del objeto window. Esta función se ejecutará cuando se desplace la página.
window.onscroll = function() {
    // Obtiene la posición de desplazamiento vertical del documento.
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
        // Si la posición de desplazamiento es mayor que 500 píxeles, muestra el botón aplicando una transformación de escala.
        buttonUp.style.transform = "scale(1)";
    } else {
        // Si la posición de desplazamiento es menor o igual a 500 píxeles, oculta el botón aplicando una transformación de escala.
        buttonUp.style.transform = "scale(0)";
    }
};
