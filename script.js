
const imagenes = document.querySelectorAll(".imagenes img");
const visor = document.getElementById("visorImagen");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        visor.style.display = "flex";
        imagenGrande.src = img.src;
    });
});

cerrar.addEventListener("click", () => {
    visor.style.display = "none";
});