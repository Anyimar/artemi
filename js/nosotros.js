//Js del menu desplegable
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrirB");
const cerrar = document.querySelector("#cerrarB");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})