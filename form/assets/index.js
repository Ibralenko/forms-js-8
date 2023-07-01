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


function ValidateEmail(email) {

};

function checkPassword(password) {
    if (password.value.patternMismatch & password.value.patternMismatch) {
        return true;
    } else {
        document.querySelector('.error-password').innerHTML = 'Введите пароль согласно правилам';
        return false;
    }
};

function checkPasswords(password1, password2){
    if (password1 === password2) {
        return true;
    } else {
        document.querySelector('.error-password2').innerHTML = 'Пароли не совпадают'
    }
}

function checkAgreement(checkbox){}
if (inputCheckbox.checked) {
	button.disabled = false;
	} else {
	button.disabled = true;
};


registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    ValidateEmail(inputUserEmail.value)
    checkPassword(inputPassword);
    checkPasswords(inputPassword.value, inputConfirmPassword.value);
    checkAgreement(inputCheckbox);
    console.log('click');
});


