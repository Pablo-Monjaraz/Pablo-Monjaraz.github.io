// Selecciona los elementos necesarios del DOM
const boton_menu = document.querySelector(".button_menu");
const header = document.querySelector(".header");
const container_navegation = document.querySelector(".container_navegation");
const body = document.body;

// Variables de estado y posición
let posActual = 0;
let status_button = true;

// Evento de clic del botón de menú
boton_menu.addEventListener("click", function () {
    container_navegation.classList.toggle("active_button_menu");
    if (status_button) {
        body.style.overflow = "hidden";
        header.style.backdropFilter = "none";
        status_button = false;
    } else {
        body.style.overflow = "visible";
        header.style.backdropFilter = "blur(10px)";
        status_button = true;
    }
});

// Evento de desplazamiento (scroll) de la ventana
window.addEventListener("scroll", function () {
    if (this.window.scrollY > posActual) {
        // Si se está desplazando hacia abajo
        if (status_button) {
            header.classList.remove("active_header");
            header.classList.add("desactive_header");
        }
    } else {
        // Si se está desplazando hacia arriba
        header.classList.remove("desactive_header");
        header.classList.add("active_header");
    }
    // Aplicar estilos de acuerdo a la posición de desplazamiento
    if (this.window.scrollY === 0) {
        header.style.backdropFilter = "none";
        header.classList.add("ocultar_box_shadow");
    } else {
        header.style.backdropFilter = "blur(10px)";
        header.classList.remove("ocultar_box_shadow");
    }
    // Actualizar la posición de desplazamiento
    posActual = this.window.scrollY;
});
