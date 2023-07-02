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
    if (name.value.trim() === ""){
        document.querySelector('.error-name').innerHTML = 'Введите имя'
        return false;
    } else {
        return true;
    }
};

function validateEmail(email) {
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        return true;
    }else if (email.value === ''){
        document.querySelector('.error-email').innerHTML = 'Введите email'
        return false;
    } else {
        document.querySelector('.error-email').innerHTML = 'Введите корректный email'
        return false;
}};

function checkPassword(password) {
    const correctPassword  = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(password.value.match(correctPassword)){
        return true;
    }else {
        document.querySelector('.error-password').innerHTML = 'Введите корректный пароль';
    }
};

function checkPasswords(password1, password2){
    if (password1.value === password2.value) {
        return true;
    } else {
        document.querySelector('.error-password2').innerHTML = 'Пароли не совпадают'
    }
};

function checkAgreement(checkbox){
if (checkbox.checked) {
	return true;
	} else {
	document.querySelector('.error-checkbox').innerHTML = 'Ознакомьтесь с условиями'
}};

function isValidateForm  () {
    if (checkName (inputUserName) === false ||
    checkAgreement(inputCheckbox) === false ||
    validateEmail(inputUserEmail) === false ||
    checkPassword(inputPassword) === false ||
    checkPasswords(inputPassword, inputConfirmPassword) === false ){
        document.querySelector('.errorsInfo').innerHTML = 'Заполните все поля'
        return false;
    } else {
        console.log("it's ok");
        document.querySelector('.error-checkbox').innerHTML = '';
        document.querySelector('.error-password2').innerHTML = '';
        document.querySelector('.error-password').innerHTML = '';
        document.querySelector('.error-name').innerHTML = '';
        document.querySelector('.error-email').innerHTML = '';
        document.querySelector('.errorsInfo').innerHTML = '';
        registrationForm.reset();
        return true;
    }
}

registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    checkName(inputUserName);
    validateEmail(inputUserEmail);
    checkPassword(inputPassword);
    checkPasswords(inputPassword ,inputConfirmPassword);
    checkAgreement(inputCheckbox);
    if (isValidateForm ()=== true){
        console.log('Регистрация завершена')
    }
});


