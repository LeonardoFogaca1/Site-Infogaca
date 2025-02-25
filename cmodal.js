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

function openModal(id, event) {
    if (event) {
        event.preventDefault();
    }
    
    const modal = document.getElementById(id);
    const iframe = document.getElementById("contact-frame");
    
    if (modal) {
        // Impedir scroll do body
        document.body.style.overflow = 'hidden';
        
        // Resetar posição da janela
        window.scrollTo(0, 0);
        
        modal.style.display = "flex";
        modal.style.position = "absolute";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%"
        modal.style.zIndex = "9000";
        modal.style.width = "100%";
        modal.style.aligncontent = "center";
        modal.style.justifycontent = "center";

        if (iframe) {
            // Recarregar iframe
            iframe.src = iframe.src;
        }
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        // Restaurar scroll do body
        document.body.style.overflow = 'auto';
    }
}

