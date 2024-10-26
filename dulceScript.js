function si(){
    location.href="gai.html";
}
// Asegurarse de que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón "No" usando su id
    let noButton = document.getElementById("noButton");

    // Inicializa un contador de clics
    let clickCount = 0;

    // Agrega un evento de clic al botón "No"
    noButton.addEventListener("click", function() {
        clickCount++; // Incrementa el contador de clics

        // Reduce el tamaño del botón en cada clic
        this.style.transform = `scale(${1 - clickCount * 0.1})`;

        // Si es el cuarto clic, oculta el botón
        if (clickCount >= 4) {
            this.style.display = "none";
        }
    });
});
