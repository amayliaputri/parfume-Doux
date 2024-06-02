const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
