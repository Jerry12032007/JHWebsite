const header = document.querySelector('.header');
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const links = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', open);
});
links.forEach(link => link.addEventListener('click', () => menu.classList.remove('show')));
document.getElementById('year').textContent = new Date().getFullYear();
