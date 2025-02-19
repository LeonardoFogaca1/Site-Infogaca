document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contact-cmodal");
    const closeButton = document.querySelector(".cclose");
    const iframe = document.getElementById("contact-frame");

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            closeModal("contact-cmodal");
        });
    }
});

function openModal(id, event) {
    if (event) {
        event.preventDefault(); // Previne o scroll da página
    }
    
    const modal = document.getElementById(id);
    const iframe = document.getElementById("contact-frame");
    
    if (modal) {
        modal.style.display = "block";
        if (iframe) {
            iframe.src = iframe.src; // Recarrega o iframe
        }
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}