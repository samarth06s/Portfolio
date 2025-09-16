document.addEventListener('DOMContentLoaded', () => {
  // Scroll to section on button click
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Attach event to "Get in Touch" button
  const contactBtn = document.querySelector('header button');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => scrollToSection('contact'));
  }

  // Sections & nav links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Highlight nav link based on scroll position and reveal section animation
  const scrollHandler = () => {
    let currentSection = '';

    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop - 120) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });

    // Animate sections fading in on scroll
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        section.classList.add('visible');
      }
    });
  };

  // Initial check
  scrollHandler();

  window.addEventListener('scroll', scrollHandler);

  // Contact form handling with professional alert
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      if (name.length < 2) {
        alert('Please enter a valid name.');
        return;
      }
      alert(`Thank you for reaching out, ${name}! I will respond as soon as possible.`);
      form.reset();
    });
  }
});
