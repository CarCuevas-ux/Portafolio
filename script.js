document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in');
    const darkModeButton = document.getElementById('modoOscuroBtn');

    // Configuración de IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    // Observar cada sección con la clase 'fade-in'
    sections.forEach(section => observer.observe(section));

    // Función para inicializar el modo oscuro
    const initializeDarkMode = () => {
        const isDarkModeActive = localStorage.getItem('modoOscuro') === 'true';
        document.body.classList.toggle('modo-oscuro', isDarkModeActive);
        updateDarkModeIcon(isDarkModeActive);
    };

    // Función para actualizar el icono del botón de modo oscuro
    const updateDarkModeIcon = (isDarkMode) => {
        const icon = darkModeButton.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-moon', isDarkMode);
            icon.classList.toggle('fa-sun', !isDarkMode);
        }
    };

    // Evento para alternar el modo oscuro
    darkModeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('modo-oscuro');
        updateDarkModeIcon(isDarkMode);
        localStorage.setItem('modoOscuro', isDarkMode);
    });

    // Inicializar el estado del modo oscuro al cargar la página
    initializeDarkMode();
});
document.getElementById('toggleButton').addEventListener('click', function() {
    var header = document.querySelector('header');
    var icon = document.getElementById('toggleIcon');
    
    // Alternar la clase 'closed' en el encabezado para cambiar el ícono
    header.classList.toggle('closed');
    
    // Alternar la visibilidad del encabezado
    var nav = document.querySelector('.navegacion');
    nav.style.display = (nav.style.display === 'none') ? 'block' : 'none';
});