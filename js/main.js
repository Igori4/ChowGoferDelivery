let singInForm = document.getElementById('registrationContainer');
let singInButton = document.getElementById('buttonForSignIn');
singInButton.onclick = function(){
    singInForm.hidden = false;
}

let closeRegistration = document.querySelector('.close-registration-menu');


closeRegistration.addEventListener('click',() => {
    singInForm.hidden = true;
})

