document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinksNavbar = document.querySelectorAll('.nav-link-navbar');
    const logoImage = document.querySelector('.logo-nav');

    checkAndUpdateScrollClass();

    window.addEventListener('scroll', function () {
        checkAndUpdateScrollClass();
    });

function checkAndUpdateScrollClass() {
    if (window.innerWidth < 1024) {
        logoImage.src = 'src/img/logo-playground-black.png';
        navbar.style.display = '';
    }

    if (window.innerWidth > 1024) {
        logoImage.src = 'src/img/logo-playground-black.png';

        if (window.scrollY > 50) {
            navbar.classList.add('scroll');
            navLinksNavbar.forEach(link => (link.style.color = 'black'));
            logoImage.src = 'src/img/logo-playground-black.png';
        } else {
            navbar.classList.remove('scroll');
            navLinksNavbar.forEach(link => (link.style.color = 'white'));
            logoImage.src = './src/img/logo-playground-white.png';
        }
    }
}
});