const registrationForm = document.forms.regictrationForm;
const button = form.elements.submit;
const userName = form.elements.name;
const userEmail = form.elements.email;
const userAge =form.elements.age;
const userSex =form.elements.gender;
const profession = form.elements.profession;
const password = form.elements.password;
const confirmPassword = form.elements.passwordRepeat;
const checkbox = form.elements.checkbox;


    function ValidateEmail() {
        const errorEmail = registerForm.querySelector(".error-message");
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (userEmail.value.match(mailFormat)) {
            return true;
        } else {
            console.log("Ваш адрес электронной почты введён неверно!");
            return false;
        }
    }


// function checkPassword (){
//     if (password.value.match){
//         return true;
//     } else {
//         password.textContent = 'Введите пароль согласно правилам';
//         return false;
//     }
// }

let isChecked = false;
if (checkbox.checked) {
    isChecked = true;
} else {
    button.disabled = true;
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('click')
    ValidateEmail()

    form.reset()
});


