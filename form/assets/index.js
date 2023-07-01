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

function checkName(name){
    if (name.value === ""){
        document.querySelector('.error-name').innerHTML = 'Введите имя'
    } else {
        return true;
    }
};

function ValidateEmail(email) {
    if (email.value === " "){
        document.querySelector('.error-email').innerHTML = 'Введите email'
    } else if (email.value.patternMismatch){
        return true;
    } else {
        document.querySelector('.error-email').innerHTML = 'Введите корректный email'
    }
};

function checkPassword(password) {
    if (password.value.patternMismatch && password.value.patternMismatch)  {
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


/*function checkAgreement(checkbox){}
if (inputCheckbox.checked) {
	return true;
	} else {
	document.querySelector('.error-checkbox').innerHTML = 'Вы не подтвердили согласие'
};*/


registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    checkName (inputUserName)
    ValidateEmail(inputUserEmail)
    checkPassword(inputPassword);
    checkPasswords(inputPassword.value, inputConfirmPassword.value);
    console.log('click');
});


