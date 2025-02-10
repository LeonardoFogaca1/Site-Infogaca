// Toggle do menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navbarMobile = document.querySelector('.navbar-mobile');

menuToggle.addEventListener('click', () => {
    navbarMobile.style.display = navbarMobile.style.display === 'block' ? 'none' : 'block';
});

// Toggle dos dropdowns no mobile
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

mobileDropdowns.forEach(dropdown => {
    dropdown.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
})