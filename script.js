// Navigation toggle for mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth scroll to sections for nav links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', checkFade);
// window.addEventListener('load', checkFade);
