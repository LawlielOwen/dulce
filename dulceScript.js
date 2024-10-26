function si(){
    location.href="gai.html";
}
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón "No"
    let noButton = document.getElementById("noButton");

    // Agrega un evento para cuando el cursor se pone sobre el botón "No"
    noButton.addEventListener("mouseenter", function() {
        // Genera nuevas posiciones aleatorias para el botón
        let x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        let y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

        // Aplica las nuevas posiciones al botón
        noButton.style.position = "absolute";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    });
});
