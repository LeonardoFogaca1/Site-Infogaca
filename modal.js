// Função para abrir modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Função para fechar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Eventos para abrir os modais no menu desktop
document.getElementById("login-btn").addEventListener("click", function() {
    openModal("login-modal");
});

document.getElementById("register-btn").addEventListener("click", function() {
    openModal("register-modal");
});

// Eventos para abrir os modais no menu mobile
document.getElementById("login-btn-mobile").addEventListener("click", function() {
    openModal("login-modal");
});

document.getElementById("register-btn-mobile").addEventListener("click", function() {
    openModal("register-modal");
});

// Função de registro
function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;
    if (username && password) {
        localStorage.setItem("user", JSON.stringify({ username, password }));
        alert("Usuário registrado com sucesso!");
        closeModal("register-modal");
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função de login
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Login bem-sucedido!");
        closeModal("login-modal");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
}