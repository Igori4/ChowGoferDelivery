let singInForm = document.getElementById('registrationContainer');
let singInButton = document.getElementById('buttonForSignIn');
let closeRegistration = document.querySelector('.close-registration-menu');


singInButton.addEventListener('click', show)

function show() {
  singInForm.hidden = false;
}

function hide() {
  singInForm.hidden = true;
}


closeRegistration.addEventListener('click', hide)

