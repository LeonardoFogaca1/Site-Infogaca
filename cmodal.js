document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contact-cmodal");
    const closeButton = document.querySelector(".cclose");
    const contactLinks = document.querySelectorAll('.contact-link');

    // Adicionar evento para todos os links de contato
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('contact-cmodal', e);
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            closeModal("contact-cmodal");
        });
    }

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal("contact-cmodal");
        }
    });
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