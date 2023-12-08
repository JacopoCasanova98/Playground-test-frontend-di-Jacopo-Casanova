document.addEventListener('DOMContentLoaded', function () {
    const iconMenu = document.querySelector('.icon-menu');
    const navDiv = document.querySelector('.navbar');
    const navMenu = document.querySelector('nav-div-menu');

    iconMenu.addEventListener('click', function () {
        navDiv.classList.toggle('active');
        navMenu.classList.toggle('active')
    });
});
