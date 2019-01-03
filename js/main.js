let singInForm = document.getElementById('registrationContainer');
let singInButton = document.getElementById('buttonForSignIn');
singInButton.onclick = function(){
    singInForm.hidden = false;
}

let exameUserButton = document.getElementById('exameUser');

exameUserButton.onclick = function (){
    singInForm.hidden = true;
}

