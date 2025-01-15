const menuToggle = document.querySelector('#menu-toggle');
const mobileNavbar = document.querySelector('#mobile-navbar');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  mobileNavbar.classList.toggle('hidden');
});
