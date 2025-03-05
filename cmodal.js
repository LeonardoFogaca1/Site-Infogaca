document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".cclose");
    const modal = document.getElementById("contact-cmodal");
    const form = document.getElementById("contact-form"); // Corrigido o ID do formulário

    if (modal) {
        modal.style.display = "none"; // Garante que o modal inicie fechado
    }

    if (closeButton && modal) {
        closeButton.addEventListener("click", function () {
            closeModal("contact-cmodal");
        });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o recarregamento da página
            
            // Feedback visual no botão
            const submitBtn = form.querySelector(".submit-btn");
            submitBtn.innerHTML = "Enviando...";
            submitBtn.disabled = true;

            // Simula um envio de formulário assíncrono (remova se for enviar via backend real)
            setTimeout(function () {
                submitBtn.innerHTML = "Enviar mensagem";
                submitBtn.disabled = false;
                closeModal("contact-cmodal"); // Fecha o modal após "envio"
            }, 1000); // Simula um atraso de 1 segundo antes de fechar
        });
    }

    const iframe = modal?.querySelector("iframe");
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
        document.body.style.overflow = 'hidden'; // Impedir scroll do body
        window.scrollTo(0, 0); // Resetar posição da janela
        
        modal.style.display = "flex";
        modal.style.position = "absolute";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.zIndex = "9000";
        modal.style.width = "100%";
        modal.style.alignContent = "center";
        modal.style.justifyContent = "center";

        if (iframe) {
            iframe.src = iframe.src; // Recarregar iframe
        }
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Restaurar scroll do body
    }
}