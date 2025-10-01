
const ventana = document.getElementById("ventanaRetro");
const barra = document.getElementById("barraTitulo");

let offsetX, offsetY, isDragging = false;

barra.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - ventana.offsetLeft;
    offsetY = e.clientY - ventana.offsetTop;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
    ventana.style.left = `${e.clientX - offsetX}px`;
    ventana.style.top = `${e.clientY - offsetY}px`;
    }
});

function cerrarVentana() {
    ventana.style.display = "none";
}
