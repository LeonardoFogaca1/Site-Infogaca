document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contact-cmodal");
    const closeButton = document.querySelector(".cclose");

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            closeModal("contact-cmodal");
        });
    }
});

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
        document.getElementById("contact-frame").src = "other-pages/nosContate.html"; // Garante que o iframe carregue
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}
