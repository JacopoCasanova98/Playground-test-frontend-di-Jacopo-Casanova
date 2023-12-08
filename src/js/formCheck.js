document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact__form');
    const errorContainer = document.querySelector('.error-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        clearErrors();


        const emailInput = document.querySelector('.contact__form-input[placeholder="Insert your email"]');
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            displayError('Il campo email è obbligatorio.');
            return;
        }

        if (!isValidEmail(emailValue)) {
            displayError('Inserire una mail valida');
            return;
        }

        const messageInput = document.querySelector('.contact__form-input[placeholder="Write your message"]');
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            displayError('Il campo messaggio è obbligatorio.');
            return;
        }

        displaySuccess('Il modulo è stato inviato con successo!');
        form.reset();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(errorMessage) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorContainer.appendChild(errorElement);
    }

    function displaySuccess(successMessage) {
        const successElement = document.createElement('div');
        successElement.className = 'success-message';
        successElement.textContent = successMessage;
        errorContainer.appendChild(successElement);
    }

    function clearErrors() {
        while (errorContainer.firstChild) {
            errorContainer.removeChild(errorContainer.firstChild);
        }
    }
});
