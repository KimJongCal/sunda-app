const ico = document.querySelector('.burger');
const fullMenu = document.querySelector('.full-menu');

ico.addEventListener('click', function() {
  this.classList.toggle('is-active');
  fullMenu.classList.toggle('is-active');
})