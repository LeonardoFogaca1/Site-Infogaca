let index = 0;
const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slides .slide').length;

function moveToNextSlide() {
    index = (index + 1) % totalSlides; // Ciclo entre as imagens
    slides.style.transform = `translateX(-${index * 36}%)`; // Move as imagens para a esquerda
}

setInterval(moveToNextSlide, 3000); // Muda a imagem a cada 3 segundos