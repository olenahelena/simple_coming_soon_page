const myButton = document.getElementById('submitButton');
const emailInput = document.getElementById('email');
const errorText = document.getElementById('errorText');
const errorIcon = document.getElementById('errorIcon');
const successText = document.getElementById('successText');

myButton.onclick = function () {
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
        errorText.classList.remove('error');
        errorIcon.classList.remove('error-icon');
        emailInput.classList.add('email_border');
    } 
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}