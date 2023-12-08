document.addEventListener('DOMContentLoaded', function () {
    const cookiesButton = document.querySelector('.button-cookies')
    const cookiesSection = document.querySelector('.cookie-policy')

    cookiesButton.addEventListener('click', function () {
        cookiesSection.classList.add('hide-cookies')
    })
})