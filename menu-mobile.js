// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const navbarMobile = document.querySelector('.navbar-mobile');

// Função para fechar o menu mobile
function closeMenuMobile() {
    navbarMobile.style.display = 'none';
}

// Toggle do menu mobile
menuToggle.addEventListener('click', () => {
    navbarMobile.style.display = navbarMobile.style.display === 'block' ? 'none' : 'block';
});

// Listener para redimensionamento da janela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenuMobile();
    }
});

// Toggle dos dropdowns no mobile
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

mobileDropdowns.forEach(dropdown => {
    dropdown.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
});
