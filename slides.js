
    let currentIndex = 0; // Índice do slide atual
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Muda para o próximo slide
        document.querySelector(".carousel-slides").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(changeSlide, 3000); // Troca de slide a cada 3 segundos
