//menu
const menuBtn = document.querySelector('.menu__btn');
const menuIcon = document.querySelector('.menu__btn i');
const dropMenu = document.querySelector('.nav__mobile');
const overlay = document.querySelector('.overlay');

menuBtn.onclick = function() {
  toggleMenu();
};

overlay.onclick = function() {
  hideMenu();
};

function toggleMenu() {
  dropMenu.classList.toggle('open');
  overlay.classList.toggle('show');
  const isOpen = dropMenu.classList.contains('open');

  menuIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu';
}

function hideMenu() {
  dropMenu.classList.remove('open');
  overlay.classList.remove('show');
  menuIcon.classList = 'bx bx-menu';
}



