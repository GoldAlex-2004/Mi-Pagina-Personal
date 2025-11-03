// script.js

// Scroll suave para los enlaces de ancla (del menú de navegación)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el salto brusco

        // Obtiene el ID del destino (ej. #formacion)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula la posición del elemento, restando la altura de la navbar
            const headerOffset = 60; // Altura de la navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Realiza el scroll suave
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});