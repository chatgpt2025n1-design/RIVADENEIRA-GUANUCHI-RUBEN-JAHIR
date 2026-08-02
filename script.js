// Animación de aparición suave al hacer scroll (Intersection Observer) para Versión PRO
document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll(".tarjeta, .caratula, .seccion-video");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(40px) scale(0.98)";
        tarjeta.style.transition = "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(tarjeta);
    });
});

// Funcionalidad de Lupa / Modal Avanzado para Imágenes
function abrirModal(elemento) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgModal");
    const imgOriginal = elemento.querySelector("img");

    modal.style.display = "flex";
    imgModal.src = imgOriginal.src;
}

function cerrarModal() {
    const modal = document.getElementById("modalZoom");
    modal.style.display = "none";
}