const registrationForm = document.forms.registrationForm;
const button = registrationForm.elements.submit;
const inputUserName = registrationForm.elements.name;
const inputUserEmail = registrationForm.elements.email;
const inputUserAge =registrationForm.elements.age;
const inputUserSex =registrationForm.elements.gender;
const inputProfession = registrationForm.elements.profession;
const inputPassword = registrationForm.elements.password;
const inputConfirmPassword = registrationForm.elements.passwordRepeat;
const inputCheckbox = registrationForm.elements.checkbox;



    function ValidateEmail() {
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (userEmail.value.match(mailFormat)) {
            return true;
        } else {
            registerForm.querySelector(".error-email").innerHTML = 'Введен неверный адрес'
            return false;
        }
    }

function checkPassword() {
    if (inputPassword.value.patternMismatch & inputConfirmPassword.value.patternMismatch ) {
        return true;
    } else {
        document.querySelector('.error-password').innerHTML = 'Введите пароль согласно правилам';
        return false;
    }
}

if (inputCheckbox.checked) {
	button.disabled = false;
	} else {
	button.disabled = true;
    }


registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('click');

});


