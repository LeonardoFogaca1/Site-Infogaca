document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".cclose"); // Seleciona o botão de fechar
    const modal = document.getElementById("contact-cmodal"); // Seleciona o modal

    if (closeButton && modal) {
        closeButton.addEventListener("click", function () {
            modal.style.display = "none"; // Fecha o modal alterando o display
        });
    }

    // Se houver um iframe dentro do modal, define o seu src
    const iframe = modal.querySelector("iframe");
    if (iframe) {
        iframe.src = iframe.dataset.src || iframe.src;
    }
});
