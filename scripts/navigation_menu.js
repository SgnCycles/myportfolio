const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-list');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

navMenuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    navMenuItems.forEach(nav => nav.setAttribute('aria-current', 'false'));
    item.setAttribute('aria-current', 'true')
  });
});