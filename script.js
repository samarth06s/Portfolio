const menu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
