document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.toggle-btn');
        const text = item.querySelector('p'); // Alteração aqui
        btn.addEventListener('click', () => {
            text.classList.toggle('active');
            btn.textContent = text.classList.contains('active') ? '▲' : '▼';
        });
    });
});
