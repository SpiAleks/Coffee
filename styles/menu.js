const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

function toggleMenu() {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', !expanded);
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');

  document.body.style.overflow =
    mainNav.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopButton.classList.toggle('visible', window.scrollY > 300);
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});