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

registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    checkName (inputUserName);
    checkAgreement(inputCheckbox);
    validateEmail(inputUserEmail);
    checkPassword(inputPassword);
    checkPasswords(inputPassword, inputConfirmPassword);
    console.log('click');

    if ( checkAgreement, checkName , validateEmail,   checkPassword,   checkPasswords === true){
    console.log('Отлично! Вы зарегистрированы')
    registrationForm.reset();
    }
});


