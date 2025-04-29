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


//Js del casrrucel
const carousel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.elemento');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;
let intervalTime = 5000; // cada 5 segundos
let autoSlide = setInterval(moveToNextSlide, intervalTime);

function updateCarousel() {
carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
updateCarousel();
}

function moveToPrevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
updateCarousel();
}

    // Botones manuales
nextBtn.addEventListener('click', () => {
moveToNextSlide();
resetInterval();
});

prevBtn.addEventListener('click', () => {
moveToPrevSlide();
resetInterval();
});

function resetInterval() {
clearInterval(autoSlide);
autoSlide = setInterval(moveToNextSlide, intervalTime);
}


